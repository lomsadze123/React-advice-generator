import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./components/reset.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <GlobalStyle />
  </>
);
