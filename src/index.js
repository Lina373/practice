import "./global.scss";

import { default as React } from "react";
import { default as ReactDOM } from "react-dom/client";
import { Application } from "./Application";

const applicationRoot = ReactDOM.createRoot(
  document.getElementById("application-root")
);

applicationRoot.render(<Application />);
