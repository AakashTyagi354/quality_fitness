import React from 'react'
import {Box,Stack,Typography,Button} from "@mui/material"
import homeImg from "../img/pexels-polina-tankilevitch-3735472.jpg"
function HeroBanner() {
  return (
    <Box sx={{
        mt:{lg:'212px',xs:'70px'},
        ml:{sm:'50px'}
    }} position="relative" p="20px">
        <Typography color="#FF2625"
        fontWeight="600" fontSize="26px"
        >
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{fontSize:{lg:'44px',xs:'40px'}}}
        mb="23px"
        mt="30px"

        >
            Sweat,smile <br /> and repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
           Checkb out the most effective exercies
        </Typography>
        <Button variant='contained' color="error" href="#exersices"
        sx={{background:'#ff2625', padding:"10px"}}
        >Explore Exersices</Button>
        <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
            opacity:0.1,
            display:{lg:'block',xs:'none'}
        }}
        fontSize="200px"
        >
            Exersices
        </Typography>
        <img src={homeImg} className='hero-banner-img' alt="banner"/>

    </Box>
  )
}

export default HeroBanner