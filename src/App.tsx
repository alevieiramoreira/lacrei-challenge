import MainPage from 'Pages/Main';
import GlobalStyle from 'styles/global';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Home | Desafio Lacrei</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,200;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Header currentPage="main" />
      <MainPage />
      <Footer currentPage="main" />
    </>
  );
}

export default App;
