import Layout from "@/components/layouts"
import utilStyles from "../public/styles/utils.module.css"
export default function Home() {
  return (
    <Layout
      tittle="Home nextJs"
      home={true}
    >
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - yous’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
