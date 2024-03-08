import React from 'react';
import { productsList } from '../../../../data/product/products.data.ts';
import ProductCard from '@/entity/product/ProductCard/ProductCard.tsx';
import AddProductToCartButton
    from '@/feauture/product/AddProductToCartButton/AddProductToCartButton.tsx';
import css from './SearchingProductsBox.module.scss';


export type SearchingProductsBoxProps = {};

const SearchingProductsBox: React.FC<SearchingProductsBoxProps> = (props) => {
    const {} = props;

    return (
        <section tabIndex={ 0 } aria-label={ 'Searching products box' }
                 className={ css.container }>
            <h2>Product list</h2>
            <div className={ css.content }>
                {
                    productsList.map((product) => (
                        <ProductCard
                            key={ product.id }
                            product={ product }
                            extraFooter={ <AddProductToCartButton
                                productId={ product.id }/> }
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default React.memo(SearchingProductsBox);