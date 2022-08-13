import React from 'react'
import { Box, Stack, Typography } from "@mui/material"

function ExVideos({ exVideo, name }) {
    if(!exVideo.length) return 'loding...';
    return (
        <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
            <Typography variant='h3' mb="33px">
                Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span>  exersice video
            </Typography>
            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
                sx={{
                    flexDirection: { lg: 'row' },
                    gap: { lg: '110px', xs: '0' }
                }}
            >
                {exVideo?.slice(0, 3).map((item,index)=>(
                      <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                      target="_blank"
                      
                      className='exercise-video'
                      key={index}
                      > 
                      <img src={item.video.thumbnails[0].url} alt="" />
                      <Box>
                          <Typography variant='h5' color="gray">
                              {item.video.title}
                          </Typography>
                          <Typography variant='h6' color="gray" mt="6px">
                              {item.video.channelName}
                          </Typography>
                      </Box>
                      </a>
                ))}

            </Stack>
        </Box>
    )
}

export default ExVideos