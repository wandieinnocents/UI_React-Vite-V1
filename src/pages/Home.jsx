// import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import Typography from '@mui/material/Typography';


const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      {/* content */}
        <Grid xs={12} md={6} lg={6} xl={6} 
        style={{ paddingLeft:50,paddingRight:10, paddingTop:50, fontSize:10 }}>
        <Typography variant="h2" gutterBottom>
         <b>Where Organic Intelligence Meets AI</b>
        </Typography>
        <Typography variant="h5" gutterBottom>
        Linx Solutions understands the multiple components of a successful business. From developing a strong visual identity to 
        creating a brand awareness and a digital presence.
        </Typography>
       
        </Grid>

        {/* image */}
        <Grid xs={12} md={6} lg={6} xl={6}>
          <Item>xs=6 md=4</Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}