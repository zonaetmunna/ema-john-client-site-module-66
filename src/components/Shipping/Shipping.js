import React from 'react';
import { useForm } from 'react-hook-form';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css'

const Shipping = () => {
     const { register, handleSubmit, reset } = useForm();
     const onSubmit = data => {
          const savedCart = getStoredCart();
          data.order = savedCart;
          fetch('http://localhost:5000/orders', {
               method: "POST",
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(data)
          })
               .then(res => res.json())
               .then(result => {
                    if (result.insertedId) {
                         alert('your order successfully');
                         clearTheCart();
                         reset();
                    }
               })
     };

     return (
          <div>
               <h1>this is shipping</h1>
               <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name")} placeholder="your name" />
                    <input {...register("email", { required: true })} placeholder="your email" />
                    <input {...register("address", { required: true })} placeholder="address" />
                    <input {...register("city", { required: true })} placeholder="city" />
                    <input type="number" {...register("number", { required: true })} placeholder="phone number" />


                    <input type="submit" />
               </form>
          </div>
     );
};

export default Shipping;