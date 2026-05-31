import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodewars } from "react-icons/si";
import { GoFileDirectory } from "react-icons/go";

export default function ProfileCard() {
  return (
    <div className="card-main-container">
      {/* <img src="/profile.jpg" alt="Profile" className="profile-img" /> */}
      <p>Mr Andrew</p>

      <h2>Fullstack Developer & Mobile Engineer</h2>

      <div className="tech-stack-main-container">
        <h3>Frontend</h3>
        <div className="frontend-container">
          <p>React</p>
          <p>TypeScript</p>
        </div>

        <h3>Backend</h3>
        <div className="backend-container">
          <p>Node.js</p>
          <p>SQL</p>
        </div>

        <h3>DevOps / Cloud</h3>
        <div className="engineering-container">
          <p>Docker</p>
          <p>AWS</p>
          <p>CI / CD</p>
        </div>
      </div>

      <div className="social-main-container">
        <a
          className="social-link"
          href="https://github.com/Hanhdrew"
          target="_blank"
          rel="noreferrer">
          <p>
            <FaGithub size={33} />
          </p>
          <p>GitHub</p>
        </a>

        <a
          className="social-link"
          href="https://www.codewars.com/users/Hanhdrew"
          target="_blank"
          rel="noreferrer">
          <p>
            <SiCodewars size={33} />
          </p>
          <p>CodeWars</p>
        </a>

        <a
          className="social-link"
          href="https://leetcode.com/Hanhdrew"
          target="_blank"
          rel="noreferrer">
          <p>
            <SiLeetcode size={33} />
          </p>
          <p>LeetCode</p>
        </a>

        <a
          className="social-link"
          href="https://yourportfolio.com"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            alert("Hol on i aint do it yet");
          }}
          target="_blank"
          rel="noreferrer">
          <p>
            <GoFileDirectory size={33} />
          </p>
          <p>Full Developer Portfolio</p>
        </a>
      </div>
    </div>
  );
}
