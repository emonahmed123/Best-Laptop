import { useEffect, useState } from "react"

const LaptopReviewHook =()=>{

    const[carts,setCart]=useState([])

    useEffect(()=>{

      fetch('data.json')
      .then(res=>res.json())
      .then(data=>setCart(data))


    },[])
    return[carts,setCart]
}
export {LaptopReviewHook};