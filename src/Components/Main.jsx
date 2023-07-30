import React from 'react';
import PromoScreen from './Promo_Screen';
import Products from './Products';

const Main = () => {
  return (
    <div>
         <div className="main">
        {/* For the contant to be center */}
        <PromoScreen />
          <Products />
      </div>
    </div>
  )
}

export default Main
