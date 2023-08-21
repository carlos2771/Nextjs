import Layout from "@/components/layouts"
import Link from "next/link"
export default function index({ data }) {
  return (
    <Layout>
      <h1>Lista de blog </h1>
      {
        data.map(({ id, title, body }) => ( // se desestructura ya que el json tiene esas propiedades
          <div key={id}>
            <h3>
            <Link href={`/blog/${id}`}>
              {id} - {title}
            </Link>
            </h3>
            <p>{body}</p>
          </div>
        ))
      }
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts") // obtener los datos 
    const data = await res.json()
    return {
      props: {
        data  // envio los datos
      }
    }
  } catch (error) {
    console.log("error de getProps", error);
    return{
      props:{
        data: null,
      }
    }
  }
}