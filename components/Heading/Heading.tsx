import React, { FC } from 'react';
import { HeadingProps } from './Heading.props';
import style from './Heading.module.css';

export const Heading: FC<HeadingProps> = ({ tag, children }): JSX.Element => {
	const Tag = tag || 'h1';
	return <Tag style={style}>{children}</Tag>;
};