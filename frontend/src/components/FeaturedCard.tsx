import { Card, Grid, Container, Button, Chip } from "@mui/material";
import { colors } from "../styles";

export const WorkCard = ({
  header,
  desc,
  primaryBtn,
  primaryBtnLink,
  secondaryBtn,
  secondaryBtnLink,
  bgColor,
  textColor,
  featuredImage,
  logo,
  skills,
  date,
}: {
  header: string;
  desc: string;
  primaryBtn: string;
  primaryBtnLink: string;
  secondaryBtn?: string;
  secondaryBtnLink?: string;
  bgColor: string;
  textColor: string;
  featuredImage: string;
  logo: string;
  skills: string[];
  date: string;
}) => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: 4,
        display: "flex",
        padding: 12,
        paddingTop: 0,
        alignItems: "center",
        img: {
          maxWidth: "100%",
          borderRadius: 4,
          paddingTop: {
            xs: 4,
            md: 0,
          },
        },
      }}
    >
      <Grid
        item
        md={7}
        sx={{
          paddingRight: 4,
        }}
      >
        <p style={{ color: colors.midBlue }}>{date}</p>
        <h4>{header}</h4>
        {skills.map((skill) => (
          <Chip
            sx={{ backgroundColor: colors.purple, marginRight: 1, padding: 1 }}
            label={skill}
            key={skill}
          />
        ))}

        <p style={{ color: colors.midBlue }}>{desc}</p>
      </Grid>
      <Grid item md={5}>
        <img src={featuredImage}></img>
      </Grid>
    </Grid>
  );
};
const FeaturedCard = ({
  header,
  desc,
  primaryBtn,
  primaryBtnLink,
  secondaryBtn,
  secondaryBtnLink,
  bgColor,
  textColor,
  featuredImage,
  positionText,
}: {
  header: string;
  desc: string;
  primaryBtn: string;
  primaryBtnLink: string;
  secondaryBtn?: string;
  secondaryBtnLink?: string;
  bgColor: string;
  textColor: string;
  featuredImage: string;
  positionText: string;
}) => {
  if (positionText == "left") {
    return (
      <Grid
        container
        sx={{
          backgroundColor: bgColor,
          color: textColor,
          height: "auto",
          minHeight: 500,
          borderRadius: 4,
          display: "flex",
          marginTop: 4,
          marginBottom: 4,
          padding: 12,
          alignItems: "center",
          img: {
            maxWidth: "100%",
            borderRadius: 4,
            paddingTop: {
              xs: 4,
              md: 0,
            },
          },
        }}
      >
        <Grid
          item
          md={7}
          sx={{
            paddingRight: 4,
          }}
        >
          <h2>{header}</h2>
          <p>{desc}</p>
          <Button
            variant="contained"
            disableElevation
            sx={{
              marginTop: 2,
              backgroundColor: textColor,
              color: bgColor,
              paddingTop: 2,
              paddingBottom: 2,
              paddingLeft: 4,
              paddingRight: 4,
              fontFamily: "IBM Plex Mono",
            }}
            href={primaryBtnLink}
          >
            {primaryBtn}
          </Button>
          {secondaryBtn && (
            <Button variant="contained" href={secondaryBtnLink}>
              {secondaryBtn}
            </Button>
          )}
        </Grid>
        <Grid item md={5}>
          <img src={featuredImage}></img>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid
        container
        sx={{
          backgroundColor: bgColor,
          color: textColor,
          minHeight: 500,
          height: "auto",
          borderRadius: 4,
          padding: 12,
          display: "flex",
          alignItems: "center",
          img: {
            maxWidth: "100%",
            paddingTop: {
              xs: 4,
              md: 0,
            },
          },
          Button: {
            backgroundColor: textColor,
            color: bgColor,
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 4,
            paddingRight: 4,
            fontFamily: "IBM Plex Mono",
          },
        }}
      >
        <Grid item md={5}>
          <img src={featuredImage}></img>
        </Grid>
        <Grid
          item
          md={7}
          sx={{
            paddingLeft: 6,
          }}
        >
          <h2>{header}</h2>
          <p>{desc}</p>
          <Button
            sx={{
              backgroundColor: textColor,
              color: bgColor,
              paddingTop: 2,
              paddingBottom: 2,
              paddingLeft: 4,
              paddingRight: 4,
              fontFamily: "IBM Plex Mono",
            }}
            disableElevation
            variant="contained"
            href={primaryBtnLink}
          >
            {primaryBtn}
          </Button>
          {secondaryBtn && (
            <Button
              variant="contained"
              sx={{ marginTop: 2 }}
              href={secondaryBtnLink}
            >
              {secondaryBtn}
            </Button>
          )}
        </Grid>
      </Grid>
    );
  }
};

export default FeaturedCard;
