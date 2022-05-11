import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import Link from 'next/link'
import {MyPost} from '../../interfaces/post'
import {MainLayout} from '../../components/MainLayout'
import {NextPageContext} from 'next'


interface PostPageProps {
    post: MyPost
}

export default function Post({ post: serverPost }: PostPageProps) {
    const [post, setPost] = useState(serverPost)
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4300/posts/${router.query.id}`)
            const data = await response.json()
            setPost(data)
        }

        if (!serverPost) {
            load()
        }
    }, [])

    if (!post) {
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>
    }

    return (
        <MainLayout>
            <h1>{post.title}</h1> <br/>
            <hr />
            <br/>
            <p>{post.body}</p>
            <br/>
            <Link href={'/posts'}><a>Back to all posts</a></Link>
        </MainLayout>
    )
}

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
    if (!req) {
        return {post: null}
    }

    const response = await fetch(`http://localhost:4300/posts/${query.id}`)
    const post: MyPost = await response.json()

    return {post}
}
