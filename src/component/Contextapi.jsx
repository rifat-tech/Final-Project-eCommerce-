import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
let ApiData=createContext()

const Contextapi = ({children}) => {
   let [info , setInfo] = useState([]);
       
    let getData = ()=> {
        axios.get("https://dummyjson.com/products/category/smartphones").then((response)=>{
            setInfo(response.data.products)
    })
}
useEffect(()=>{
    getData()
,[]})
  return (
    <ApiData.Provider value={info}>{children}</ApiData.Provider>
  )
}

export {Contextapi , ApiData}