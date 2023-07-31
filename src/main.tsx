import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { setNonce } from "@ionic/core/components";

setNonce("**CSP_NONCE**");

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
