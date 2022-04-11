import { DetailedHTMLProps } from "react";

export interface TypographyProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: 's' | 'm' | 'l';
	children: React.ReactNode;
}