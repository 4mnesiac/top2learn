import * as React from 'react';
import { FunctionComponent } from 'react';
import { HeadingProps } from './Heading.props';
import style from './Heading.module.css';
 
export const Heading: FunctionComponent<HeadingProps> = ({tag, children}): JSX.Element => {
    switch (tag) {
        case 'h1':
            return <h1 className={style.h1}>{children}</h1>;
        case 'h2':
            return <h2 className={style.h2}>{children}</h2>;
        case 'h3':
            return <h3 className={style.h3}>{children}</h3>;
        default:
            return <></>;
    }
};