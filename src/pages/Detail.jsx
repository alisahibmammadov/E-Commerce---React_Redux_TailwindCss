import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productsActionDetail } from '../redux/actions/products'
import {CgMathMinus,CgMathPlus} from 'react-icons/cg'
import { productsCard } from '../redux/actions/card'

const Detail = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const {product} = useSelector(state=>state.product)
  const [count,setCount]= useState(0)
  useEffect(()=>{
    dispatch(productsActionDetail(id))
  },[dispatch])

  const increment = (stock)=>{
    if(count <=stock){
      setCount(count + 1)
    }
  }
  const decrement = ()=>{
    if(count >0){
      setCount(count - 1)
    }
  }

  const addCard = ()=>{
    dispatch(productsCard(id, count))
    dispatch({type:'DRAWER', payload:true})
  }


  return (
    <div className='w-full flex justify-center items-center space-x-5 '>
      <img src={product?.image} alt="" className='w-1/3' />
      <div className='w-2/3 space-y-5'>
        <div className='font-bold text-xl'>{product?.title}</div>
        <div className='opacity-70'>{product?.description}</div>
        <div className='opacity-70'>Category: {product?.category}</div>
        <div className='opacity-70'>Rate: {product?.rating?.rate} - Stock: {product?.rating?.count}</div>
        <div className='font-bold text-lg'>Price: {product?.price}</div>

        <div className='flex items-center space-x-4'>
          <CgMathMinus onClick={decrement} size={30} className='cursor-pointer border rounded-full p-1'/>
          <span className='text-2xl'>{count}</span>
          <CgMathPlus onClick={()=>increment(product?.rating?.count)} size={30} className='cursor-pointer border rounded-full p-1'/>
        </div>
        <button onClick={addCard} className='bg-indigo-600 p-3 text-center rounded-lg text-white text-lg w-full'>Sepete Ekle</button>

      </div>
    </div>
  )
}

export default Detail