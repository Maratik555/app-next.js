import Link from 'next/link'
import {MainLayout} from '../components/MainLayout'
// @ts-ignore
import classes from '../styles/error.module.css'

export default function ErrorPage() {
    return (
        <MainLayout>
            <h1 className={classes.error}>Error 404 😥</h1> <br/>
            <p>Please <Link href={'/'}><a>go back</a></Link> to safety</p>
        </MainLayout>
    )
}