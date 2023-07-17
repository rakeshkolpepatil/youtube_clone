import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'

const VideoCard = ( { video :{ id:{videoId}, snippet}} ) => {
  console.log(videoId, snippet)
  return (
    <Card sx={{width: {xs:'400px'},
      // xs:'100%', 
      boxShadow:'none', 
      borderRadius:0
    }}>
      <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: '400px', height:'180px' }}
        />
      </Link>
      <CardContent sx={{ backgroundColor:'#1e1e1e', height:'106px' }}>
      <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight={'bold'} color="#FFF">
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
        <Typography variant="subtitle2" fontWeight={'bold'} color="gray">
          {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
          <CheckCircle sx={{fontSize:12, color:'grey', marginLeft:'5px'}}/>
        </Typography>
      </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard