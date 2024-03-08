import React from 'react';
import css from './ShortInfoPageContent.module.scss';


export type ShortInfoPageContentProps = {
    title: string;
    text: string;
    label: string;
};

const ShortInfoPageContent: React.FC<ShortInfoPageContentProps> = (props) => {
    const { title, text, label } = props;

    return (
        <section tabIndex={ 0 } aria-label={ `Short info about ${ label }` }
                 className={ css.container }>
            <h1 className={ css.title }>{ title }</h1>
            <p className={ css.text }>{ text }</p>
        </section>
    );
};

export default React.memo(ShortInfoPageContent);