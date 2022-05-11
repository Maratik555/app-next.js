import {useRouter} from 'next/router'
import {MainLayout} from '../../components/MainLayout'

export default function User({user}) {
    const {query} = useRouter()
    if (!user) {
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>
    }

    return (
        <MainLayout title={'User page'}>
            <div>
                <h1 style={{color: 'green'}}>Пользователь {query.id} 📌 </h1> <br/>
                <h2>Name : {user.username}</h2> <br/>
                <div>📱 Phone : {user.phone}</div>
            </div>
        </MainLayout>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user}
    }
}