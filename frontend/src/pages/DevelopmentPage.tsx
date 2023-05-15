import Footer from "../components/Footer";
import FeaturedCard from "../components/FeaturedCard";
import { Container, Grid, LinearProgress, ListItem, List } from "@mui/material";
import { styled } from "@mui/material/styles";
import desk from "../images/dev/Desk.png";
import instagram from "../images/dev/Instagram.png";

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
}: {
  header: string;
  desc: string;
  titleImg: string;
  positionText: string;
  bgColor: string;
  textColor: string;
}) => {
  if (positionText == "left") {
    return (
      <Grid
        container
        sx={{
          backgroundColor: bgColor,
          borderRadius: 8,
          height: 200,
          paddingLeft: 12,
          display: "flex",
          alignItems: "center",
          img: {
            width: 400,
            bottom: 0,
            right: 0,
          },
        }}
        xs={12}
      >
        <Grid item md={6}>
          <h2 style={{ color: textColor }}>{header}</h2>
          <p style={{ color: colors.darkBlue }}>{desc}</p>
        </Grid>
        <Grid item md={6}>
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
          borderRadius: 8,
          height: 200,
          paddingLeft: 12,
          display: "flex",
          alignItems: "center",
          img: {
            width: 400,
            bottom: 0,
            right: 0,
          },
        }}
        xs={12}
      >
        <Grid item md={6}>
          <img src={titleImg}></img>
        </Grid>
        <Grid item md={6}>
          <h2 style={{ color: textColor }}>{header}</h2>
          <p style={{ color: colors.darkBlue }}>{desc}</p>
        </Grid>
      </Grid>
    );
  }
};

const SkillsBar = ({ skill, value }: { skill: string; value: number }) => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <p>{skill}</p>
      </Grid>
      <Grid item xs={8}>
        <LinearProgress variant="determinate" value={value}></LinearProgress>
      </Grid>
    </Grid>
  );
};

const Technology = styled(Grid)(({ theme }) => ({
  backgroundColor: "#ED6A40",
  borderRadius: 4,
  paddingLeft: 4,
  paddingRight: 4,
  textAlign: "center",
  color: "white",
}));

const DevelopmentPage = () => {
  return (
    <Container>
      <Grid
        container
        sx={{
          marginTop: 12,
        }}
      >
        <Grid item xs={12} md={8}>
          <h2 style={{ color: colors.darkOrange }}>Hi, I'm Estelle!</h2>
          <h1 style={{ color: colors.darkOrange }}>
            I like to build creative solutions to complex problems.
          </h1>
          <p style={{ color: colors.darkBlue }}>
            I’m a Fullstack Developer who is always up for a challenge! As a
            former Product Designer at Shopify, I’m a problem solver who is
            enthusiastic about human-centric design and usability. Currently I’m
            working at Citylitics, focused on improving city infrastructure and
            the daily lives for individuals throughout North America.
          </p>
        </Grid>
        <Grid
          container
          rowSpacing={2}
          xs={12}
          color={colors.darkBlue}
          sx={{
            marginTop: 16,
          }}
        >
          <TitleCard
            header="A little overview"
            desc="Here's an at-a-glance summary of my skills as a developer."
            titleImg={desk}
            positionText="left"
            bgColor={colors.lightOrange}
            textColor={colors.purple}
          ></TitleCard>
          <Grid
            container
            item
            xs={12}
            md={3}
            sx={{
              marginRight: 2,
              marginTop: 2,
              backgroundColor: colors.lightOrange,
              borderRadius: 4,
            }}
          >
            <h2>Languages</h2>
            <SkillsBar skill="Javascript/Typescript" value={80}></SkillsBar>
            <SkillsBar skill="Java" value={90}></SkillsBar>
            <SkillsBar skill="Python" value={80}></SkillsBar>
            <SkillsBar skill="C/C++" value={70}></SkillsBar>
            <SkillsBar skill="C#" value={60}></SkillsBar>
          </Grid>
          <Grid
            container
            sx={{
              marginRight: 2,
              marginTop: 2,
              backgroundColor: colors.lightOrange,
              borderRadius: 4,
            }}
            xs={12}
            md={8}
          >
            <Grid item xs={12}>
              <h2>Skills & technologies</h2>
            </Grid>
            <Technology>React</Technology>
            <Technology>Django</Technology>
            <Technology>GCP</Technology>
            <Technology>Git</Technology>
            <Technology>CI/CD</Technology>
            <Technology>API Design</Technology>
            <Technology>Unity 3D & Blender</Technology>
            <Technology>Docker</Technology>
            <Technology>K8</Technology>
          </Grid>
          <Grid
            container
            sx={{
              marginRight: 2,
              marginTop: 2,
              backgroundColor: colors.lightOrange,
              borderRadius: 4,
            }}
            xs={12}
            md={8}
          >
            <Grid item xs={12}>
              <h2>Education</h2>
              <p>Major in Computer Science, University of Western Ontario</p>
              <h3>With relavent coursework in:</h3>
              <List>
                <ListItem>Data Structures & Algorithms</ListItem>
                <ListItem>Software Engineering</ListItem>
                <ListItem>Introduction to Artificial Intelligence</ListItem>
              </List>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              marginRight: 2,
              marginTop: 2,
              backgroundColor: colors.lightOrange,
              borderRadius: 4,
            }}
            xs={12}
            md={3}
          >
            <Grid item xs={12}>
              <h2>Currently working on</h2>
              <List>
                <ListItem>Experimenting with the ChatGPT API</ListItem>
                <ListItem>Improving code readability and cleanliness</ListItem>
                <ListItem>Mastering VIM</ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <TitleCard
            header="Work experience"
            desc="Where I've built up my skillset over the years"
            titleImg={desk}
            positionText="right"
            bgColor={colors.lightOrange}
            textColor={colors.darkOrange}
          ></TitleCard>
        </Grid>
        <Grid container>
          <TitleCard
            header="Projects"
            desc="Things I've built with my fingers (but not toes)."
            titleImg={desk}
            positionText="left"
            bgColor={colors.darkBlue}
            textColor={colors.lightOrange}
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
            header="Neutral MVP"
            desc="I worked with a few friends to build a Twitter bot that monitored a stream of incoming tweets using Python and Twitter API and flagged potentially fake news by replying with relevant factual "
            primaryBtn="View Product"
            primaryBtnLink=""
            bgColor={colors.darkBlue}
            textColor={colors.darkOrange}
            featuredImage=""
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
