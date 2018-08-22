import * as React from "react";
import { NextComponent, NextContext } from ".";
import { SingletonRouter } from "./router";

export interface AppComponentProps {
  Component: NextComponent<any>;
  pageProps: any;
}

export interface AppComponentContext {
  Component: NextComponent<any>;
  router: SingletonRouter;
  ctx: NextContext;
}

export class Container extends React.Component { }

export default class App<TProps = {}> extends React.Component<TProps & AppComponentProps> { }
