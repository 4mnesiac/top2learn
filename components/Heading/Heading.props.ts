import { DetailedHTMLProps } from "react";

export interface HeadingProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    tag?: 'h1' | 'h2' | 'h3';
    children: React.ReactNode
}