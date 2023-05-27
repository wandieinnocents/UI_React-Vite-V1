// import React from 'react';
// import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid';
// import styled from '@mui/system/styled';
import Typography from '@mui/material/Typography';




function Footer() {
  return (
    <div>
       {/* footer */}
       {/* Grid row  */}
       <Grid container spacing={2} style={{ backgroundColor:'#f45e20', color:'#FFFFFF' }}>
        {/* col-spacer */}
        

        {/* image */}
        <Grid xs={12} md={12} lg={12} xl={12} >
        
            <center><Typography variant="h7" gutterBottom>
            <b>@2023 React.js + vite,  Custom Design by : Wandie Innocents</b>
            </Typography></center>
        </Grid>

       
        
      </Grid>
    </div>
  );
}

export default Footer;
