import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>True North Challenges</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="True North Challenges" />
        <p className="description">
          Out for a run will be back shortly!
        </p>
      </main>

      <Footer />
    </div>
  )
}
