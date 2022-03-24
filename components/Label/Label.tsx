import cn from 'classnames';
import { FunctionComponent } from 'react';
import { LabelProps } from './Label.props';
import styles from './Label.module.css';

export const Label: FunctionComponent<LabelProps> = ({ colorScheme = 'ghost', className, children, ...props }) => {
	return (
		<span className={cn(styles.label, className, {
			[styles.primary]: colorScheme == 'primary',
			[styles.ghost]: colorScheme == 'ghost',
			[styles.discount]: colorScheme == 'discount',
			[styles.info]: colorScheme == 'chip'
		})}
			{...props}
		>
			{children}
		</span>
	);
};