import Layout from "@/components/layouts";
import Link from "next/link";

export default function primerPost({ data }) {
  if (!data) {
    return (
      <Layout>
        <p>Aun no se encuentran los datos en el dominio</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>{data.id} - {data.title}</h1>
      <p>{data.body}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts"); // obtiene los datos
    const data = await res.json(); // los datos se convierten en JSON
    const paths = data.map(({ id }) => ({
      params: { id: `${id}` }, // transformamos el ID en una cadena
    }));

    return {
      paths,
      fallback: false, // para que no genere diferentes páginas y solo sea estática
    };
  } catch (error) {
    console.log(error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`); // el parámetro ID se obtiene de getStaticPaths
    const data = await res.json();

    return {
      props: {
        data, // envío de datos
      },
    };
  } catch (error) {
    console.log("error de getProps", error);
    return {
      props: {
        data: null, // Manejar el error devolviendo datos nulos
      },
    };
  }
}
