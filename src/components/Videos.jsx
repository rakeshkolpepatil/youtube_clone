import { Box, Stack } from '@mui/material'
import React from 'react'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

const Videos = ({videos, direction}) => {

  console.log(videos)
  if(!videos?.length) return 'Loading ....';

  return (
    <Stack
      direction={direction || 'row'}
      justifyContent={'center'}
      flexWrap={'wrap'}
      gap={4}
    >
      {
        videos && videos.map((item, index)=>(
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail={item}/>}
          </Box>
        ))
      }
    </Stack>
  )
}

export default Videos