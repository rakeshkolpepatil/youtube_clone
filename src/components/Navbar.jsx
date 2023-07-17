import React from 'react'
import {Box, Stack} from '@mui/material'
import { Link } from 'react-router-dom'
import youtubeLogo from '../images/youtubeLogo.png'
import SearchBar from './SearchBar'

const Navbar = () => (
  <Stack
    direction='row'
    alignItems='center'
    justifyContent='space-between'
    p={2}
    sx={{position:'sticky', background:'#000', top:0,  }}
  >
    <Link to='/' style={{ display:'flex', alignItems:'center'}}>
      <Box component='img' src={youtubeLogo} alt='logo' height={45} />
      {/* <img src={youtubeLogo} alt='logo' height={45}/> */}
    </Link>
    <SearchBar/>
  </Stack>
)

export default Navbar