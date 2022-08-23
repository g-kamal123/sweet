import { createContext, useEffect, useState } from "react";
import api from './Data'

export const Storage = createContext()
export const Contxt = (props)=>{
    const [laddoo,setLaddoo] = useState([])
    const [barfi,setBarfi] = useState([])
    const [show,setShow] = useState(false)
    const showsearch =()=>{
        setShow(true)
    }
    const Laddoo =async()=>{
        const response = await api.get('/laddoo')
        return response.data
    }
    const Barfi =async()=>{
        const response = await api.get('/barfi')
        return response.data
    }
    useEffect(()=>{
        const getLaddoo = async()=>{
            const res=await Laddoo();
            setLaddoo(res)
        }
        getLaddoo()
        const getBarfi = async()=>{
            const res = await Barfi();
            setBarfi(res)
        }
        getBarfi()
    },[])
    return(
        <Storage.Provider value={{show:show,showsearch:showsearch,alldata:[...laddoo,...barfi]}}>
            {props.children}
        </Storage.Provider>
    )
}