import {MyPost} from '../interfaces/post'
import {useEffect, useState} from 'react'
import {MainLayout} from '../components/MainLayout'
import Head from 'next/head'
import Link from 'next/link'
import {NextPageContext} from 'next'


interface PostsPageProps {
    posts: MyPost[]
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {
    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:4300/posts')
            const json = await response.json()
            setPosts(json)
        }

        if (!serverPosts) {
            load()
        }
    }, [])

    if (!posts) {
        return <MainLayout>
            <Head>
                <title>Posts Page | Next </title>
            </Head>
            <p>Loading ...</p>
        </MainLayout>
    }

    return (
            <MainLayout title={'Posts Page'}>
            <h1>Posts Page</h1>
                <ul style={{padding:15}}>
                    {posts.map(post => (
                        <li key={post.id} style={{padding: 8}}>
                            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                                <a style={{textDecoration: 'none'}}>{post.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </MainLayout>
    )
}

Posts.getInitialProps = async ({req}: NextPageContext) => {
    if (!req) {
        return {posts: null}
    }

    const response = await fetch(`http://localhost:4300/posts`)
    const posts: MyPost[] = await response.json()

    return {posts}
}