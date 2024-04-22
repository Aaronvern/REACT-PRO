import { useEffect , useState } from "react"

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    let url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;
    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        console.log(data)
    ,[currency]})
    return data
}
export default useCurrencyInfo;