import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {FaLinkedin} from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article> 
                <Link to="/"  className="logo">
                    <img src={Logo} alt="logo"/>
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quasi nulla distinctio rem odit veritatis ex est praesentium, sint cum reprehenderit quis corporis hic, unde saepe explicabo aliquam minus provident.</p>
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                       { <FaLinkedin />}
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                       { <FaFacebook />}
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                       { <AiOutlineTwitter />}
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                       { <AiFillInstagram />}
                    </a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Community</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
               
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 EGATOR TUTORIALS &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer