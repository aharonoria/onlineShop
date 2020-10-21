import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


import Container from '@material-ui/core/Container';
import imgabout from '../../assets/img/imgabout.jpg';
import backgroundim from '../../assets/img/fback.jpg';
const styles = {
  paperContainer: {
    
      backgroundImage: `url(${"../../assets/img/imgabout.jpg"})`
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  image: {
    backgroundImage: 'url(${../../assets/img/imgabout.jpg})',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    
    <Grid container component="main" className={classes.root}  >

      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.root} >
        
      
        <img src={imgabout} />

        
      
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <div className={classes.root}>
      <CssBaseline />

      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom style={{fontWeight: "bold"}}>
          About Us
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'O&M Designs is an international fast fashion platform. The company focuses on women wear and scarfs. The brand was founded in October 2008, and since then it has upheld the philosophy that "everyone can enjoy the beauty of fashion." '}
        </Typography>
      </Container>
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom style={{fontWeight: "bold"}}> 
        Our Mission
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'O&M Designs prides itself on offering on-trend styles catering to both young women and teens, that won’t break the bank. social shop adheres to the concept that "everyone can enjoy the beauty of fashion."  It aims to promptly offer stylish quality products at appealing prices to every user in the world. '}
        </Typography>
      </Container>

    </div>

        </div>
      </Grid>
    </Grid>
  );
}
