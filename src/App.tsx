import React from 'react';
import PageWithStickyHeader
    from '@/layout/page/PageWithStickyHeader/PageWithStickyHeader.tsx';
import HomePage from '@/page/home/HomePage/HomePage.tsx';
import { useA11yDom } from '@/hooks/a11y-dom/useA11yDom.ts';


const App: React.FC = () => {
    useA11yDom();

    return (
        <PageWithStickyHeader>
            <HomePage/>
        </PageWithStickyHeader>
    );
};

export default React.memo(App);