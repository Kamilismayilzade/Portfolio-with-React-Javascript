import "./about.css";
import About1 from "../../img/about.svg";
import Award from "../../img/award3.svg";

const About = () => {
    return (
        <div className = "a">

            <div className="a-left">
                <div className="a-card bg"></div>

                <div className="a-card">
                    <img src= {About1} alt="" className = "a-img" />
                </div>

            </div>

            <div className="a-right">
                <h1 className = "a-title">About Me</h1>
                <p className = "a-sub">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta sunt vitae dignissimos consectetur pariatur itaque!
                </p>
                <p className = "a-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum labore 
                    ut recusandae dolores reprehenderit eos dolorum similique enim ex quidem. 
                    Alias quaerat velit distinctio, ut maiores consequuntur quisquam commodi repudiandae.
                </p>
                <div className="a-award">
                    <img src= {Award} alt="" className = "a-award-img" />
                    <div className="a-award-texts">
                        <h4 className = "a-award-title">International Design Awards 2021</h4>
                        <p className = "a-award-desc">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Odit est eius laborum aut natus optio labore eum, magnam culpa veniam.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
