import { UrlObject } from 'url';

type Url = string | UrlObject;

export type ClassName = {
  className?: string;
};

export type LinkProps = {
  label?: string;
  className?: string;
  href: Url;
  as?: Url;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string | false;
};

export interface PathLabel {
  id: number;
  path: string;
  label?: string;
  icon?: any;
  tooltip?: string;
}
