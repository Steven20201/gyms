import Header from  "../../components/Header"
import HeaderImage from "../../images/header_bg_5.jpg"
import {trainers} from "../../data"
import {BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from'react-icons/fa'
import { FaLinkedin } from "react-icons/fa"
import './trainers.css'
import Trainer from "../../components/Trainer"

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainer" image= {HeaderImage}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati omnis facilis, ipsum pariatur odit temporibus nam, sint eum provident placeat delectus. Aut laudantium quia eligendi beatae distinctio blanditiis minima molestiae!
      </Header>
      <section className="trainers">
        <div className="container trainers__containers">
          {
            trainers.map(({id, image, name, job, socials}) => {
             return <Trainer key={id} image={image} name={name} job={job} socials= {
                [
                  {icon: <BsInstagram/>, link: socials[0]},
                  {icon: <FaTwitter/>, link: socials[1]},
                  {icon: <FaFacebook/>, link: socials[2]},
                  {icon: <FaLinkedin/>, link: socials[3]}

                ]
              }>

              </Trainer>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers