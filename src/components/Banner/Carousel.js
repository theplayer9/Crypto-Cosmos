import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import {CryptoState} from '../../CryptoContext'
import {TrendingCoins} from '../../config/Api'
import React, { useEffect ,useState} from 'react'




const useStyle = makeStyles(()=>({
    carousel:{
        height:"50%",
        display:"flex",
        alignItems: "center",
        // color:"red"
    },

}))

const Carousel = () => {
    const classes = useStyle()
    const [trending, setTrending] = useState([])
    const {currency} = CryptoState()
    const fetchTrendingCoins = async (cry)=>{
        const {data} = await axios.get(TrendingCoins(cry))
        setTrending(data)
        console.log("Trending coins data :",data)
    }
    useEffect(()=>{
        fetchTrendingCoins(currency)
    },[currency])
  
  return (
      
    <div className={classes.carousel}>Carousel</div>
  )
}

export default Carousel