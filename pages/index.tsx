import Link from 'next/link'
import {MainLayout} from '../components/MainLayout'
import Socials from '../components/Socials'


export default function Index({socials}) {
    return (
            <MainLayout title={'Home Page'}>
            <h1 style={{textAlign:'center'}}>Next.js 😎</h1> <br/>
                <hr/>
                <br/>
                <Socials socials={socials} /> <br/>
            <p><Link href={'/about'}><a>About</a></Link></p> <br/>
            <p><Link href={'/posts'}><a>Posts</a></Link></p> <br/>
            <p><Link href={'/users'}><a>Users</a></Link></p> <br/>
            </MainLayout>
    )
}


export async function getStaticProps(ctx) {
   try {
       const response = await fetch(`${process.env.API_HOST}/socials`)
       const data = await response.json()

       if (!data) {
           return {
               notFound: true
           }
       }

       return {
           props: {socials: data}
       }
   } catch {
       return {
           props: {socials: null}
       }
   }
}