import React from 'react';
import css from './StickyHeader.module.scss';


export type StickyHeaderProps = {};

const StickyHeader: React.FC<StickyHeaderProps> = (props) => {
    const {} = props;

    return (
        <header className={ css.container } role={ 'navigation' } tabIndex={ 0 }
                aria-label={ 'Navigation panel' }>
            <h1>Site name</h1>
            <ul className={ css.nav }>
                <li>
                    <a href="/" aria-label={ 'Go to home page' } tabIndex={ 0 }>
                        Home
                    </a>
                </li>
                <li>
                    <a href="/about" aria-label={ 'Go to about us page' } tabIndex={ 0 }>
                        About us
                    </a>
                </li>
                <li>
                    <a href="/login" aria-label={ 'Go to login page' } tabIndex={ 0 }>
                        Login
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default React.memo(StickyHeader);