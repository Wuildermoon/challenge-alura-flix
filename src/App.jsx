import GlobalContextProvider from "./context/GlobalContext";
import AppRoutes from "./routes/routes";
import GlobalStyle from "./assets/styles/GlobalStyles"

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
