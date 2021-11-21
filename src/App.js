/** @jsxImportSource theme-ui */
import './App.css';
import NavBar from './components/NavBar';
import { useColorMode } from "theme-ui";
import { useMediaQuery } from "react-responsive";
import Body from './components/Body';

function App() {
  const [colorMode, setColorMode] = useColorMode();
  useMediaQuery(
    {
      query: "(prefer-colors-scheme: dark)",
    },
    undefined,
    (isDarkPreferred) => setColorMode(isDarkPreferred ? "dark" : "light")
  );

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <>
      <NavBar toggleColorMode={toggleColorMode} colorMode={colorMode} />
      <Body />
    </>
  );
}

export default App;
