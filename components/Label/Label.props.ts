import { DetailedHTMLProps } from "react";

export interface LabelProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	colorScheme?: 'primary' | 'ghost' | 'discount' | 'chip';
	children: React.ReactNode;
}