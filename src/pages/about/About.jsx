import Header from '../../components/Header'
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg" 
import './about.css'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit dicta vitae laudantium, accusamus provident aperiam iste perferendis quam quo voluptate. Aliquid asperiores a odio blanditiis placeat eaque unde nam assumenda!
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
            <div className="about__section-image">
              <img src= {StoryImage} alt="StoryImage" />
            </div>
            <div className="about__section-content">
              <h1>Our Story</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ratione ullam alias facere possimus dolorem similique dicta, cumque vel, optio assumenda excepturi accusantium maiores aperiam atque quo. Laudantium, quae ipsum?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium harum, itaque eligendi quam vero odit blanditiis amet, inventore aspernatur, eveniet beatae earum! Ab laboriosam delectus sit asperiores exercitationem placeat commodi.</p>
              <p>Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?</p>
            </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
           
            <div className="about__section-content">
              <h1>Our Vision</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ratione ullam alias facere possimus dolorem similique dicta, cumque vel, optio assumenda excepturi accusantium maiores aperiam atque quo. Laudantium, quae ipsum?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium harum, itaque eligendi quam vero odit blanditiis amet, inventore aspernatur, eveniet beatae earum! Ab laboriosam delectus sit asperiores exercitationem placeat commodi.</p>
             
            </div>
            <div className="about__section-image">
              <img src= {VisionImage} alt="VisionImage" />
            </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
            <div className="about__section-image">
              <img src= {MissionImage} alt="MissionImage" />
            </div>
            <div className="about__section-content">
              <h1>Our Mission</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ratione ullam alias facere possimus dolorem similique dicta, cumque vel, optio assumenda excepturi accusantium maiores aperiam atque quo. Laudantium, quae ipsum?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium harum, itaque eligendi quam vero odit blanditiis amet, inventore aspernatur, eveniet beatae earum! Ab laboriosam delectus sit asperiores exercitationem placeat commodi.</p>
             
            </div>
           
        </div>
      </section>
    </>
  )
}

export default About