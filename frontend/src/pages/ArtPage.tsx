import * as React from "react";
import { useRef, useEffect } from "react";
import {
  styled,
  alpha,
  Slide,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Typography,
  Avatar,
} from "@mui/material";
import { colors } from "../styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Footer from "../components/Footer";
import FeaturedCard from "../components/FeaturedCard";

import img1 from "../images/art/3D Render.png";
import img2 from "../images/art/Angelina.jpg";
import img3 from "../images/art/Building.png";
import img4 from "../images/art/Cheetah.jpg";
import img5 from "../images/art/Flora For Treasurer.jpg";
import img6 from "../images/art/Forest Walk.png";
import img7 from "../images/art/Fried Egg Jelly.jpg";
import img8 from "../images/art/Gazette Comics.png";
import img9 from "../images/art/Girl.jpg";
import img10 from "../images/art/Growing Up.png";
import img11 from "../images/art/In The Rain.jpg";
import img12 from "../images/art/Munchie.png";
import img13 from "../images/art/No Gravity.jpg";
import img14 from "../images/art/Samsung Wallpaper.png";
import img15 from "../images/art/Vesta Tea.png";
import img16 from "../images/art/Shehacks Komal.png";
import img17 from "../images/art/TD Bank.png";
import img18 from "../images/art/Waterfall.jpg";
import saru from "../images/art/Saru stories.png";
import video from "../images/art/video.gif";

import illustrationImg from "../images/art/Red String.jpg";
import packagingImg from "../images/art/Soap Design.png";
import animationImg from "../images/art/Walking.gif";
import graphicDesignImg from "../images/art/Shehacks Grid.png";
import logoDesignImg from "../images/art/RecoveryProject.png";

// import img from '../images/art/';

const itemData = [
  {
    img: img1,
    title: "Image",
  },
  {
    img: img2,
    title: "Image",
  },
  {
    img: img3,
    title: "Image",
  },
  {
    img: img4,
    title: "Image",
  },
  {
    img: img5,
    title: "Image",
  },
  {
    img: img14,
    title: "Image",
  },
  {
    img: img7,
    title: "Image",
  },
  {
    img: img8,
    title: "Image",
  },
  {
    img: img9,
    title: "Image",
  },
  {
    img: img11,
    title: "Image",
  },
  {
    img: img12,
    title: "Image",
  },
  {
    img: img13,
    title: "Image",
  },
  {
    img: img6,
    title: "Image",
  },
  {
    img: img15,
    title: "Image",
  },
  {
    img: img16,
    title: "Image",
  },
  {
    img: img17,
    title: "Image",
  },
  {
    img: img18,
    title: "Image",
  },
];
const artStyles = [
  {
    img: illustrationImg,
    title: "Illustration",
  },
  {
    img: packagingImg,
    title: "Package Design",
  },
  {
    img: animationImg,
    title: "Animation",
  },
  {
    img: graphicDesignImg,
    title: "Graphic Design",
  },
  {
    img: logoDesignImg,
    title: "Logo Design",
  },
];

const items = [
  {
    primary: "Applied Arts Magazine",
    secondary:
      "Featured in the 2017 Issue of Applied Arts, a nation-wide art & design magazine",
    avatarSrc: "/static/images/avatar/1.jpg",
    color: "#F5A872",
  },
  {
    primary: "Tobi Lutke, CEO of Shopify",
    secondary:
      "Worked with Tobi to illustrate and animate his keynote slides for Summit 2021",
    avatarSrc: "/static/images/avatar/2.jpg",
    color: "#C49ABE",
  },
  {
    primary: "Samsung",
    secondary:
      "Won a competition to design a wallpaper for the Samsung Galaxy Note 10",
    avatarSrc: "/static/images/avatar/3.jpg",
    color: "#ED6A40",
  },
  {
    primary: "Toronto TTC Sketch the Line",
    secondary:
      "Featured in Sketch the Line 2018, with art showcased across Toronto busses and streetcars",
    avatarSrc: "/static/images/avatar/3.jpg",
    color: "#003C58",
  },
  {
    primary: "Smyang Piano",
    secondary:
      "Commissioned artwork for Smyang Piano, a musician with over 1 million youtube subscribers",
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
  round: {
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

const artistBio =
  "I'm passionate about the power of communication through art. It's not just about what you say, but what others hear. Art is a simple yet profound way to convey complex thoughts and ideas. \n\n" +
  "For over 10 years, I've immersed myself in the world of art as a painter, graphic designer, comic artist, and illustrator. I've collaborated with individuals from all over the globe on impactful projects. From working alongside Facing History and Ourselves to raise awareness about decolonizing schools, to leading the design of a mural for the protection of Old Growth trees in British Columbia, and even spray painting a mural in downtown Toronto to stand against Asian-American hate.\n\n" +
  "Through art, I've found a powerful voice that transcends boundaries and speaks to the heart of important issues. Let's create something meaningful together!";

const Item = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ArtPage = () => {
  return (
    <Container>
      <Grid
        container
        sx={{
          height: 600,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
      >
        <img src={video} style={styles.image} />
      </Grid>

      <Grid
        container
        sx={{
          paddingTop: 12,
        }}
      >
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            sx={{
              width: 1,
              borderRadius: 8,
              marginTop: 4,
            }}
            alt="Estelle growing up"
            src={img10}
          />
          <h2 id="overview" style={{ color: colors.darkOrange, marginTop: 40 }}>
            Hi I'm Estelle!
          </h2>
          <p style={{ whiteSpace: "pre-line" }}>{artistBio}</p>
        </Grid>
        <Grid item xs={12} md={7} sx={{ paddingLeft: { md: 12, xs: 0 } }}>
          <List>
            <ListSubheader disableSticky>
              <h1 style={{ color: colors.darkOrange }}>
                {" "}
                Artistic Collaborations & Features
              </h1>
            </ListSubheader>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar sx={{ my: "auto" }}>
                    <Avatar
                      sx={{ bgcolor: item.color }}
                      alt={item.primary}
                      src={item.avatarSrc}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ width: "10%", my: "auto", paddingRight: 4 }}
                  >
                    <p style={{ fontWeight: "bold" }}>{item.primary}</p>
                  </ListItemText>
                  <ListItemText sx={{ width: "50%" }}>
                    <p>{item.secondary}</p>
                  </ListItemText>
                </ListItem>
                {index < items.length - 1 && (
                  <Divider variant="inset" component="li" />
                )}
              </React.Fragment>
            ))}
          </List>
        </Grid>
      </Grid>
      <ImageList cols={5} gap={24} sx={{ marginTop: 12 }}>
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
              sx={{
                color: colors.darkOrange,
                fontFamily: "sanshiro",
                textAlign: "center",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box
        sx={{
          color: colors.darkBlue,
          textAlign: "center",
          paddingTop: 12,
        }}
      >
        <h1 id="featured-work">Featured Work</h1>
      </Box>
      <ImageList variant="masonry" cols={4} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={{}}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Grid item id="hire-me" sx={{ marginTop: 12 }}>
        <FeaturedCard
          header="Get in touch :-)"
          desc="Interested in working with me on a project? Send an email and we can start chatting! I've working with clients from all walks of life and in all phases in their journeys. No project is too big or too small."
          primaryBtn="Send me an email"
          primaryBtnLink="mailto:estellechung333@gmail.com"
          bgColor={colors.blue}
          textColor="white"
          featuredImage={saru}
          positionText="left"
        ></FeaturedCard>
        {/* <Box
          sx={{
            color: "white",
            backgroundColor: "rgba(0,129,186, 0.6)",
            borderRadius: 12,
            textAlign: "center",
            marginTop: 12,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          <h3>Let's Collaborate!</h3>
          <h4> Get in touch for your next project</h4>
          <p>Lorem ipsum</p>
          <Button>Contact</Button>
        </Box> */}
      </Grid>
      <Footer
        textColor={colors.darkOrange}
        iconColor={colors.darkOrange}
      ></Footer>
    </Container>
  );
};

export default ArtPage;
