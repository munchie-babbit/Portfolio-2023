import { Container } from "@mui/system";
import fireGif from '../images/art/Fire Animated.gif';
import comicStrip from '../images/art/Comic.png';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Footer from "../components/Footer";


const timelineInfo = [
    {
        flag: "Product Design @ Shopify",
        desc: "Currently shaping the future of commerce by making the important easy and everything else possible.",
    },{
        flag: "Co-Founder @ Neutral",
        desc: "Founded a green tech startup that to help online shoppers understand their carbon footprint.",
    },{
        flag: "VP of Design @ WITS",
        desc: "Cultivated and lead the design for Women in Tech Society from the ground up.",
    },{
        flag: "UI/UX Design @ TD",
        desc: "Created the idea for the Student Budget Calculator, now a live TD product.",
    },{
        flag: "CyberArts Student",
        desc: "Fostered a passion for all things art and design.",
    },
]

const portfolioInfo = [
    {
        header: "What the heck happened to my inventory?",
        desc: "No matter the size, all Shopify merchants have inventory to mangage. But what happens when employees find a discrepency between Shopify's inventory count and the physical on hand quantity of a product? I redesigned the Inventory History page for a mobile first experience for Shopify merchants.",
    },{
        header: "How can we help the world shop more sustainably?",
        desc: " Neutral is a web extension that makes sustainable shopping a reality for users around the world by helping people understand their carbon footprint of shopping online. I co-founded Neutral, a green tech startup were I lead the product direction informed by user research and environmental experts.",
    },{
        header: "How can we help students budget for university?",
        desc: "For a lot of students, thinking about post-secondary tuition is a bridge they'll cross when they get to it. But sometimes this can be too little too late. I conceptualized and designed TD's student budget calculator while interning at TD.",
    },
]

const mentorCardInfo = [
    {
        header: "How to get into UX",
        span: "Coming soon",
    },{
        header: "My design journey",
        span: "Coming soon",
    },{
        header: "Books and resources<",
        span: "Coming soon<",
    },
]

const DesignPage = () => {
    return ( <Container maxWidth="md">
        {/* Comic intro */}
        <div className="bg-img" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#0f1014' }}>
            <img style={{ verticalAlign: 'middle', margin: 'auto', maxWidth: '900px', width: '100%' }} src={fireGif} />
        </div>
        <div className="bg-img" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#0f1014' }}>
            <img className="me" style={{ margin: 'auto', maxWidth: '900px', width: '100%', marginTop: '-350px' }} src={comicStrip} />
        </div>
        <div className="bg-img" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#0f1014' }}>
            <img style={{ margin: 'auto', maxWidth: '900px', width: '100%' }} src="" />
        </div>

        {/* Timeline */}
        <List>
            {timelineInfo.map((timelineData) => (
                <ListItem>
                <div className="direction-l">
                    <div className="flag-wrapper">
                    <span className="flag">{timelineData.flag}</span>
                    </div>
                    <div className="desc">{timelineData.desc}</div>
                </div>
                </ListItem>
            ))}
        </List>
        <Footer textColour="white"></Footer>
    </Container>  );
    
}
 
export default DesignPage;