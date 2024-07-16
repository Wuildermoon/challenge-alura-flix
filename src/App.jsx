import GlobalContextProvider from "./context/GlobalContext";
import AppRoutes from "./routes/routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalContextProvider>
        <AppRoutes />
      </GlobalContextProvider>
    </>
  );
}

export default App;
