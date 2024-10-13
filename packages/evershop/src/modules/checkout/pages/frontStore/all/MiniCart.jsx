//import PropTypes from 'prop-types';
import React from 'react';
import './MiniCart.scss';
// import Bag from '@heroicons/react/outline/ShoppingBagIcon';
//import { useAppState } from '@components/common/context/app';
//import { get } from '@evershop/evershop/src/lib/util/get';

export default function MiniCart() {
  // const miniCart = get(useAppState(), 'cart', cart || {});

  return (
    <span />
  );
}

/*
{false &&<div className="mini-cart-wrapper self-center">
      <a className="mini-cart-icon" href={cartUrl}>
        <Bag width={20} height={20} />
        {miniCart.totalQty > 0 && <span>{miniCart.totalQty}</span>}
      </a>
    </div>}
    */


export const layout = {
  areaId: 'icon-wrapper',
  sortOrder: 10
};

