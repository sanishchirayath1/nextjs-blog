import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/Layout"

function firstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
        </Layout>
    )
}

export default firstPost
