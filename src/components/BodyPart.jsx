import React from 'react'
import { Stack, Typography } from "@mui/material"
import icon from "../img/istockphoto-1331186720-612x612-removebg-preview.png"

function BodyPart({ item, bodyPart ,setBodyPart }) {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                backgroundColor: "#fff",
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            }}
         onClick={()=>{
             setBodyPart(item)
             window.scrollTo({top:1800,left:100, behavior:'smooth'})
         }}

        >
            <img src={icon} alt="dumbbell" style={{ width: "60px", height: "40px" }} />
            <Typography fontSize="24px" color="#3A1212"
                textTransform="capitalize" fontWeight="bold"
            >{item}</Typography>
        </ Stack>
    )
}

export default BodyPart