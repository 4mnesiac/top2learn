import * as React from 'react';
import { FunctionComponent } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames'; // FIXIT!
 
export const Button: FunctionComponent<ButtonProps> = ({apperance = 'primary', children, className, ...props}): JSX.Element => {
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: apperance == 'primary',
            [styles.ghost]: apperance == 'ghost'
        })}
        {...props}
        >
            {children}
        </button>
    )
}