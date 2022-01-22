import { PunkProvider } from './contexts/PunkContext';

import { Home } from './pages/Home';

import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <>
      <PunkProvider>
        <Home />
      </PunkProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
 