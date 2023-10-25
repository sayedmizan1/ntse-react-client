import "./Banner.scss";
import BannerImg from "../../../assets/banner11.png"
import { redirect } from "react-router-dom";
const Banner = () => {
    return (
        <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1 >NTSE</h1>
                <h1>OLYMPIAD 2023</h1>
                <p>
                Challenge Yourself and Win Prestigious Awards and Cash Prize
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2" >Explore Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} />
        </div>
    </div>
    )
};

export default Banner;
