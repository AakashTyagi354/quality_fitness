import React, { usestate, useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Typography, Stack } from "@mui/material"

import { exOptions, fetchData } from "../utils/fetchData"
import ExCard from './ExCard'
function Ex({ exercises, setExercises, bodyPart }) {
  console.log(exercises)
  const [currentpage,setCurrentPage] = useState(1);
  const exercisePage = 9;
  const indexOfLastEx = currentpage * exercisePage;
  const indexofFirstEx = indexOfLastEx - exercisePage;
  const currEx = exercises.slice(indexofFirstEx,indexOfLastEx);


  const paginate = (e,value) =>{
    setCurrentPage(value);
    window.scrollTo({top:1800,behavior:'smooth'})
  }

  useEffect(()=>{
          const fetchExData = async () =>{
            let exData = [];

            if(bodyPart === 'all'){
              exData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
              exOptions);
            }else{
              exData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
              exOptions);
            }
            setExercises(exData)
          }
          fetchExData();
  },[bodyPart])
  return (
    <Box id="exercises"
      sx={{ mt: { lg: '10px' } }}
      mt="50px"
      p="20px"
    >
      <Typography variant='h3' mb='46px'>

        Showing Results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap="wrap" justifyContent='center'
      > {currEx.map((exercise, index) => (
        <ExCard key={index} exercise={exercise} />
      ))}

      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
          color='standard'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length / 9)}
          page={currentpage}
          onChange={paginate}
          size="large"
          />
        )}

      </Stack>
    </Box>
  )
}

export default Ex