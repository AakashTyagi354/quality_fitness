import React from 'react'
import {Typography,Stack,Button} from "@mui/material"

function Detail({exDetail}) {
    // destruchuring 
     const {bodyPart,gifUrl,name,target,equipment} = exDetail;
     const extraDetail = [
         {
             icon:'https://static.thenounproject.com/png/955981-200.png',
             name:bodyPart,
         },
         {
            icon:'https://static.thenounproject.com/png/955981-200.png',
            name:target,
        },
        {
            icon:'https://static.thenounproject.com/png/955981-200.png',
            name:equipment,
        },

     ]

    
  return (
    <Stack gap="60px" sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center'}}>
              <img src={gifUrl} alt={name} loading="lazy" className='detail-image'  />
              <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
                  <Typography variant='h3'>
                      {name}
                  </Typography>
                  <Typography variant='h5' >

                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor est iusto ex 
                      nesciunt dolore non excepturi magnam facere quaerat, totam assumenda?
                  </Typography>
                  {extraDetail.map((item) =>(
                      <Stack key={item.name} direction="row" gap="24px" alignItems="center" >
                          <Button sx={{background:'#fff2db', borderRadius:'50%',width:'100px',
                        height:'100px'
                        }}>
                              <img src={item.icon} alt="" style={{height:"50px",width:"50px"}} />
                          </Button>
                          <Typography variant='h5' textTransform='capitalize'>
                              {item.name}
                          </Typography>
                      </Stack>
                  ))}
              </Stack>
    </Stack>
  )
}

export default Detail