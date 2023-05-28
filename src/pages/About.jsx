// import React from 'react';
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
import banner2 from "../assets/seo1.png"
// import banner3 from "../assets/seo3.png"
import mission from "../assets/mission.png"


// cards
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

// imported components: pages
import Footer from "../components/Footer"

function About() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    
      
      {/* Grid row services  */}
      <Grid container  style={{ backgroundColor:'black', color:'white' ,  }}>

          {/* col-spacer */}
          <Grid xs={12} md={3} lg={3} xl={3} ></Grid>

          {/* col-1 */}
          <Grid xs={12} md={6} lg={6} xl={6} style={{ paddingHorizontal:20, paddingTop:100, paddingBottom:100 }} >
          <center>
          <Typography variant="h2" >
                      <b>About Us</b>
            </Typography> 
          <Typography variant="h6" >
                      We offer professional SEO services that help websites increase their organic 
                      search score drastically, in order to compete for the highest rankings
            </Typography> 

            {/* buttons */}
            {/* buttons */}
            <Stack direction="row" spacing={2} mt={3} style={{ display: 'flex',  justifyContent:'center', alignItems:'center' }}>
              <Button variant="contained" style={{ backgroundColor: '#f45e20' }} endIcon={<SendIcon />}>
                Learn More
              </Button>
              <Button variant="contained" style={{ backgroundColor: '#f45e20' }}  endIcon={<SendIcon />}>
                Contact Us
              </Button>
            </Stack>
          </center>
          </Grid>

          


          {/* col-3 */}
          <Grid xs={12} md={3} lg={3} xl={3} > </Grid>

          {/* col-spacer */}
          <Grid xs={12} md={3} lg={3} xl={3} ></Grid>
        
      </Grid>

      {/* Grid row  */}
      <Grid container spacing={2} style={{ backgroundColor:'white', color:'black' }}>
      {/* content */}
        <Grid xs={12} md={6} lg={6} xl={6} 
        
        style={{ paddingLeft:50,paddingRight:10, paddingTop:100,paddingBottom:100, fontSize:10 }}>
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
        <Grid xs={12} md={6} lg={6} xl={6} style={{  paddingLeft:50 ,paddingTop:10 }}>
        <img width="70%" src={banner1} alt="React Image" />
        
          
        </Grid>
        
      </Grid>


      {/* footer component */}
      <Footer />

      
    </Box>
  );
}

export default About;
