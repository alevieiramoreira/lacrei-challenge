export interface PageContent {
  key: 'main' | 'professional' | 'user';
  title: string;
}

export const pagesContent: PageContent[] = [
  {
    key: 'main',
    title: 'Home'
  },
  {
    key: 'user',
    title: 'Pessoa Usuária'
  },
  {
    key: 'professional',
    title: 'Profissional'
  }
];
