import Page from '../components/Page';

export default function MyApp({ Component, pageProps }) {
  return (
    <Page cool="F-Yeah!">
      <Component {...pageProps} />
    </Page>
  );
}
