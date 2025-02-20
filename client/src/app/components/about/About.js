import "./aboutstyle.css";

export default function About() {
  return (
    <div>
      <div id="about" className="container aboutContainer d-flex flex-row align-items-center justify-content-between">
        {/* Left Side - Text */}
        <div className="textContent d-flex flex-column">
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
        <div className="imageContainer">
          <img src="/images/profile-picture.jpg" alt="Kenjy Jap" className="profileImage" />
        </div>
      </div>

      <div id="resume" className="container aboutContainer d-flex flex-row align-items-center justify-content-between">
        <div className="textContent d-flex flex-column">
          <h1>Education</h1>
          <div className="timeline">
            {/* <!-- Education Item --> */}
            <div className="timelineItem">
              <div className="timelineIcon"></div>
              <div className="timelineContent">
                <h3>
                  UX/UI Software Development Boot Camp <span className="company">@Univeristy of Irvine</span>
                </h3>
                <p className="date">August 2024 - November 2024</p>
              </div>
            </div>
          </div>
          <h1 className="sectionTitle">Experience</h1>
          <div className="timeline">
            {/* <!-- Experience Item 1 --> */}
            <div className="timelineItem">
              <div className="timelineIcon"></div>
              <div className="timelineContent">
                <h3>
                  Software Developer <span className="company">@Fab Finder</span>
                </h3>
                <p className="date">December 2024 - Present</p>
                <ul>
                  <li>Designed and developed a web application to optimize card search functionality and provide the latest decklists for new players.</li>
                  <li>Leveraged the Next.js full-stack framework with MongoDB and Node.js to build a scalable and efficient platform.</li>
                  <li>Improved system efficiency by integrating API calls, ensuring accurate and up-to-date card information retrieval.</li>
                </ul>
              </div>
            </div>

            {/* <!-- Experience Item 2 --> */}
            <div className="timelineItem">
              <div className="timelineIcon"></div>
              <div className="timelineContent">
                <h3>
                  Software Developer <span className="company">@UX/UI Boot Camp</span>
                </h3>
                <p className="date">August 2024 - November 2024</p>
                <h4>Birdle</h4>
                <ul>
                  <li>Led a three-person development team in designing and building a web-based game application.</li>
                  <li>Developed a Wordle-inspired game using JavaScript, HTML, and CSS, focusing on responsive design and user-friendly gameplay mechanics.</li>
                  <li>Implemented game logic and state management, ensuring smooth interactivity and real-time feedback.</li>
                </ul>
                <h4>TamaPudgy</h4>
                <ul>
                  <li>Developed TomoPudgy, a full-stack MERN (MongoDB, Express, React, Node.js) web application designed to assist users on their fitness and weight loss journey.</li>
                  <li>
                    Engineered an interactive diet tracking system, where a Tamagotchi-inspired virtual companion visually reflects users’ progress by gaining or losing weight based on daily caloric
                    intake.
                  </li>
                  <li>Enhanced data accuracy and real-time tracking by integrating API calls, ensuring up-to-date food and calorie information retrieval.</li>
                </ul>
              </div>
            </div>

            {/* <!-- Experience Item 3 -->
            <div className="timeline-item">
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <h3>
                  Networking & Marketing Coordinator <span className="company">Akupara Games</span>
                </h3>
                <p className="date">August 2020 - December 2020</p>
                <ul>
                  <li>Contributed to the strategic design enhancement of the website to optimize user engagement and promote increased interaction.</li>
                  <li>Collaborated with the development team to offer valuable insights into gameplay enhancement and effective marketing strategies.</li>
                  <li>Orchestrated and managed a high-impact live online streaming event.</li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
        <div className="imageContainer">
          <img src="/images/UCI-bootcamp-certification.jpg" alt="Kenjy Jap" className="resumeImage" />
        </div>
      </div>
    </div>
  );
}
