import * as React from "react";
import Footer from "../components/Footer";
import FeaturedCard, { WorkCard } from "../components/FeaturedCard";
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
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import desk from "../images/dev/Desk.png";
import instagram from "../images/dev/Instagram.png";
import neutral from "../images/dev/Neutral.png";
import projects from "../images/dev/Projects.png";
import workExperience from "../images/dev/Work Experience.png";
import twitter from "../images/dev/Birds.png";
import city from "../images/dev/city.jpeg";
import shopify from "../images/dev/shopify.png";
import neutral2 from "../images/dev/neutral2.png";

import { colors } from "../styles";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
            opacity: {
              md: 100,
              xs: 0,
            },
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
          <Grid>
            <Grid item xs={12} md={10}>
              <h2 style={{ color: colors.midBlue }}>Hi, I'm Estelle!</h2>
              <h1 style={{ color: colors.darkOrange }}>
                I embrace creativity and innovation to build impactful solutions
                that address the important problems.
              </h1>
            </Grid>
            <Grid item xs={12} md={6}>
              {" "}
              <p style={{ color: colors.midBlue }}>
                I’m a Fullstack Developer who is always up for a challenge! As a
                former Product Designer at Shopify, I’m a problem solver who is
                enthusiastic about human-centric design and usability. Currently
                I’m working at Citylitics, focused on improving city
                infrastructure and the daily lives for individuals throughout
                North America.
              </p>
            </Grid>
          </Grid>
        </Slide>

        <Grid
          container
          sx={{
            marginTop: 16,
          }}
        >
          <Grid item sx={{ marginBottom: 12 }}>
            <Grid
              container
              sx={{
                backgroundColor: colors.darkBlue,
                borderRadius: 4,
                height: 200,
                paddingLeft: 4,
                display: "flex",
                overflow: "hidden",
                img: {
                  width: 400,
                  bottom: 0,
                  right: 0,
                  maxWidth: "80%",
                },
                p: {
                  color: colors.midBlue,
                },
              }}
              xs={12}
            >
              <Grid item md={6} xs={12}>
                <img src={workExperience}></img>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                sx={{
                  paddingTop: 5,
                }}
              >
                <h2 style={{ color: colors.white }}>Work Experience</h2>
                <Box>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Citylitics" {...a11yProps(0)} />
                    <Tab label="Shopify" {...a11yProps(1)} />
                    <Tab label="Neutral" {...a11yProps(2)} />
                    <Tab label="Western University" {...a11yProps(3)} />
                  </Tabs>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ width: "100%" }}>
              <TabPanel value={value} index={0}>
                <WorkCard
                  header="How can we leverage the power of tech to improve city infrastructure?"
                  desc="I worked with a few friends to build a Twitter bot that monitored a stream of incoming tweets using Python and Twitter API and flagged potentially fake news by replying with relevant factual "
                  primaryBtn="In Progress"
                  primaryBtnLink=""
                  bgColor={colors.darkBlue}
                  textColor={colors.white}
                  featuredImage={city}
                  positionText="left"
                ></WorkCard>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <WorkCard
                  header="How can we make the important easy and everything else possible for Shopify merchants?"
                  desc="fsfs"
                  primaryBtn="In Progress"
                  primaryBtnLink=""
                  bgColor={colors.darkBlue}
                  textColor={colors.white}
                  featuredImage={shopify}
                  positionText="left"
                ></WorkCard>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <WorkCard
                  header="Green Tech Startup Incubated At Mozilla Builders"
                  desc="I worked with a few friends to build a Twitter bot that monitored a stream of incoming tweets using Python and Twitter API and flagged potentially fake news by replying with relevant factual "
                  primaryBtn="View Product"
                  primaryBtnLink=""
                  bgColor={colors.darkBlue}
                  textColor={colors.white}
                  featuredImage={neutral2}
                  positionText="left"
                ></WorkCard>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <WorkCard
                  header="Western University"
                  desc="I worked with a few friends to build a Twitter bot that monitored a stream of incoming tweets using Python and Twitter API and flagged potentially fake news by replying with relevant factual "
                  primaryBtn="View Product"
                  primaryBtnLink=""
                  bgColor={colors.darkBlue}
                  textColor={colors.white}
                  featuredImage={neutral2}
                  positionText="left"
                ></WorkCard>
              </TabPanel>
            </Box>
          </Grid>

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
            featuredImage={twitter}
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
