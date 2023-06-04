import { AppBar, IconButton, Toolbar, Divider, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import EventIcon from "@mui/icons-material/Event";

const styles = {
  appBar: {
    position: "static",
    width: "100%",
  },
  toolbar: {
    justifyContent: "space-between",
    textAlign: "center",
    minHeight: "56px",
    paddingTop: 6,
    paddingBottom: 2,
    boxShadow: "none",
  },
};

const Footer = ({
  textColor,
  iconColor,
}: {
  textColor: string;
  iconColor: string;
}) => {
  return (
    <AppBar color="transparent" position="static" sx={styles.toolbar}>
      <Toolbar sx={styles.toolbar}>
        <Divider></Divider>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h3 style={{ color: textColor }}>
              @2023 Estelle Chung. All Rights Reserved.
            </h3>
          </Grid>
          <Grid item xs={12}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/estelle-chung/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: iconColor }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/munchie-babbit"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: iconColor }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:estellechung333@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: iconColor }}
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://calendly.com/estelledes/30min"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: iconColor }}
            >
              <EventIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
