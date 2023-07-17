import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Box, Typography, Stack } from '@mui/material'
import ReactPlayer from 'react-player'
import { CheckCircle } from '@mui/icons-material'
import {Videos} from './';

const VideoDetail = () => {
  const {id} = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=id,snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>{
      setVideos(data.items);
      console.log('Related Videos', data.items)
      console.log('id ', id)
    })
  },[id])

  if(!videoDetail?.snippet) return 'Loading ....';

  const {snippet:{title, channelId, channelTitle},
          statistics:{viewCount, likeCount}} = videoDetail
  console.log("videoDetail ", videoDetail)

  return (
    <Box 
      minHeight={'95vh'} 
      //display={'-ms-flexbox'}
    >
      <Stack 
        // width={'70vw'} 
        direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'  
              controls
            />
            <Typography color={'#fff'} variant='h5' fontWeight={'bold'} p={2}>
              {/* {snippet.title} */}
              {title}
            </Typography>
            <Stack direction={'row'} justifyContent={'space-between'} 
              sx={{color:'#fff'}} py={1} px={2}
            >
              <Link>
                <Typography variant={{ sm:'subtitle1', md:'h6'}} 
                  color={'#fff'}
                >
                  {channelTitle}
                  <CheckCircle sx={{fontSize:'14px', color:'grey'}}/>
                </Typography>
              </Link>
              <Stack direction={'row'} alignItems={'center'} gap={'20px'}>
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box 
          // display={'-ms-flexbox'} 
          // width={'20vw'} 
          px={2} 
          py={{md:1, xs:5}} 
          justifyContent={'center'} 
          alignItems={'center'}>
          <Videos videos={videos} direction={'column'}/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail