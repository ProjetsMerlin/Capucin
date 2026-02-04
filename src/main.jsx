import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

/* ENTREE */
import App from "./App"

/* STYLES */
import "./style.css"

/* START */
ReactDOM.createRoot(document.getElementById("capucin")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)