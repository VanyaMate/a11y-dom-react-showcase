import React from 'react';
import { Product } from '@/types/product.types.ts';
import css from './ProductCard.module.scss';


export type ProductCardProps = {
    product: Product;
    extraFooter?: React.ReactNode;
    onCardClick?: (id: string) => void;
};

const ProductCard: React.FC<ProductCardProps> = (props) => {
    const { product, extraFooter } = props;

    return (
        <article tabIndex={ 0 } aria-label={ product.title } className={ css.container }>
            <img src={ product.imageUrl } alt={ `image with product` }
                 className={ css.img }/>
            <div
                tabIndex={ 0 }
                aria-label={ product.description }
                className={ css.info }
            >
                <h2>{ product.title }</h2>
                <p>{ product.description }</p>
            </div>
            <div
                className={ css.price }
                tabIndex={ 0 }
                aria-label={ `price of product is ${ product.price } rubles` }
            >
                <p>{ product.price } Руб.</p>
            </div>
            { extraFooter }
        </article>
    );
};

export default React.memo(ProductCard);