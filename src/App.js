import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import {Feed, VideoDetail, ChannelDetail, SearchFeed, Navbar} from './components'
// import  from './components/VideoDetail'
// import  from './components/ChannelDetail'
// import from './components/SearchFeed'

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000', color:'white'}}>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>}></Route>
          <Route path='/video/:id' exact element={<VideoDetail/>}></Route>
          <Route path='/channel/:id' exact element={<ChannelDetail/>}></Route>
          <Route path='/search/:searchTerm' exact element={<SearchFeed/>}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App