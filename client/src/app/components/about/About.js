import "./aboutstyle.css";

export default function About() {
  return (
    <div>
      <div id="about" className="container about-container d-flex flex-row align-items-center justify-content-between">
        {/* Left Side - Text */}
        <div className="text-content d-flex flex-column">
          <h1>About Me</h1>
          <p>
            Hello! My name is <span>Kenjy</span>, and I am a Full-Stack Developer based in California. I have a deep passion for problem-solving, coding, and leveraging technology to build impactful
            solutions.
          </p>
          <p>
            My interests continuously evolve with my environment, and currently, I am particularly fascinated by <span>Next.js</span>. I thrive on learning new technologies and frameworks, always
            seeking opportunities to enhance my skills and stay ahead in the ever-changing tech landscape.
          </p>
          <p>
            I am a highly motivated and fast learner, always driven by clear goals. Collaborating with like-minded, passionate developers inspires me to push boundaries, ask insightful questions, and
            continuously refine my craft. I take pride in my ability to <span>adapt</span> quickly, <span>improve</span> processes, and <span>deliver</span> high-quality work on time.
          </p>
          <p>
            Beyond just coding, I have a strong appreciation for <span>communication</span>, <span>mentorship</span>, and building meaningful <span>relationships</span>. I am a firm believer in
            teamwork, fostering a positive work culture, and encouraging innovation within any environment.
          </p>
          <p>Outside of technology, I enjoy rock climbing, camping, and exploring live music. I am also an avid gamer with a deep interest in FPS, MMORPGs, and TCG/Board Games.</p>
          <p>
            If you’d like to connect, feel free to reach out to me on{" "}
            <span>
              <a href="https://www.linkedin.com/in/kenjyjap/">LinkedIn</a>
            </span>{" "}
            or{" "}
            <span>
              <a href="https://github.com/Kenhie94">GitHub</a>
            </span>
            . You can also contact me via email at <strong>kenhiebusiness@gmail.com</strong>.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="image-container">
          <img src="/images/profile-picture.jpg" alt="Kenjy Jap" className="profile-image" />
        </div>
      </div>

      <div className="container about-container d-flex flex-row align-items-center justify-content-between">
        <div className="text-content d-flex flex-column">
          <h1>Education</h1>
        </div>
        <div className="image-container">
          <h1>Resume</h1>
        </div>
      </div>
    </div>
  );
}
