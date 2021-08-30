import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "HEALTHINIC",
      desc:
        " A fullstack website built using ReactJs, NodeJs, flask API and MongoDB. Used Machine Learning in Python to process a dataset of disease symptoms and regression to detect the disease according to upto 6-inputs provided, also launched this API on Heroku.",
      img:
        "assets/doc.png",
      link1: "https://healthinic.netlify.app/",
      link2: "https://github.com/itsme-aparna/Healthinic",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "SOCIAL DISTANCING TRACKER",
      desc:
        "This project aimed at detecting Social Distancing Violation in Public Places using OpenCV, Detectron2 for detection and fast implementation to facilitate online surveillance during the Covid-19 pandemic",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        link1: "https://colab.research.google.com/drive/1xVzddeDUPoEkaiK8ttfnIhe6QlodLcC9?usp=sharing&authuser=0#scrollTo=9xu4DjsUrLlC",
        link2: "https://github.com/itsme-aparna/Social-Distancing-Tracker",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "AANVIK",
      desc:
        "Designed a front-end web application for the annual expo, using ReactJS, Particle.JS and various other frontend packages",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        link1: "https://aanvik.tecvit.in/",
      link2: "https://aanvik.tecvit.in/",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <div classname="buttns"> 
                  <a href={d.link1}>
                  <button>Project Link</button>
                  </a>
                  <a href={d.link2}>
                  <button>Github Link</button>
                  </a>
                  </div>
                </div>
              </div>
              <div className="right">
                <img
                  src="assets/proj.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
