import React, { useContext } from 'react';
import {Box,Typography} from "@mui/material"
import {ScrollMenu,VisibilityContext} from "react-horizontal-scrolling-menu"
import Bodypart from "./BodyPart"
import RightArrowIcon from '../img/free-arrow-left-icon-3099-thumb.png';
import LeftArrowIcon from '../img/png-transparent-arrow-computer-icons-right-arrow-angle-text-rectangle.png';
import ExCard from "./ExCard"
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" style={{height:"30px",width:"30px"}} />
      </Typography>
    );
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} style={{height:"30px",width:"30px"}} alt="right-arrow" />
      </Typography>
    );
  };
const  HorizontalScrollbar = ({data, bodyPart,setBodyPart,isBodyParts})=> {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item)=>(
                <Box key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px"
                >
                 <Bodypart item={item} bodyPart = {bodyPart} setBodyPart={setBodyPart}/>
                 
                </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar