// import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

// images
// import logo from "../assets/logo.webp"


const useStyles = makeStyles((theme) => ({
  background_color:{
    backgroundColor:"#131912",
    // height:"100%",

  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "yellow",
      borderBottom: "2px solid white",
    },
  },

  padding_right:{
    marginRight: theme.spacing(20),

  },
 

}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" className={classes.background_color} style={{ padding:16 }}>
      <CssBaseline />
      <Toolbar  >
      {/* <img width="10%" src={logo} alt="Reaact Image" className={classes.logo}/> */}
        <Typography variant="h4" className={classes.logo}>

          LINX-<span style={{ color: '#f45e20' }}>AI</span>
          
        </Typography> 
        
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="/faq" className={classes.link}>
              FAQ
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;