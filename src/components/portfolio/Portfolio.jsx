import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import FacebookIcon from '@material-ui/icons/Facebook';  
import GitHubIcon from '@material-ui/icons/GitHub';
import Toolbar from '@material-ui/core/Toolbar';  
import TwitterIcon from '@material-ui/icons/Twitter';  
import LinkedInIcon from '@material-ui/icons/LinkedIn';  
import MailIcon from '@material-ui/icons/Mail';  
import InstagramIcon from '@material-ui/icons/Instagram';

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Introduction",
    },
    {
      id: "web",
      title: "Technical Skills",
    },
    
    {
      id: "design",
      title: "Open Source Contribution",
    },
    {
      id: "content",
      title: "Blogging",
    },
    
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        
        
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="about">
      <h1>About Me</h1>
      <div className="links">
      <div class="icon">
        
      {/* <FacebookIcon style={{ 'color': "crimson" }}/><br></br>  
      <TwitterIcon style={{ 'color': "crimson" }}/> <br></br>  
      <LinkedInIcon style={{ 'color': "crimson" }}/><br></br>  
      <GitHubIcon style={{ 'color': "crimson" }}/><br></br>  
      <InstagramIcon style={{ 'color': "crimson" }}/><br></br>   */}
                                 
      </div>
      </div>
      <div className="aboutme"> 
      
      <div className="description">
        <p>I'm a curious learner, having a knack for technology. Problem solving is a part of my everyday life. I am proficient in C++ and have basic syntax knowledge of Java and Python.

          I am an aspiring web developer currently building projects using MERN tech stacks. I have also used Flask for API development. To gain some experience on Machine Learning I have built quite a few projects using Python and ML packages. 
Currently exploring opportunities for entry level roles in the tech industry.</p>
      </div>
      </div>
      
      </div>
  );
}
