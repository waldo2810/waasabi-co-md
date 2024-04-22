import { Routes } from "@generouted/react-router";
import ReactDOM from "react-dom/client";
import Providers from "./components/providers";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <Routes />
  </Providers>
);
