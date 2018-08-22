import * as url from "url";
import * as React from "react";

export type UrlLike = url.UrlObject | url.Url;

export interface LinkProps {
  as?: string | UrlLike;
  children: React.ReactNode;
  href?: string | UrlLike;
  passHref?: boolean;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  onError?: (error: any) => void;
}

export default class extends React.Component<LinkProps> { }
