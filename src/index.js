import { render } from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <App className="bg-slate-200 text-black dark:bg-slate-800 dark:text-slate-100" />,
  rootElement
);
