import { FunctionComponent } from 'react';
import { TypographyProps } from './Typography.props';
import cn from 'classnames';
import styles from './Typography.module.css';

export const Typography: FunctionComponent<TypographyProps> = ({ size = 'm', className, children, ...props }): JSX.Element => {
	return (
		<p className={cn(styles.typography, className, {
			[styles.s]: size === 's',
			[styles.m]: size === 'm',
			[styles.l]: size === 'l'
		})}
			{...props}
		>
			{children}
		</p>
	);
};