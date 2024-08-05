import { Link } from "react-scroll";

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--conetent">
                    <p className="section--title"> Hey, I'm Yondela</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                        Full Stack</span>{" "}
                        <br />
                        Developer 
                    </h1>
                    <br />
                    
                </div>
                <Link
                //  onClick={closeMenu}
                 activeClass="navbar--active-content"
                 spy={true}
                 smooth={true}
                 offset={20}
                 duration={500}
                 to="Contact"
                >
                    <button className="btn btn-primary">Get In Touch</button>
                </Link>
                
            </div>
            <div className="hero--section--img">
                <img src="./img/yondela-proffessional.jpg" alt="" />
            </div>
    

        </section>
    );
}