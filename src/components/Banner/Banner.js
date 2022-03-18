import { makeStyles} from '@material-ui/styles'
import Container from '@material-ui/core/Container'
import React from 'react'
const useStyle = makeStyles(()=>({
    banner:{
          backgroundImage:"url(./img2.jpg)",
        //   borderRadius:50
        //   backgroundRepeat: "repeat-y"
    },
    bannerContent:{
        height:450,
        display:"flex",
        flexDirection:"column",
        paddingTop:25,
        justifyContent: "space-around"
    }

}))

const Banner = () => {
    const classes = useStyle()
  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent} >

        </Container>
    </div>
  )
}

export default Banner