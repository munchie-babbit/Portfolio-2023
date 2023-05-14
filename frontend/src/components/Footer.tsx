import { AppBar, IconButton, Toolbar, Divider, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';

const styles = {
    appBar: {
        position: "static",
        width: "100%",   
    },
    toolbar: {
        justifyContent: "space-between",
        textAlign: "center",
        minHeight: "56px",
        paddingTop:6,
        paddingBottom: 2,
        boxShadow: "none",
    },
    icon: {
      color: 'rgba(0,129,186, 0.6)',
    }
  };

const Footer = ({ textColour }: { textColour: string })=> {
    return (
      <AppBar color="transparent" position="static" sx={styles.toolbar}>
        <Toolbar sx={styles.toolbar}>
            <Divider></Divider>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h4 style={{ color: textColour }}>@2023 Estelle Chung. All Rights Reserved.</h4>
                </Grid>
                <Grid item xs={12}>
                    <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/estelle-chung/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={styles.icon}
                    >
                    <LinkedInIcon />
                    </IconButton>
                    <IconButton
                    component="a"
                    href="https://github.com/munchie-babbit"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={styles.icon}
                    >
                    <GitHubIcon />
                    </IconButton>
                    <IconButton
                    component="a"
                    href="mailto:estellechung333@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={styles.icon}
                    >
                    <EmailIcon/>
                    </IconButton>
                    <IconButton
                    component="a"
                    href="https://calendly.com/estelledes/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={styles.icon}
                    >
                    <EventIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Footer;