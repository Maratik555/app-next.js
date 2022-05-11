import Head from 'next/head'
import Link from 'next/link'


export function MainLayout({ children, title = 'Next App' }) {
    return (
        <>
            <Head>
                <title>{title} | Next </title>
                <meta name="keywords" content="next,javascript,nextjs,react" />
                <meta name="description" content="this is youtube tutorial for next" />
                <meta charSet="utf-8" />
            </Head>
            <nav>
                <a href='https://github.com/Maratik555' style={{marginRight: 650}} >Created by Marat 😊 </a>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/users'}><a>Users</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
                <Link href={'/about'}><a>About</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
        nav {
          position: fixed;
          height: 70px;
          left: 0;
          top: 0;
          right: 0;
          font-size:20px;
          background: darkblue;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          
        }
        
        nav a:hover {
        text-decoration: underline;
        }
        
        nav a {
          display: inline-flex;
          align-items: center;
          padding: 0 10px;
          margin-right: 50px;
          color: #fff;
          text-decoration: none;
        }
        
        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
        </>
    )
}