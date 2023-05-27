import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
 makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';



const useStyles = makeStyles(()=>({
    background_color:{
      backgroundColor:"black",
      height:"100%",

    },
    link:{
        textDecoration:"none",
        color: "white",
        fontSize: "20px",
    },
    divider_color:{ 
      color:"white"
    },
    icon:{
        color: "white"
    },logo: {
      // flexGrow: "1",
      padding:20,
      cursor: "pointer",
    },
}));

function DrawerComponent() {
const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        
        onClose={() => setOpenDrawer(false)}
      >
      {/* replace with logo */}
      <Typography variant="h4" className={classes.logo}>

      LINX-AI

      </Typography>


        <List className={classes.background_color}>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <Divider color='white' sx={{ width: '100%'}} />

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about" className={classes.link}>About</Link>
            </ListItemText>
          </ListItem>
          <Divider color='white' sx={{ width: '100%'}} />

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact" className={classes.link}>Contact</Link>
            </ListItemText>
          </ListItem>
          <Divider color='white' sx={{ width: '100%'}} />

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about" className={classes.link}>Faq</Link>
            </ListItemText>
          </ListItem>
          
        </List>


        {/* new list */}
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className={classes.icon}/>
      </IconButton>
    </>
  );
}
export default DrawerComponent;