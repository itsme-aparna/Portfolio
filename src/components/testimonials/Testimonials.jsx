import "./testimonials.scss";


export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "En-phy-thon",
      title: "Third Position",
      img:
        "assets/ach7.png",
      icon: "assets/twitter.png",
      desc:
        "Built a robotic bionic arm using Node MCU including coding and assembly of various components in this college level hackathon",
    },
    {
      id: 2,
      name: "Octa-hacks",
      title: "Top 20",
      img:
        "assets/ach7.png",
      icon: "assets/youtube.png",
      desc:
        "Developed a smart healthcare assisstant which can predict diseases with 85% accuracy on entering upto 6 symptoms, in this hack-a-thon conducted by DSC Chitkara University",
      featured: true,
    },
    {
      id: 3,
      name: "Ranked 7th in academics",
      title: "Certificate of Excellence",
      img:
        "assets/ach7.png",
      icon: "assets/linkedin.png",
      desc:
        "Was ranked 7th out of 800 students in the first year of college",
    },
  ];
  return (
    <div className="testimonials" id="achievements">
      <h1>Achievements</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
