import React from 'react';
import StickyHeader from '@/shared/site/header/StickyHeader/StickyHeader.tsx';
import css from './PageWithStickyHeader.module.scss';


export type PageWithStickyHeaderProps = {
    children: React.ReactNode;
};

const PageWithStickyHeader: React.FC<PageWithStickyHeaderProps> = (props) => {
    const { children } = props;

    return (
        <div className={ css.container }>
            <StickyHeader/>
            <div tabIndex={ 0 } aria-label={ 'Page content' } className={ css.content }>
                { children }
            </div>
        </div>
    );
};

export default React.memo(PageWithStickyHeader);