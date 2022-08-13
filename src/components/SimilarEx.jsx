import React from 'react'
import { Box, Stack, Typography } from "@mui/material"
import HorizontalScrollbar from "./HorizontalScrollbar"
import Loader from './Loader'

function SimilarEx({ eq, target }) {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
            <Typography variant='h3'>
                Exersices that target same muscle group
            </Typography>
            <Stack direction='row' sx={{p:'2',position:'relative'}}>
                {target.length ? <HorizontalScrollbar data={target}/> :<Loader/> }
            </Stack>
        </Box>
    )
}

export default SimilarEx