// import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
// import styled from '@mui/system/styled';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

// images
import banner from "../assets/seo3.png"
import banner1 from "../assets/seo.png"
// import banner2 from "../assets/seo3.png"
// import banner3 from "../assets/seo3.png"



// const Item = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   border: '1px solid',
//   borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
//   padding: theme.spacing(1),
//   borderRadius: '4px',
//   textAlign: 'center',
// }));

export default function Home() {
  return (
    // landing view 1
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{ backgroundColor:'black', color:'white' }}>
      {/* content */}
        <Grid xs={12} md={6} lg={6} xl={6} 
        
        style={{ paddingLeft:50,paddingRight:10, paddingTop:100,paddingBottom:120, fontSize:10 }}>
        <Typography variant="h2" gutterBottom>
         <b>Where <span style={{ color: '#f45e20' }}>Organic</span> Intelligence Meets AI</b>
        </Typography>
        <Typography variant="h5" gutterBottom>
        Linx Solutions understands the multiple components of a successful business. From developing a strong visual identity to 
        creating a brand awareness and a digital presence.
        </Typography>

        {/* buttons */}
        <Stack direction="row" spacing={2} mt={3}>
          <Button variant="contained" style={{ backgroundColor: '#f45e20' }} endIcon={<SendIcon />}>
            Learn More
          </Button>
          <Button variant="contained" style={{ backgroundColor: '#f45e20' }}  endIcon={<SendIcon />}>
            Contact Us
          </Button>
        </Stack>
       
        </Grid>

        {/* image */}
        <Grid xs={12} md={6} lg={6} xl={6} style={{  paddingLeft:50 ,paddingTop:30 }}>
        <img width="70%" src={banner} alt="Reaact Image" />
        
          
        </Grid>
        
      </Grid>

      {/* web development */}
      <Grid container spacing={2} style={{ backgroundColor:'white', color:'black' }}>
      {/* content */}
        <Grid xs={12} md={6} lg={6} xl={6} 
        
        style={{ paddingLeft:50,paddingRight:10, paddingTop:120,paddingBottom:120, fontSize:10 }}>
        <Typography variant="h3" gutterBottom>
         <b>Search Engine Optimization </b>
        </Typography>
        <Typography variant="h5" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        </Typography>

        {/* buttons */}
        <Stack direction="row" spacing={2} mt={3}>
          <Button variant="contained" style={{ backgroundColor: '#f45e20' }} endIcon={<SendIcon />}>
            Read More
          </Button>
          
        </Stack>
       
        </Grid>

        {/* image */}
        <Grid xs={12} md={6} lg={6} xl={6} style={{  paddingLeft:50 ,paddingTop:30 }}>
        <img width="70%" src={banner1} alt="Reaact Image" />
        
          
        </Grid>
        
      </Grid>
    </Box>

    
  );
}