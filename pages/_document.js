import Document, { Html, Head, Main, NextScript } from 'next/document'
import { css } from '@emotion/core';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook);

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es" 
      css={css`
      background: url("../images/fondo.png") repeat ;
      
     @media (min-width: 640px) {
        border-left: 3rem solid #d69e2e;

        }
  `} 
  >      
        <Head>            
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap
               &family=Roboto&display=swap" rel="stylesheet"/> 
        </Head>                  
        <body>           
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument