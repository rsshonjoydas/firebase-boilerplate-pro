import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en' className='light'>
        <Head>
          <meta httpEquiv='Content-Type' content='text/html' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='description' content='MERN stack developer looking for a job' />
          <meta name='keywords' content='Full Stack Web Developer, Freelancer ,MERN developer' />
          <meta name='theme-color' content='#317EFB' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
