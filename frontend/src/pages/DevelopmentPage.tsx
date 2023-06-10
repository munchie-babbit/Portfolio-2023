import * as React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import FeaturedCard, { WorkCard } from "../components/FeaturedCard";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
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
  Fade,
  Button,
  Link,
  Divider,
} from "@mui/material";
import desk from "../images/dev/Untitled_Artwork 18.png";
import instagram from "../images/dev/Instagram.png";
import neutral from "../images/dev/Neutral.png";
import projects from "../images/dev/Projects.png";
import workExperience from "../images/dev/Work Experience.png";
import twitter from "../images/dev/Birds.png";
import city from "../images/dev/city.jpeg";
import shopify from "../images/dev/shopify.png";
import neutral2 from "../images/dev/neutral2.png";
import uwo from "../images/dev/uwo.png";
import splashgif from "../images/dev/Untitled_Artwork 3.gif";
import comic from "../images/dev/Untitled_Artwork 132.png";
import dots from "../images/dev/Untitled_Artwork 119.png";
import splashimg from "../images/dev/splash.gif";
import aboutme from "../images/dev/Untitled_Artwork 11.png";
import profilepic from "../images/dev/Untitled_Artwork 17.png";
import stars from "../images/dev/stars.gif";

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
          px: { md: 12, xs: 4 },
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
        <p style={{ color: colors.white, fontWeight: "bold" }}>{skill}</p>
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
        backgroundColor:
          name[0] > "m"
            ? colors.darkOrange
            : name[0] > "O"
            ? colors.purple
            : colors.blue,
        borderRadius: 1,
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 0.1,
        paddingBottom: 0.1,
        margin: 0.5,
        textAlign: "center",
        color: name[0] > "O" ? colors.darkBlue : colors.white,
      }}
    >
      <p style={{ fontWeight: "bold" }}>{name}</p>
    </Box>
  );
};

const DevelopmentPage = () => {
  const splashRef = React.useRef(null);
  const [value, setValue] = useState(0);
  const [comicIsShowing, setComicIsShowing] = useState(true);

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
          <Grid container alignItems="center">
            <Grid
              item
              xs={12}
              md={7}
              sx={{ h1: { fontSize: { md: "30px", xs: "28px" } } }}
            >
              <h2 style={{ color: colors.midOrange }}>HI, I'M ESTELLE!</h2>
              <h1 style={{ color: colors.darkOrange }}>
                I embrace creativity and innovation to build impactful solutions
                that address the important problems.
              </h1>
              <Box sx={{ width: { md: "70%", xs: "100%" } }}>
                <p
                  style={{
                    color: colors.midBlue,
                    width: "100%",
                  }}
                >
                  I’m a fullstack developer who is always up for a challenge! As
                  a former product designer at{" "}
                  <Link
                    href=""
                    target="_blank"
                    color={colors.midBlue}
                    sx={{ fontWeight: "bold" }}
                  >
                    Shopify
                  </Link>
                  , I’m a problem solver who is enthusiastic about human-centric
                  design and usability. Currently I’m working at{" "}
                  <Link
                    href=""
                    target="_blank"
                    color={colors.midBlue}
                    sx={{ fontWeight: "bold" }}
                  >
                    Citylitics
                  </Link>
                  , focused on improving city infrastructure and the daily lives
                  for individuals throughout North America.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <img
                style={{
                  width: "100%",
                  float: "right",
                }}
                src={splashimg}
              />
            </Grid>
          </Grid>
        </Slide>
        <Fade in={true} timeout={500}>
          <Grid
            container
            md={12}
            sx={{ marginTop: 20 }}
            justifyContent="center"
          >
            <Grid item>
              <Box
                sx={{
                  zIndex: 2,
                  width: { md: "300px", xs: "200px" },
                  position: "absolute",
                  marginTop: {
                    xs: 2,
                    md: 8,
                  },
                  marginLeft: 4,
                  img: {
                    width: "100%",
                  },
                }}
              >
                <img src={aboutme} style={{}} />
              </Box>
              <Box
                sx={{
                  height: comicIsShowing ? "100%" : "700px",
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <img
                  style={{
                    width: "100%",

                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                  src={splashgif}
                />
              </Box>
            </Grid>
            {comicIsShowing ? (
              <Grid
                item
                sx={{
                  margin: "auto",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <img
                  style={{
                    width: "70%",
                    zIndex: 2,
                    position: "relative",
                    marginTop: "-20vh",
                  }}
                  src={comic}
                />
              </Grid>
            ) : null}

            <Grid
              container
              justifyContent="center"
              sx={{ margin: "auto", width: "100%" }}
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                width="80vw"
                id="blobSvg"
                filter="blur(20px)"
                style={{
                  opacity: 0.7,
                  position: "absolute",
                  maxWidth: "1000px",
                  marginTop: "-30vh",
                }}
                transform="rotate(-99)"
              >
                {" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    {" "}
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(209, 41, 255)" }}
                    ></stop>{" "}
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(61, 157, 230)" }}
                    ></stop>{" "}
                  </linearGradient>{" "}
                </defs>{" "}
                <path id="blob" fill="url(#gradient)" style={{ opacity: 0.1 }}>
                  <animate
                    attributeName="d"
                    dur="5000ms"
                    repeatCount="indefinite"
                    values="M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z;M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z"
                  ></animate>
                </path>
                <path id="blob" fill="url(#gradient)" style={{ opacity: 0.1 }}>
                  <animate
                    attributeName="d"
                    dur="5000ms"
                    repeatCount="indefinite"
                    values="M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z;M449.05134,329.9003Q409.80059,409.80059,329.9003,451.15995Q250,492.5193,162.89881,458.36084Q75.79762,424.20238,65.04837,337.10119Q54.29911,250,85.74629,183.59673Q117.19347,117.19347,183.59673,88.1905Q250,59.18753,328.8549,75.73886Q407.7098,92.2902,448.00594,171.1451Q488.30208,250,449.05134,329.9003Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z"
                  ></animate>
                </path>
              </svg>
            </Grid>
            <Grid container justifyContent="center" sx={{ width: "100%" }}>
              <Box
                sx={{
                  marginTop: 20,
                  marginBottom: 30,
                  position: "relative",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  img: {
                    width: {
                      md: "400px",
                      xs: "200px",
                    },
                  },
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: 0,
                    zIndex: 2,
                  }}
                  src={dots}
                />
                <Box
                  sx={{
                    width: { md: "70%", xs: "100%" },
                    position: "absolute",
                    top: { md: -200, xs: -100 },
                    zIndex: 1,
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                    }}
                    src={stars}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Fade>

        <Grid
          container
          sx={{
            marginTop: 12,
            zIndex: 2,
          }}
        >
          <Grid item sx={{ marginBottom: 12 }}>
            <Grid
              container
              sx={{
                backgroundColor: colors.darkBlue,
                borderRadius: 4,
                px: { md: 8, xs: 2 },
                minHeight: "700px",
                img: {
                  width: "100%",
                  bottom: 0,
                  right: 0,
                },
                p: {
                  color: colors.midBlue,
                },
              }}
              xs={12}
            >
              <Grid
                item
                xs={12}
                sx={{
                  paddingTop: 4,
                  px: 2,
                }}
              >
                <h1 style={{ color: colors.white, marginBottom: 0 }}>
                  My Experience
                </h1>
                <Box sx={{ color: colors.midBlue, marginBottom: 0 }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    textColor="inherit"
                    indicatorColor="primary"
                    sx={{
                      color: "white",
                      maxWidth: "75vw",
                    }}
                  >
                    <Tab
                      label={
                        <p
                          style={{
                            textTransform: "none",
                          }}
                        >
                          Citylitics{" "}
                        </p>
                      }
                      {...a11yProps(0)}
                    />
                    <Tab
                      label={
                        <p
                          style={{
                            textTransform: "none",
                          }}
                        >
                          Shopify{" "}
                        </p>
                      }
                      {...a11yProps(1)}
                    />
                    <Tab
                      label={
                        <p
                          style={{
                            textTransform: "none",
                          }}
                        >
                          Neutral{" "}
                        </p>
                      }
                      {...a11yProps(2)}
                    />
                    <Tab
                      label={
                        <p
                          style={{
                            textTransform: "none",
                          }}
                        >
                          Western University
                        </p>
                      }
                      {...a11yProps(3)}
                    />
                  </Tabs>
                </Box>
              </Grid>
              <Grid item>
                <TabPanel value={value} index={0}>
                  <WorkCard
                    header="How can we leverage the power of tech to improve city infrastructure?"
                    desc="I’m currently at Citylitics, working on our data platform as a fullstack developer. I’ve contributed to initiatives to optimize data querying and building out a feature for users to provide feedback on the usefulness of their data insights. I’m also leading the initiative to simplify our client-side state management by migrating away from Redux."
                    primaryBtn=""
                    primaryBtnLink=""
                    bgColor={colors.darkBlue}
                    textColor={colors.white}
                    featuredImage={city}
                    logo={""}
                    skills={["React", "Django", "Typescript", "React Query"]}
                    date={"March 2023 - Present"}
                  />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <WorkCard
                    header="How can we make the important easy and everything else possible for Shopify merchants?"
                    desc="As a member of the inventory team, I focused on simplifying crucial tasks and helping merchants make the important easy and everything else possible. As a product designer, I created a mobile-first inventory history feature that successfully launched to over 2 million Shopify businesses, greatly enhancing usability. I collaborated closely with development teams, ensuring precise implementation of designs while upholding accessibility standards."
                    primaryBtn=""
                    primaryBtnLink=""
                    bgColor={colors.darkBlue}
                    textColor={colors.white}
                    featuredImage={shopify}
                    logo={""}
                    skills={[
                      "Product Design",
                      "Figma",
                      "UI/UX",
                      "User Research",
                    ]}
                    date={"May 2020 - Dec 2021"}
                  ></WorkCard>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <WorkCard
                    header="How can we help online shoppers calculate their carbon footprint?"
                    desc="I spearheaded the product design and contributed to frontend development for Neutral, a browser extension that empowers users to shop sustainably by measuring the carbon footprint of their online purchases. Our achievements include winning the Moonshot prize at Treehacks, securing a spot in the Mozilla Builders Incubator, and gaining recognition from Fast Company."
                    primaryBtn=""
                    primaryBtnLink=""
                    bgColor={colors.darkBlue}
                    textColor={colors.white}
                    featuredImage={neutral2}
                    logo={""}
                    skills={["HTML/CSS", "Javascript", "Figma"]}
                    date={"Feb 2020 - Aug 2020"}
                  ></WorkCard>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <WorkCard
                    header="How can we help engineers at Western University visualize sensor data?"
                    desc="I worked as a fullstack developer for the University of Western Ontario. I constructed a web platform capable of storing both historical and real-time data gathered from sensors developed by the faculty of engineering for various projects. Leveraging the power of the LAMP (Linux, Apache, MySQL, PHP) stack, alongside chart.js and HTML/CSS, I built a platform that seamlessly integrated efficient data storage and user-friendly visualizations of data."
                    primaryBtn=""
                    primaryBtnLink=""
                    bgColor={colors.darkBlue}
                    textColor={colors.white}
                    featuredImage={uwo}
                    logo={""}
                    skills={["PHP", "HTML/CSS", "Javascript"]}
                    date={"Oct 2019 - May 2020"}
                  ></WorkCard>
                </TabPanel>
              </Grid>
            </Grid>
          </Grid>
          <Grid container md={12} justifyContent={"center"}>
            <img src={profilepic} style={{ width: "50%" }}></img>
          </Grid>
          <Grid
            container
            xs={12}
            color={colors.darkBlue}
            sx={{
              marginTop: 12,
              marginBottom: 12,
            }}
          >
            <TitleCard
              header="A Little Overview"
              desc="Here's an at-a-glance summary of my skills as a developer."
              titleImg={desk}
              positionText="left"
              bgColor={colors.darkBlue}
              textColor={colors.white}
              descTextColor={colors.white}
            ></TitleCard>
            <div id="intro"></div>
            <Grid item xs={12} md={4} sx={{ marginBottom: { md: 0, xs: 4 } }}>
              <Box
                sx={{
                  padding: 4,
                  backgroundColor: colors.darkBlue,
                  borderRadius: 4,
                  marginTop: 4,
                  height: "100%",
                  marginRight: {
                    md: 4,
                    xs: 0,
                  },
                }}
              >
                <h2 style={{ color: colors.white }}>Languages*</h2>

                <Box>
                  <SkillsBar skill="Python" value={100}></SkillsBar>
                  <SkillsBar skill="Java" value={95}></SkillsBar>

                  <SkillsBar skill="HTML/CSS" value={85}></SkillsBar>
                  <SkillsBar
                    skill="Javascript/Typescript"
                    value={80}
                  ></SkillsBar>
                  <SkillsBar skill="C/C++" value={70}></SkillsBar>
                </Box>
                <p style={{ color: colors.white }}>
                  *Based on percent of total years of experience {"(7 years)"}
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  backgroundColor: colors.darkBlue,
                  borderRadius: 4,
                  padding: 4,
                  my: 4,
                  height: "100%",
                }}
              >
                <Grid item xs={12}>
                  <h2 style={{ color: colors.white }}>Skills & Technologies</h2>
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
                  <Technology name="CI/CD Practices" />
                  <Technology name="API Design" />
                  <Technology name="Unity 3D & Blender" />
                  <Technology name="Docker" />
                  <Technology name="Kubernetes" />
                  <Technology name="react-query" />
                  <Technology name="redux" />
                  <Technology name="Object Oriented Design" />
                  <Technology name="react-testing-library" />
                  <Technology name="jest" />
                  <Technology name="pytest" />
                  <Technology name="Behaviour Driven Development" />
                  <Technology name="Software Architechture & Design" />
                  <Technology name="Software Design Patterns" />
                  <Technology name="Solid Design Principles" />
                  <Technology name="MUI" />
                  <Technology name="AntD" />
                </Box>
              </Box>
            </Grid>
          </Grid>

          <TitleCard
            header="Projects"
            desc="Things I've built with my fingers (but not toes)."
            titleImg={projects}
            positionText="left"
            bgColor={colors.darkBlue}
            textColor={colors.white}
            descTextColor="white"
          ></TitleCard>
          <div id="projects"></div>
          <FeaturedCard
            header="Intelligent Instagram Bot"
            desc="I created a platform that empowers users to upload images onto a website and leverage ChatGPT to automatically generate captions. These generated posts can then be scheduled for publication on Instagram, liberating users from the arduous task of social media planning and management."
            primaryBtn="See Project"
            primaryBtnLink="https://github.com/munchie-babbit/Social-Media-Manager-AI"
            bgColor={colors.darkBlue}
            textColor={colors.purple}
            featuredImage={instagram}
            positionText="left"
          ></FeaturedCard>
          <FeaturedCard
            header="COVID-19 Fake News Detector"
            desc="In collaboration with a few friends, I developed a bot utilizing the Twitter API to monitor an influx of tweets. Our system detected and exposed potential instances of “fake news”, and countered them by replying with accurate data sourced from the Centers for Disease Control and Prevention — fighting the propagation of misinformation in real-time."
            primaryBtn="See Project"
            primaryBtnLink="https://github.com/munchie-babbit?tab=repositories"
            bgColor={colors.darkBlue}
            textColor={colors.midOrange}
            featuredImage={twitter}
            positionText="right"
          ></FeaturedCard>
          <FeaturedCard
            header="Green Tech Startup Incubated At Mozilla Builders"
            desc="I worked on the MVP for Neutral, a browser extension that allows users to shop sustainably by calculating the carbon footprint of their online purchases. Our product won the Moonshot prize at Treehacks, was a part of the Mozilla Builders Incubator and was featured on Fast Company. As a co-founder, I led the product design for Neutral, and also assisted in the frontend development."
            primaryBtn="View Product"
            primaryBtnLink="https://shopneutral.io/index.html"
            bgColor={colors.darkBlue}
            textColor={colors.darkOrange}
            featuredImage={neutral}
            positionText="left"
          ></FeaturedCard>
        </Grid>
        <Grid container sx={{ justifyContent: { md: "end", xs: "center" } }}>
          <Button
            variant="contained"
            endIcon={<ArrowCircleRightIcon />}
            target="_blank"
            href="https://github.com/munchie-babbit"
            sx={{
              color: colors.white,
              backgroundColor: colors.darkBlue,
              px: 4,
              py: 2,
              "&:hover": {
                color: colors.darkBlue,
                backgroundColor: colors.darkOrange,
              },
            }}
          >
            See All Projects
          </Button>
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
