import React from "react";
import coverImage from '../../assets/cover/cover-image.jpg';
import userImage from '../../assets/ip2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


function About() {
    return (
        <section className="">
            <h1 id="about">Daniel Mindlin</h1>
            <img src={coverImage} className="hero"  alt="cover" />

            <div className="row">

                <div className="col-4 ip-picture">
                    <img src={userImage} className="ip-picture" alt="daniel-mindlfish" />
                </div>

                <div className="col-7 ip-desc">
                    <h4>About me</h4>
                    <p>
                    Data Scientist, Web Developer, and Student. Looking to grow as a Professional and as an Individual.
                    </p>
                </div>


            </div>

        </section>
    )
}

export default About;