import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { exOptions, fetchData,ytOptions } from "../utils/fetchData"
import SimilarEx from '../components/SimilarEx'
import ExVideos from '../components/ExVideos'
import Detail from '../components/Detail'

function ExersciseDetail() {
  const [exDetail,setExDetail] = useState({})
  const [exVideo,setExVideo] = useState([]);
  const [target,settarget] = useState([]);
  const [eq,setEq] = useState([]);

  const {id} = useParams();
useEffect(()=>{
   const fetchExData = async ()=>{
         const exDbUrl = 'https://exercisedb.p.rapidapi.com'
         const YtSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
         const ExDetailData = await fetchData(`${exDbUrl}/exercises/exercise/${id}`, exOptions);
         setExDetail(ExDetailData);

         const exVideosData = await fetchData(`${YtSearchUrl}/search?query=${ExDetailData.name}`,ytOptions)
         setExVideo(exVideosData.contents)

         const targetMuscleExData = await fetchData(`${exDbUrl}/exercises/target/${ExDetailData.target}`,exOptions)
         const equipmentExData = await fetchData(`${exDbUrl}/exercises/eqipment/${ExDetailData.equipment}`,exOptions)
         setEq(equipmentExData)
         settarget(targetMuscleExData)
   }  
   fetchExData(); 

},[id])
  return (
    <Box>
      <Detail exDetail={exDetail} />
      <ExVideos exVideo={exVideo} name={exDetail.name}/>
      {/* <SimilarEx target={target} eq={eq} /> */}


    </Box>
  )
}

export default ExersciseDetail