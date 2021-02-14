import Head from 'next/head';
import Landing from '../components/landing';

export default function Home() {
  
  return (
    <div >
      <Head>
        <title>Product Cart Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  )
}
