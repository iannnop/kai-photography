import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Mate:ital@0;1&display=swap" rel="stylesheet" />
        </Head>
        <body className='bg-stone-900 text-stone-200'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument