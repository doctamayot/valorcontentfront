import React from 'react';
import App from 'next/app';
import Head from 'next/head'
import '../styles/basico.css';
import "../styles/fontawesome";
import '../public/styles.css';




function MyApp({ Component, pageProps }) {
  return (

      <>
      <Head>
        <title>Valor Content</title>
        <meta name="description" content="Contenapp, Si quieres formarte y capacitarte, aca te escogemos el mejor contenido de valor y lo ponemos a tu alcance"></meta>
      </Head>    
      <Component {...pageProps} />
      </>
  );
}

export default MyApp