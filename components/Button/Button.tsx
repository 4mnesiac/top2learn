import * as React from 'react';
import { FunctionComponent } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';
 
export const Button: FunctionComponent<ButtonProps> = ({apperance = 'primary', arrow = 'none', children, className, ...props}): JSX.Element => {
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: apperance == 'primary',
            [styles.ghost]: apperance == 'ghost'
        })}
        {...props}
        >
            {children}
            {arrow !== 'none' && 
                <span className={cn(styles.arrow, {
                    [styles.down]: arrow == 'down'
                })}>
                <ArrowIcon />
            </span>}
        </button>
    );
};