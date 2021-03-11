import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
  // React classes have render methods
  render() {
    return (
      <Html lang="en-US">
        {/* <Head></Head> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
