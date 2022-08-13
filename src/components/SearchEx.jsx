import React,{useState,useEffect} from 'react'
import {Box,Stack,Typography,TextField,Button} from "@mui/material"
import {exOptions,fetchData} from "../utils/fetchData"
import HorizontalScrollbar from './HorizontalScrollbar'
function SearchEx({setExercises,bodyPart,setBodyPart}) {
  const [search,setSearch] = useState('')
 
  const [bodyParts,setBodyParts] = useState([])
  useEffect(()=>{
       const fetchExData = async () =>{
         const bodypartsdata = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
         exOptions);
         setBodyParts(['all',...bodypartsdata]);
         console.log(bodyParts)

       } 
       fetchExData(); 
  },[])

  const handleSearch = async () =>{
                if(search){
                    const exData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
                    exOptions);
                   const searchex = exData.filter(
                     (ex) => ex.name.toLowerCase().includes(search)
                     || ex.target.toLowerCase().includes(search)
                     ||ex.equipment.toLowerCase().includes(search)
                     ||ex.bodyPart.toLowerCase().includes(search)
                   );
                   setSearch('');
                   setExercises(searchex)
                }
  }
  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px"
    >
      <Typography fontWeight={700} sx={{
        fontSize:{lg:'44px',xs:'30px'}
      }}
      mb="50px" textAlign="center"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
        sx={{
          input:{fontWeight:'700', border:'none', borderRadius:'4px'},
          width: {lg:'800px', xs:'350px'},
          background: "#fff",
          borderRadius:"40px"
         
        }}
        height="76px"
        value={search}
        onChange={(e)=> setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exersices"
        type="text"
        />
         <Button className='search-btn'
         sx={{
           bgcolor:'#FF2625',
           color:'#fff',
           textTransform:'none',
           width:{lg:'175px',xs:'80px'},
           fontSize:{lg:'20px',xs:'14px'},
           height:'56px',
           position:'absolute',
           right:'0'


         }}
         onClick={handleSearch}
         >Search</Button>
      </Box>
      <Box sx={{position:'relative',width:'100%',p:'20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        
      </Box>
    </Stack>
  )
}

export default SearchEx