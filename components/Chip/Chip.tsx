import cn from 'classnames';
import { FunctionComponent } from 'react';
import { ChipProps } from './Chip.props';
import styles from './Chip.module.css';

export const Chip: FunctionComponent<ChipProps> = ({ color = 'info', size = 's', className, children, ...props }) => {
	return (
		<div className={cn(styles.chip, className, {
			[styles.primary]: color == 'primary',
			[styles.ghost]: color == 'ghost',
			[styles.error]: color == 'error',
			[styles.info]: color == 'info',
			[styles.success]: color == 'success',
			[styles.s]: size == 's',
			[styles.m]: size == 'm',
		})}
			{...props}
		>
			{children}
		</div>
	);
};