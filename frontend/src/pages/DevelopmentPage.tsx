import * as React from "react";
import Footer from "../components/Footer";
import FeaturedCard from "../components/FeaturedCard";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
  Container,
  Grid,
  LinearProgress,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Box,
  Slide,
} from "@mui/material";
import desk from "../images/dev/Desk.png";
import instagram from "../images/dev/Instagram.png";
import neutral from "../images/dev/Neutral.png";
import projects from "../images/dev/Projects.png";
import workExperience from "../images/dev/Work Experience.png";

const colors = {
  lightOrange: "#FEE6D6",
  darkBlue: "#1F263C",
  midOrange: "#F5A872",
  darkOrange: "#ED6A40",
  purple: "#C49ABE",
};

const TitleCard = ({
  header,
  desc,
  titleImg,
  positionText,
  bgColor,
  textColor,
  descTextColor,
}: {
  header: string;
  desc: string;
  titleImg: string;
  positionText: string;
  bgColor: string;
  textColor: string;
  descTextColor: string;
}) => {
  if (positionText == "left") {
    return (
      <Grid
        container
        sx={{
          backgroundColor: bgColor,
          borderRadius: 4,
          height: 200,
          paddingLeft: 12,
          display: "flex",
          overflow: "hidden",
          justifyContent: "flex-end",
          width: "100%",
          img: {
            width: 400,
            maxWidth: "80%",
          },
          p: {
            color: descTextColor,
          },
        }}
        xs={12}
      >
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            paddingTop: 5,
          }}
        >
          <h2 style={{ color: textColor }}>{header}</h2>
          <p>{desc}</p>
        </Grid>
        <Grid item md={6} xs={12}>
          <img src={titleImg}></img>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid
        container
        sx={{
          backgroundColor: bgColor,
          borderRadius: 4,
          height: 200,
          paddingLeft: 4,
          display: "flex",
          // alignItems: "center",
          overflow: "hidden",
          img: {
            width: 400,
            bottom: 0,
            right: 0,
            maxWidth: "80%",
          },
          p: {
            color: descTextColor,
          },
        }}
        xs={12}
      >
        <Grid item md={6} xs={12}>
          <img src={titleImg}></img>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            paddingTop: 5,
          }}
        >
          <h2 style={{ color: textColor }}>{header}</h2>
          <p>{desc}</p>
        </Grid>
      </Grid>
    );
  }
};

const SkillsBar = ({ skill, value }: { skill: string; value: number }) => {
  return (
    <Grid container sx={{ display: "inline-block" }}>
      <Grid item xs={12}>
        <p>{skill}</p>
      </Grid>
      <Grid item xs={12}>
        <LinearProgress
          color="secondary"
          // secondary={colors.midOrange}
          variant="determinate"
          value={value}
          sx={{
            height: 10,
            borderRadius: 2,
          }}
        ></LinearProgress>
      </Grid>
    </Grid>
  );
};

const Technology = ({ name }: { name: string }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#ED6A40",
        borderRadius: 1,
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 0.1,
        paddingBottom: 0.1,
        margin: 0.5,
        textAlign: "center",
        color: "white",
      }}
    >
      <p>{name}</p>
    </Box>
  );
};

const DevelopmentPage = () => {
  const splashRef = React.useRef(null);

  return (
    <Container>
      <Grid
        container
        ref={splashRef}
        sx={{
          marginTop: 8,
        }}
      >
        <Slide
          direction="up"
          in={true}
          timeout={500}
          container={splashRef.current}
        >
          <Grid item xs={12} md={8}>
            <h2 style={{ color: colors.darkOrange }}>Hi, I'm Estelle!</h2>
            <h1 style={{ color: colors.darkOrange }}>
              I like to build creative solutions to complex problems.
            </h1>
            <p style={{ color: colors.darkBlue }}>
              I’m a Fullstack Developer who is always up for a challenge! As a
              former Product Designer at Shopify, I’m a problem solver who is
              enthusiastic about human-centric design and usability. Currently
              I’m working at Citylitics, focused on improving city
              infrastructure and the daily lives for individuals throughout
              North America.
            </p>
          </Grid>
        </Slide>
        <Grid
          container
          spacing={4}
          xs={12}
          color={colors.darkBlue}
          sx={{
            marginTop: 12,
          }}
        >
          <TitleCard
            header="A little overview"
            desc="Here's an at-a-glance summary of my skills as a developer."
            titleImg={desk}
            positionText="left"
            bgColor={colors.lightOrange}
            textColor={colors.purple}
            descTextColor={colors.darkBlue}
          ></TitleCard>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                padding: 4,
                backgroundColor: colors.lightOrange,
                borderRadius: 4,
                width: "100%",
                height: "100%",
              }}
            >
              <h2>Languages</h2>
              <Box>
                <SkillsBar skill="Javascript/Typescript" value={80}></SkillsBar>
                <SkillsBar skill="Java" value={90}></SkillsBar>
                <SkillsBar skill="Python" value={80}></SkillsBar>
                <SkillsBar skill="C/C++" value={70}></SkillsBar>
                <SkillsBar skill="C#" value={60}></SkillsBar>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                backgroundColor: colors.lightOrange,
                borderRadius: 4,
                padding: 4,
                width: "100%",
                height: "100%",
              }}
            >
              <Grid item xs={12}>
                <h2>Skills & technologies</h2>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Technology name="React" />
                <Technology name="Django" />
                <Technology name="Google Cloud Platform" />
                <Technology name="Git Version Control" />
                <Technology name="CI/CD" />
                <Technology name="API Design" />
                <Technology name="Unity 3D & Blender" />
                <Technology name="Docker" />
                <Technology name="Kubernetes" />
                <Technology name="react-query" />
                <Technology name="redux" />
                <Technology name="Object Oriented Design" />
                <Technology name="react-testing-library" />
                <Technology name="Frontend testing" />
                <Technology name="Behaviour Driven Development" />
                <Technology name="Software Architechture & Design" />
                <Technology name="Software Design Patterns" />
                <Technology name="Solid Design Principles" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                backgroundColor: colors.lightOrange,
                borderRadius: 4,
                padding: 4,
                width: "100%",
                height: "100%",
              }}
            >
              <Grid item xs={12}>
                <h2>Education</h2>
                <p>Major in Computer Science, University of Western Ontario</p>
                <h3>With relavent coursework in:</h3>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <KeyboardDoubleArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Data Structures & Algorithms" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <KeyboardDoubleArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Software Engineering" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <KeyboardDoubleArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Introduction to Artificial Intelligence" />
                  </ListItem>
                </List>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: colors.lightOrange,
                borderRadius: 4,
                padding: 4,
              }}
            >
              <Grid item xs={12}>
                <h2>Currently working on</h2>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <KeyboardDoubleArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Experimenting with the ChatGPT API" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <KeyboardDoubleArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Improving code readability and cleanliness" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <KeyboardDoubleArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mastering VIM" />
                  </ListItem>
                </List>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            marginTop: 16,
          }}
        >
          <TitleCard
            header="Work experience"
            desc="Where I've built up my skillset over the years"
            titleImg={workExperience}
            positionText="right"
            bgColor={colors.lightOrange}
            textColor={colors.darkOrange}
            descTextColor={colors.darkBlue}
          ></TitleCard>
        </Grid>
        <Grid
          container
          sx={{
            marginTop: 16,
          }}
        >
          <TitleCard
            header="Projects"
            desc="Things I've built with my fingers (but not toes)."
            titleImg={projects}
            positionText="left"
            bgColor={colors.darkBlue}
            textColor={colors.lightOrange}
            descTextColor="white"
          ></TitleCard>
          <FeaturedCard
            header="Intelligent Instagram Bot"
            desc="I worked with a few friends to build a Twitter bot that monitored a stream of incoming tweets using Python and Twitter API and flagged potentially fake news by replying with relevant factual "
            primaryBtn="In Progress"
            primaryBtnLink=""
            bgColor={colors.darkBlue}
            textColor={colors.purple}
            featuredImage={instagram}
            positionText="left"
          ></FeaturedCard>
          <FeaturedCard
            header="COVID-19 Fake News Detector"
            desc="I worked with a few friends to build a Twitter bot that monitored a stream of incoming tweets using Python and Twitter API and flagged potentially fake news by replying with relevant factual "
            primaryBtn="See project"
            primaryBtnLink=""
            bgColor={colors.darkBlue}
            textColor={colors.midOrange}
            featuredImage=""
            positionText="right"
          ></FeaturedCard>
          <FeaturedCard
            header="Green Tech Startup Incubated At Mozilla Builders"
            desc="I worked with a few friends to build a Twitter bot that monitored a stream of incoming tweets using Python and Twitter API and flagged potentially fake news by replying with relevant factual "
            primaryBtn="View Product"
            primaryBtnLink=""
            bgColor={colors.darkBlue}
            textColor={colors.darkOrange}
            featuredImage={neutral}
            positionText="left"
          ></FeaturedCard>
        </Grid>
      </Grid>
      <Footer
        textColor={colors.darkOrange}
        iconColor={colors.darkOrange}
      ></Footer>
    </Container>
  );
};

export default DevelopmentPage;
