import type { ReactNode } from 'react';

export interface Children {
  children?: ReactNode;
}
export interface ClassName {
  className?: string;
}

export type LayoutProps = {
  title: string;
} & Children;
