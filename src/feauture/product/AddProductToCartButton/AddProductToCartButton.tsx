import React from 'react';
import css from './AddProductToCartButton.module.scss';


export type AddProductToCartButtonProps = {
    productId: string;
};

const AddProductToCartButton: React.FC<AddProductToCartButtonProps> = (props) => {
    const { productId } = props;

    // connect cart service

    return (
        <button
            tabIndex={ 0 }
            aria-label={ 'Add product to cart' }
            className={ css.container }
            onClick={ () => console.log('add to cart', productId) }
        >
            Add to cart
        </button>
    );
};

export default React.memo(AddProductToCartButton);