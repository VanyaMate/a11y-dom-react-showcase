import React from 'react';
import ShortInfoPageContent
    from '@/entity/site/page-content/ShortInfoPageContent/ShortInfoPageContent.tsx';
import SearchingProductsBox
    from '@/widget/product/SearchingProductsBox/SearchingProductsBox';


export type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = (props) => {
    const {} = props;

    return (
        <main>
            <ShortInfoPageContent
                title={ 'Lorem ipsum dolor.' }
                text={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut explicabo natus nesciunt perspiciatis recusandae reiciendis.' }
                label={ 'lorem' }
            />
            <SearchingProductsBox/>
        </main>
    );
};

export default React.memo(HomePage);