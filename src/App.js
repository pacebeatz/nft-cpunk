import Providers from "./contexts";

import { Home } from './pages/Home';

import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <>
      <Providers>
        <Home />
      </Providers>
      <GlobalStyle />
    </>
  );
}

export default App;
 
