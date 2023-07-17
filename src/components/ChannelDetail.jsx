import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import {Videos, ChannelCard} from './'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  console.log(channelDetail)
  console.log('id = ', id)
  useEffect(()=>{
    // fetchFromAPI(`/channels?part=snippet,statistics&id=${id}`)
    fetchFromAPI(`channels?part=snippet,statistics&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet,id&order=date`)
    .then((data)=>setVideos(data?.items));
  },[id])

  return (
    <Box minHeight={'95vh'}>
      <Box>
        <div style={{ 
          background: 'linear-gradient(323deg, rgba(2,0,36,1) 0%, rgba(212,195,122,0.21190483029149154) 3%, rgba(0,212,255,1) 100%)',
          height:'300px',
          zIndex:10
        }}>
        </div>
      </Box>
      <Box>
        <ChannelCard channelDetail={channelDetail} marginTop='-90px'/>
      </Box>

      <Box 
        display={'flex'} 
        justifyContent={'center'} 
        // alignContent={'center'} 
        alignItems={'center'} 
        p={2} 
        // marginX={'auto'}
        // marginLeft={'auto'}
      >
        {/* <Box sx={{ mr:{sm:'100px'} }}/> */}
        <Videos videos={videos}/>
      </Box>

    </Box>
  )
}

export default ChannelDetail