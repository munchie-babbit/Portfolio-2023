import ImageList from '@mui/material/ImageList';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import { styled, alpha } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import * as React from 'react';
import Footer from "../components/Footer";

import img1 from '../images/art/3D Render.png';
import img2 from '../images/art/Angelina.jpg';
import img3 from '../images/art/Building.png';
import img4 from '../images/art/Cheetah.jpg';
import img5 from '../images/art/Flora For Treasurer.jpg';
import img6 from '../images/art/Forest Walk.png';
import img7 from '../images/art/Fried Egg Jelly.jpg';
import img8 from '../images/art/Gazette Comics.png';
import img9 from '../images/art/Girl.jpg';
import img10 from '../images/art/Growing Up.png';
import img11 from '../images/art/In The Rain.jpg';
import img12 from '../images/art/Munchie.png';
import img13 from '../images/art/No Gravity.jpg';
import img14 from '../images/art/Samsung Wallpaper.png';
import img15 from '../images/art/Vesta Tea.png';
import img16 from '../images/art/Shehacks Komal.png';
import img17 from '../images/art/TD Bank.png';
import img18 from '../images/art/Waterfall.jpg';
import saru from '../images/art/Saru stories.png';
import video from '../images/art/video.gif';

import illustrationImg from '../images/art/Red String.jpg';
import packagingImg from '../images/art/Soap Design.png';
import animationImg from '../images/art/Walking.gif';
import graphicDesignImg from '../images/art/Shehacks Grid.png';
import logoDesignImg from '../images/art/RecoveryProject.png';

// import img from '../images/art/';


const itemData = [
    {
      img: img1,
      title: 'Image',
    },
    {
      img: img2,
      title: 'Image',
    },
    {
      img: img3,
      title: 'Image',
    },
    {
      img: img4,
      title: 'Image',
    },
    {
      img: img5,
      title: 'Image',
    },
    {
      img: img6,
      title: 'Image',
    },
    {
      img: img7,
      title: 'Image',
    },
    {
      img: img8,
      title: 'Image',
    },
    {
      img: img9,
      title: 'Image',
    },
    {
      img: img10,
      title: 'Image',
    },
    {
      img: img11,
      title: 'Image',
    },
    {
      img: img12,
      title: 'Image',
    },
    {
        img: img13,
        title: 'Image',
    },
    {
        img: img14,
        title: 'Image',
    },
    {
        img: img15,
        title: 'Image',
    },
    {
        img: img16,
        title: 'Image',
    },
    {
        img: img17,
        title: 'Image',
    },
    {
        img: img18,
        title: 'Image',
    },
  ];
const artStyles = [{
    img: illustrationImg,
    title: 'Illustration',
}, {
    img: packagingImg,
    title: 'Package Design',
},{
    img: animationImg,
    title: 'Animation',
},{
    img: graphicDesignImg,
    title: 'Graphic Design',
},{
    img: logoDesignImg,
    title: 'Logo Design',
},

  ];

  const items = [
    {
      primary: "Applied Arts Magazine",
      secondary: "Featured in the 2017 Issue of Applied Arts, a nation-wide art & design magazine",
      avatarSrc: "/static/images/avatar/1.jpg",
      color: "#F5A872",
    },
    {
      primary: "Tobi Lutke, CEO of Shopify",
      secondary: "Worked with Tobi to illustrate and animate his keynote slides for Summit 2021",
      avatarSrc: "/static/images/avatar/2.jpg",
      color: "#C49ABE",
    },
    {
        primary: "Samsung",
        secondary: "Won a competition to design a wallpaper for the Samsung Galaxy Note 10",
        avatarSrc: "/static/images/avatar/3.jpg",
        color: "#ED6A40",
    },
    {
      primary: "Toronto TTC Sketch the Line",
      secondary: "Featured in Sketch the Line 2018, with art showcased across Toronto busses and streetcars",
      avatarSrc: "/static/images/avatar/3.jpg",
      color: "#003C58",
    },
    {
        primary: "Smyang Piano",
        secondary: "Commissioned artwork for Smyang Piano, a musician with over 1 million youtube subscribers",
        avatarSrc: "/static/images/avatar/3.jpg",
        color: "#0081BA",
    },
  ];
  const styles = {
    textCentered: {
        textAlign: "center",
    },
    grey: {
        color: "grey",
    },
    round:{
        borderRadius: 8,
    },
    container: {
      paddingTop: 12,
      display: "flex",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      sx: {
        objectFit: "cover",
      },
    },
  };

  const artistBio = "Lorem isum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const Item = styled(Box)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const ArtPage = () => {
    return (
        <Container >
          <Grid item sx={{
              height: 600,
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
          }}>
              <img src={video} style={styles.image}/>
          </Grid>
          <Container maxWidth="md">

          <Grid container spacing={2} sx={{
              columnGap: 8,
              paddingTop: 12,
          }}>
              <Grid xs={12} md={6}>
                  <Item>
                      <Box
                          component="img"
                          sx={{
                          width: 1,
                          borderRadius: 8,
                          }}
                          alt="Estelle growing up"
                          src={img10}
                      />
                      <h3>I'm an artist with a passion for creativity.</h3>
                      <Divider></Divider>
                      <p>{artistBio}</p>
                      <List>
                          <ListSubheader disableSticky>
                              <p>Cool Projects I've Contributed To</p>
                          </ListSubheader>
                          <ListItem>
                              <ArrowRightIcon></ArrowRightIcon>
                              <p>I spray painted a mural in downtown toronto to rise up against Asian-American hate</p>
                          </ListItem>
                          <ListItem>
                              <ArrowRightIcon></ArrowRightIcon>
                              <p>I worked alongside Facing History and Ourselves to design materials to raise awareness about Decolonizing Schools</p>
                          </ListItem>
                          <ListItem>
                              <ArrowRightIcon></ArrowRightIcon>
                              <p>I led the design of a mural used in the protest to protect Old Growth trees in Briish Columbia</p>
                          </ListItem>
                      </List>
                      
                  </Item>
              </Grid>
              <Grid xs={12} md={5}>
                  <Item>
                  <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                      <ListSubheader disableSticky>
                          <h2>Artistic Collaborations & Features</h2>
                      </ListSubheader>
                      {items.map((item, index) => (
                          <React.Fragment key={index}>
                          <ListItem alignItems="flex-start">
                              <ListItemAvatar>
                              <Avatar sx={{ bgcolor: item.color }}alt={item.primary} src={item.avatarSrc} />
                              </ListItemAvatar>
                              <ListItemText
                              primary={item.primary}
                              secondary={
                                  <React.Fragment>
                                  <Typography
                                      sx={{ display: "inline" }}
                                      component="span"
                                      variant="body2"
                                      color="text.primary"
                                  >
                                      {item.secondary}
                                  </Typography>
                                  </React.Fragment>
                              }
                              />
                          </ListItem>
                          {index < items.length - 1 && <Divider variant="inset" component="li" />}
                          </React.Fragment>
                      ))}
                      </List>
                  </Item>
              </Grid>
          </Grid>
      <ImageList cols={5} gap={24}>
        {artStyles.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={styles.round}
            />
            <ImageListItemBar
              title={item.title}
              position="below"
              style={styles.grey}
            />
          </ImageListItem>
        ))}
      </ImageList>
          <Box sx={{
              color: 'black',
              textAlign: "center",
              paddingTop: 12,
          }}>
              <h2>Featured Work</h2>
          </Box>
          <ImageList variant="masonry" cols={4} gap={8} >
              {itemData.map((item) => (
                  <ImageListItem key={item.img} sx={{
          
                  }}>
                          <img
                              src={`${item.img}?w=248&fit=crop&auto=format`}
                              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                              alt={item.title}
                              loading="lazy"
                          />
                  </ImageListItem>
              ))}
          </ImageList>
          <Grid>
          <Box sx={{
              color: 'white',
              backgroundColor: 'rgba(0,129,186, 0.6)',
              borderRadius: 12,
              textAlign: "center",
              marginTop: 12,
              paddingTop: 4,
              paddingBottom: 4,
          }}>
              <h3>Let's Collaborate!</h3>
              <h4> Get in touch for your next project</h4>
              <p>Lorem ipsum</p>
              <Button>Contact</Button>
          </Box>
          </Grid>
          <Footer textColour="black"></Footer>
          </Container>
        </Container>
        );
}
 
export default ArtPage;