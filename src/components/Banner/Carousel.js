import { makeStyles } from '@material-ui/core'
import React from 'react'


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
    const fetchTrendingCoins =()=>{
        
    }
  
  return (
      
    <div className={classes.carousel}>Carousel</div>
  )
}

export default Carousel