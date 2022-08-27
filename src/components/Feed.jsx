import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';

const Feed = () => {
  return (
    <Stack 
      sx={{ flexDirection: { sx: "column", md: "row" }}}
    >
      <Box 
        sx={{ height: { sx: 'auto', md: '92vh' }, 
        borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2} }}
      >
        <Sidebar />

        <Typography 
          className="copyright" 
          variant="body2" 
          sx={{ mt:1.5, color:"#fff" }}
        >

          Copyright 2022 Nelsat TV
        </Typography>
      </Box>

      {/* Movies feed title starts */}
        <Box 
          p={2}
          sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}
        >
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            mb={2}
            sx={{ color: 'white' }}
          >
            New <span style={{ color: '#2172b6' }}>
              Videos
            </span>
          </Typography>
        </Box>
      {/* Movies feed title ends */}

      {/* Videos display start */}
      <Videos videos={[]} />
      {/* Videos display ends */}
    </Stack>
  )
}

export default Feed