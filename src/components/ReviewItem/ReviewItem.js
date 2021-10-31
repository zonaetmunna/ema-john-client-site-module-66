import React from 'react';

const ReviewItem = (props) => {
     const { name, price, quantity, key } = props.product;
     const { handleRemove } = props;
     return (
          <div className="product">

               <div>
                    <h4 className="product-name">{name}</h4>
                    <p>{price}</p>
                    <p>{quantity}</p>
                    <button onClick={() => handleRemove(key)} className="btn-regular">Remove item</button>
               </div>


          </div>
     );
};

export default ReviewItem;