export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--conetent">
                    <p className="section--title"> Hey I'm Yondela</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                        Full Stack</span>{" "}
                        <br />
                        Developer 
                    </h1>
                    <p>A passionate software developer
                    </p>
                    
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/yondela-proffessional.jpg" alt="" />
            </div>
    

        </section>
    );
}