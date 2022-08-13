import React,{useState} from 'react'
import {Box} from "@mui/material"
import HeroBanner from '../components/HeroBanner'
import Ex from '../components/Ex'
import SearchEx from '../components/SearchEx'


function Home() {
  const [exercises,setExercises]  = useState([]);
  const [bodyPart,setBodyPart]  = useState('all');
  return (
    <Box>
      <HeroBanner/>
      <SearchEx setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
      <Ex setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </Box>
  )
}

export default Home