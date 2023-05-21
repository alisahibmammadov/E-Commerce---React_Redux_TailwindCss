import React from 'react'

const ProductCard = ({prd}) => {
  return (
    <div className='hover:border-indigo-600 w-[200px] h-[350px] border rounded-lg m-2 flex-col items-center p-1'>
        <img onClick={()=>window.location = `detail/${prd.id}`} className='h-32 object-cover' src={prd.image} alt="" />
        <div className='font-bold h-16 text-center mt-2'>{(prd?.title).substring(0,35)}</div>
        <div className='text-center opacity-70 text-sm'>{(prd?.description).substring(0,45)}....</div>
        <div className='font-bold text-lg text-center'>{prd?.price} TL</div>
        <button className='bg-indigo-600 w-full p-2 rounded-lg text-white'>SEPETE Ekle</button>
    </div>
  )
}

export default ProductCard