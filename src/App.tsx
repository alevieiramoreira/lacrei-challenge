import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from 'Pages/Main';
import ProfessionalPage from 'Pages/Professional';
import UserPage from 'Pages/User';
import Header from 'components/Header';
import Footer from 'components/Footer';
import GlobalStyle from 'styles/global';
import PageContextProvider from 'contexts/PageContext';

function App() {
  return (
    <>
      <Helmet>
        <title>Home | Desafio Lacrei</title>
        <link rel="icon" href="/favicon.jpeg" />
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
      <PageContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              index
              element={
                <>
                  <MainPage />
                </>
              }
            />
            <Route
              path="/professional"
              element={
                <>
                  <ProfessionalPage />
                </>
              }
            />
            <Route
              path="/user"
              element={
                <>
                  <UserPage />
                </>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </PageContextProvider>
    </>
  );
}

export default App;
