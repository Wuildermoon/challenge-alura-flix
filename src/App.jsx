import GlobalContext from "./context/GlobalContext";
import AppRoutes from "./routes/routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalContext />
      <AppRoutes />
    </>
  );
}

export default App;
