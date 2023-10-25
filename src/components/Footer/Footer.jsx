import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo eaque ipsa quae ab illo.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
             Kharahiya Rosera Samastipur Bihar 848208
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 6207895384</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: ntseorg2023@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">
           

            Categories
           
            </div>
          <span className="text"> <Link to="/category/1">Science Olympiad  </Link></span>
          <span className="text"><Link to="/category/2">Math Olympiad</Link></span>
          <span className="text"><Link to="/category/3">English Olympiad</Link></span>
          <span className="text"><Link to="/category/4">Gk Olympiad</Link></span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text"><Link to="/">Home</Link></span>
          <span className="text"><Link to="/exam">Exams</Link></span>
          <span className="text"><Link to="/about">About</Link></span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">NTSE OLYMPIAD 2023</span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
