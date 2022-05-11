import React from 'react'
import {MainLayout} from '../../components/MainLayout'
import Router from 'next/router'

const About = () => {

    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout title={'About Page'}>
            <h1>Страница о нас </h1> <br/>
            <h3>Created by Marat© 🤖 <a href="https://github.com/Maratik555" target="_blank">➡ GitHub</a></h3>
             <br/>
            <button onClick={linkClickHandler}>Go back to home</button> <br/> <br/>
            <button onClick={() => Router.push('/posts')}>Go to posts</button> <br/> <br/>
            <button onClick={() => Router.push('/users')}>Go to users</button>
        </MainLayout>
    )
}


export default About
