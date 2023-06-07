import {
  AppBar,
  IconButton,
  Toolbar,
  Divider,
  Grid,
  Link,
} from "@mui/material";
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
            <p style={{ color: textColor }}>
              Drawn in{" "}
              <Link
                sx={{
                  color: textColor,
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                href="https://procreate.com/"
                target="_blank"
              >
                Procreate
              </Link>
              . Designed in{" "}
              <Link
                href="https://www.figma.com/"
                target="_blank"
                sx={{
                  color: textColor,
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Figma
              </Link>
              .<div></div> Built with{" "}
              <Link
                href="https://react.dev/"
                target="_blank"
                sx={{
                  color: textColor,
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                React
              </Link>{" "}
              and{" "}
              <Link
                href="https://mui.com/"
                target="_blank"
                sx={{
                  color: textColor,
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                MUI
              </Link>
              .
            </p>
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
