import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import Link from 'next/link'
import {MyPost} from '../../interfaces/post'
import {MainLayout} from '../../components/MainLayout'
import {NextPageContext} from 'next'


interface PostPageProps {
    post: MyPost
}

export default function Post({ post}: PostPageProps) {

    if (!post) {
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>
    }

    return (
        <MainLayout>
            <h1 style={{color: 'orange'}}>Post : {post.id}</h1> <br/>
            <hr />
            <br/>
            <p> 📃 {post.body} </p>
            <br/>
            <Link href={'/posts'}><a>Back to all posts</a></Link>
        </MainLayout>
    )
}

export async function getStaticPaths() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const post = await response.json()

    const paths = post.map(({id}) => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const posts = await response.json()

    if (!posts) {
        return {
            notFound: true
        }
    }

    return {
        props: {post: posts}
    }
}

