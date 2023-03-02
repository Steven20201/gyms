import Header from '../../components/Header'
import './contact.css'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io' 

const Contact = () => {
  return (
    <>
    <Header title = "Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nihil provident voluptates iste magnam veniam dolores obcaecati expedita neque voluptatibus culpa ducimus quasi, officiis id a aliquid aut assumenda. Id.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:khantzawhein261@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail /></a>
          <a href="http://m.me/ernest_archiever" target="_blank" rel="noreferrer noopener"><BsMessenger /></a>
          <a href="https://wa.me/+6588194253" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp /></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact