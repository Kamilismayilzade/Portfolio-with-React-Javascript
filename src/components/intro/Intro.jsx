import "./intro.css";
import Intro1 from "../../img/intro.svg";

const Intro = () => {
    return (
        <div className = "i">

            <div className="i-left">
                <div className="i-left-wrapper">

                    <h2 className = "i-intro">Hello, My name is</h2>
                    <h1 className = "i-name">Kamil Ismayilzada</h1>

                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">Content Creator</div>
                            <div className="i-title-item">Writer</div>
                        </div>
                    </div>

                    <p className="i-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Sint perspiciatis expedita nam placeat, enim at neque corporis voluptatum
                         veniam repellendus doloribus vero dolorem nobis eius aspernatur distinctio
                          ullam. Enim, magnam.
                    </p>

                </div>

                <svg className = "i-scroll" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mouse-fill" viewBox="0 0 16 16">
                <path d="M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V5zm5.5-1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z"/>
                </svg>

            </div>

            <div className="i-right">
                <div className="i-bg"></div>
                <img src= {Intro1} alt="" className = "i-img" />
            </div>

        </div>
    )
}

export default Intro
