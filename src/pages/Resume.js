import React from "react";
import "./Resume.css";

import profile from '../../src/static/profile.png'

const Resume = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <div className="resume-header-content">
          <img src={profile} alt="Profile Picture" className="profile-picture" />
          <div>
            <h1>Sam Pieters</h1>
            <p>Teaching Assistant/PhD Student | 2610, Wilrijk, Belgium</p>
            <p>Email: <a href="mailto:sampieters1236@icloud.com">sampieters1236@icloud.com</a></p>

            <p><b>About me: </b>I am currently pursuing a PhD at the University of Antwerp in the 
            Adrem Data Lab, led by Professor Bart Goethals. My research focuses on advancing recommender 
            systems, exploring innovative ways to enhance personalized recommendations and user experiences. 
            Alongside my research, I am passionate about education and enjoy teaching courses on computer 
            skills, empowering students with practical knowledge and technical expertise.</p>
          </div>
        </div>
      </header>

      <section className="resume-section">
        <h2>Education</h2>
        <ul>
            <li>
                <strong>Master of Science in Computer Science</strong>
                <p>Specialisation Software Engineering</p>
                <p>University of Antwerp, Antwerp, Belgium</p>
                <p>2022 - 2024</p>
                <p>Grade: Distinction</p>
            </li>
            <li>
                <strong>Bachelor of Science in Computer Science</strong>
                <p>University of Antwerp, Antwerp, Belgium</p>
                <p>2019 - 2022</p>
                <p>Grade: Passed</p>
            </li>
            <li>
                <strong>High School Diploma in Science and Mathematics</strong>
                <p>H. Pius X-instituut, Antwerp, Belgium</p>
                <p>2013 - 2019</p>
            </li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <ul>
            <li>
                <strong>Teaching Assistant</strong>
                <p>University of Antwerp, Antwerp, Belgium</p>
                <p>2024 - Present</p>
                <ul>
                  <li>Provided one-on-one guidance and feedback to students on coursework and projects.</li>
                  <li>Prepared and graded assignments, exams, and lab exercises to evaluate student performance.</li>
                  <li>Facilitated group discussions and practical sessions to reinforce theoretical concepts.</li>
                  <li>Collaborated with professors to update course materials and improve learning outcomes.</li>
                </ul>
            </li>
            <li>
                <strong>Student Teaching Assistant</strong>
                <p>University of Antwerp, Antwerp, Belgium</p>
                <p>2023 - 2024</p>
                <ul>
                    <li>Conducting tutorials and assisting students in understanding course materials.</li>
                    <li>Grading assignments and providing constructive feedback to support student learning.</li>
                    <li>Collaborating with assistants and professors to develop educational materials and lesson plans.</li>
                    <li>Facilitating discussions and engaging with students to enhance their learning experience.</li>
                </ul>
            </li>
            <li>
                <strong>Ski Rental Attendant</strong>
                <p>Aspen, Wilrijk, Belgium</p>
                <p>2018 - 2020</p>
                <ul>
                    <li>Assisted customers in selecting and adjusting ski and snowboard equipment.</li>
                    <li>Creating a friendly and welcoming atmosphere for customers.</li>
                </ul>
            </li>
            <li>
                <strong>Retail Assistant</strong>
                <p>Carrefour, Wilrijk, Belgium</p>
                <p>2017 - 2018</p>
                <ul>
                    <li>Provided customer service by assisting shoppers and addressing inquiries.</li>
                    <li>Maintained inventory, organized merchandise displays, and ensured store cleanliness.</li>
                </ul>
            </li>
            <li>
                <strong>Sports Coach</strong>
                <p>Carrefour, Wilrijk, Belgium</p>
                <p>2017 - Present</p>
                <ul>
                    <li>Conducted training sessions to enhance individual and team skills in bicycle motocross (BMX).</li>
                    <li>Provided constructive feedback and motivation to inspire optimal performance.</li>
                </ul>
            </li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Publications</h2>
        <p>Work in progress</p>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <div>
          <h3>Programming Languages</h3>
          <ul className="skills-list">
            <li>Python</li>
            <li>C++</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div>
          <h3>Web Technologies</h3>
          <ul className="skills-list">
            <li>HTML/CSS</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>Vue.js</li>
            <li>Flask</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        <p> Work in progress</p>
      </section>

      <section className="resume-section">
        <h2>Extracurricular Activities</h2>
        <ul>
          <li>
            <strong>President</strong>
            <p>WINAK vzw, Antwerp, Belgium</p>
            <p>2023 - 2024</p>
            <ul>
              <li>Led the student association in planning and executing a diverse range of successful events, fostering a strong sense of community.</li>
              <li>Managed organizational tasks, including budgeting, event coordination, and communication with members.</li>
              <li>Collaborated with other student and student associations to make decisions and ensure the smooth functioning of the organization and events.</li>
            </ul>
          </li>
          <li>
            <strong>Vice-President</strong>
            <p>WINAK vzw, Antwerp, Belgium</p>
            <p>2022 - 2023</p>
            <ul>
              <li>Assumed a leadership role in the absence of the President, contributing to decision-making and strategic planning.</li>
              <li>Coordinated and executed various events, ensuring their success and alignment with the organization's goals.</li>
            </ul>
          </li>
          <li>
            <strong>Space Manager</strong>
            <p>WINAK vzw, Antwerp, Belgium</p>
            <p>2021 - 2022</p>
            <ul>
            </ul>
          </li>
          <li>
            <strong>Mentor</strong>
            <p>WINAK vzw, Antwerp, Belgium</p>
            <p>2020 - 2021</p>
            <ul>
              <li>Provided guidance and support to new members, helping them acclimate to the university.</li>
              <li>Organized mentorship programs and activities to facilitate bonding within the group.</li>
              <li>Assisted in the coordination of events and initiatives aimed at enhancing the overall student association experience.</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="resume-section">
        <h2>References</h2>
        <p>Available upon request</p>
      </section>
    </div>
  );
};

export default Resume;
