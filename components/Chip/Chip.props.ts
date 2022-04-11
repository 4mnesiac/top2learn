import { DetailedHTMLProps } from "react";

export interface ChipProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	color?: 'primary' | 'info' | 'ghost' | 'error' | 'success';
	children: React.ReactNode;
	size?: 's' | 'm';
}