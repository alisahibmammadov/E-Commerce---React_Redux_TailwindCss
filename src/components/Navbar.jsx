import React, { useEffect, useState } from "react";
import { BsLightbulb, BsBasketFill, BsMoonStarsFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [color,setColor] = useState(false)
  const dispatch = useDispatch()
  const { cardItems } = useSelector((state) => state.card);
  useEffect(()=>{
    const root = document.getElementById('root')
    if(color){
      root.style.backgroundColor = 'black'
      root.style.color = 'gray'
    }else{
      root.style.backgroundColor = 'white'
      root.style.color = 'black'
    }
  },[color])
  return (
    <div className="flex items-center justify-between px-3 h-28  ">
      <div className="text-2xl font-bold tracking-wider">Logo</div>
      <div className="flex items-center space-x-4 ">
        <input
          type="text"
          placeholder="search"
          className="border p-3 outline-none rounded-lg"
        />
        <div onClick={()=>{setColor(!color)}}>
          {color ? <BsMoonStarsFill size={25} className="cursor-pointer" /> : <BsLightbulb size={25} className="cursor-pointer" />
          }
          </div>
        <div onClick={()=> dispatch({type:'DRAWER', payload:true})} className="relative">
          <BsBasketFill size={25} className="cursor-pointer" />
          <span className="absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm">
            {cardItems.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
