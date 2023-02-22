import { createContext, ReactNode, useState } from 'react';

type Pages = 'main' | 'user' | 'professional';

interface Context {
  currentPage: Pages;
  setActivePage: (pageTitle: Pages) => void;
}

interface PageContextProvider {
  children: ReactNode;
}

export const PageContext = createContext<Context>({
  currentPage: 'main'
} as Context);

const PageContextProvider = ({ children }: PageContextProvider) => {
  const [activePage, setActivePage] = useState<Pages>('main');

  return (
    <PageContext.Provider value={{ currentPage: activePage, setActivePage }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
