import React from "react";
import "./about.css";
import ME3 from "../../Assets/ME3.jpg";
import { MdCastForEducation } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5> Get To Know </h5>
      <h2> About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME3} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdCastForEducation className="about__icon" />
              <h5> Education </h5>
              <small>
                {" "}
                Computer Science BSc (1st) including Placement Year degree,
                University of Essex, UK.{" "}
              </small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> Experience </h5>
              <small>3 Years Working </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> Projects </h5>
              <small> 10+ Completed Projects</small>
            </article>
          </div>

          <p>
            Full stack engineer at Coolblue (Netherlands, Utrecht) and graduated
            with Computer Science BSc (Hons) (1st) including Placement Year
            degree at the University of Essex, UK. <br></br>
            <br></br>
            From an early age I have been interested in Software development,
            spent most of my time and energy trying to grasp it under the hood.
            I am not interested in a specific language or framework; I prefer to
            spend my time implementing new designs, improving codebases, models,
            and algorithms. Computer science taught me how to face problems and
            find solutions, thus also built my character. Contradictory to the
            stereotype, I do believe, I have proper communicative and time
            management skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
