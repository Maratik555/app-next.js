import {MyPost} from '../interfaces/post'
import {useEffect, useState} from 'react'
import {MainLayout} from '../components/MainLayout'
import Head from 'next/head'
import Link from 'next/link'
import {NextPageContext} from 'next'


interface PostsPageProps {
    posts: MyPost[]
}

export default function Posts({ posts}: PostsPageProps) {

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

export async function getStaticProps(ctx) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`)
    const posts = await response.json()

    if (!posts) {
        return {
            notFound: true
        }
    }

    return {
        props: {posts}
    }
}