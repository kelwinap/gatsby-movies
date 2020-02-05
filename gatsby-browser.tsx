import * as React from "react";
import { Provider } from "react-redux";
import "./src/css/global.css"

import { store } from "./src/store";

export const wrapRootElement = ({ element }) =>
  <Provider store={store} >
    {element}
  </Provider>;
