import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/preface'><a>Preface</a></Link> |
        <Link href='/ch1'><a>ch1</a></Link> |
        <Link href='/ch2'><a>ch2</a></Link> |
        <Link href='/ch3'><a>ch3</a></Link> |
        <Link href='/ch4'><a>ch4</a></Link> |
        <Link href='/ch5'><a>ch5</a></Link> |
        <Link href='/ch6'><a>ch6</a></Link> |
        <Link href='/ch7'><a>ch7</a></Link> |
        <Link href='/ch8'><a>ch8</a></Link> |
        <Link href='/ch9'><a>ch9</a></Link> |
        <Link href='/ch10'><a>ch10</a></Link> |
        <Link href='/chindex'><a>index</a></Link>
      </nav>
    </header>

    { children }

    <footer>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/preface'><a>Preface</a></Link> |
        <Link href='/ch1'><a>ch1</a></Link> |
        <Link href='/ch2'><a>ch2</a></Link> |
        <Link href='/ch3'><a>ch3</a></Link> |
        <Link href='/ch4'><a>ch4</a></Link> |
        <Link href='/ch5'><a>ch5</a></Link> |
        <Link href='/ch6'><a>ch6</a></Link> |
        <Link href='/ch7'><a>ch7</a></Link> |
        <Link href='/ch8'><a>ch8</a></Link> |
        <Link href='/ch9'><a>ch9</a></Link> |
        <Link href='/ch10'><a>ch10</a></Link> |
        <Link href='/chindex'><a>index</a></Link>   
    </footer>
  </div>
)
