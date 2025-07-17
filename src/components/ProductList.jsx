import React from 'react'
import Badge from './Badge'

const ProductList = ({products, addToCart}) => {
  return (
    <div className='grid grid-cols-4 gap-x-5 gap-y-9 mt-9'>
       {products.map((product) => (
        <div key={product.id} className="w-full relative group">
            <img src={product.image} alt={product.name} className='h-[300px] w-full'/>
            <Badge BadgeT={"New"}/>
            <div className="flex items-center justify-between pt-4">
                <h3 className='font-semibold text-[18px] text-[#262626]'>{product.name}</h3>
                <p className='font-medium text-gray-600'>${product.price.toFixed(2)}</p>
            </div>
            <div className="absolute bottom-6 left-0 p-5 text-center w-full bg-white hidden group-hover:block transition-all duration-300">
                <button className='text-black text-2xl cursor-pointer' onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
        </div>
       ))}
    </div>
  )
}

export default ProductList

