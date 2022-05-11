import {MainLayout} from '../components/MainLayout'
import Link from 'next/link'
import Head from 'next/head'

export default function Users({users}) {

    if (!users) {
        return <MainLayout>
            <Head>
                <title>Posts Page | Next </title>
            </Head>
            <p>Loading ...</p>
        </MainLayout>
    }
    return (
        <MainLayout title={'Users page'}>
            <h1>Users Page </h1> <br/>
            <ul style={{paddingLeft: 15}}>
                {users.map(user =>
                    <li key={user.id} style={{padding: 4}}>
                        <Link href={`/user/[id]`} as={`/user/${user.id}`}>
                            <a>🧓 {user.username}</a>
                        </Link>
                        <div>📧 {user.email}</div>
                    </li>
                )}
            </ul>
        </MainLayout>
    )
}

export async function getStaticProps(ctx) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()

    return {
        props: {users} // will be passed to the page component as props
    }
}