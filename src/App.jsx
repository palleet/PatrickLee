import { useState } from "react";

import headshot from "./assets/images/header_headshot.jpeg"
import splatDemo from "./assets/images/examples/splat_painter_demo.gif"
import bunnyDemo1 from "./assets/images/examples/bunny_depth_1.png"
import bunnyDemo5 from "./assets/images/examples/bunny_depth_5.png"
import dragonDemo from "./assets/images/examples/dragon_rate.png"
import cpuDiagram from "./assets/images/examples/RISC-V_diagram.png"

import "./Portfolio.css";

function App() {

  return (
    <>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Patrick Lee</h1>
          <figure>
            <img
              src={headshot}
              alt="Patrick Lee"
              className="headshot"
            />
          </figure>
          <div
            className="contact-info"
            style={{
              marginTop: "1em",
              color: "#eee",
              fontSize: "1.2em",
            }}
          >
            <a
              href="mailto:patl@berkeley.edu"
              style={{ color: "#eee", margin: "0 10px" }}
            >
              Email
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/patricklee2003/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#eee", margin: "0 10px" }}
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/palleet"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#eee", margin: "0 10px" }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>About Me</h2>
        <p>
          Hi, I'm Patrick Lee, an aspiring software engineer with a degree in
          Electrical Engineering and Computer Sciences from UC Berkeley. I'm
          passionate about programming especially in the areas of computer
          graphics, iOS development, and 3D reconstruction.
        </p>
        <p>
          This past summer, I was a software engineer intern at Life Stages,
          where I helped develop the MVP for Align, a personalized mind-body
          wellness app. During this experience, I gained hands-on skills in iOS
          and mobile development, including implementing the MVVM
          (Model-View-ViewModel) architecture and integrating backend services
          using Firebase.
        </p>

        <h2>Projects</h2>

        <h3>Splat Painter</h3>
        <a href="https://lionelvlv.github.io/cs184splatpainter/finalreport.html">
          Full Project Page
        </a>
        <ul>
          <li>
            Developed an interactive painting tool for Gaussian Splat scenes,
            enabling dynamic color modification of splats.
          </li>
          <li>
            Implemented camera-based projection of splat centers onto the image
            plane to allow user-controlled painting via cursor and custom color
            input.
          </li>
        </ul>
        <a href={splatDemo}>
          <img
            src={splatDemo}
            alt="Splat Painter demo"
            style={{ width: "50%" }}
          />
        </a>

        <h3>RISC-V CPU</h3>
        <ul>
          <li>
            Designed a three-staged pipelined RISC-V CPU to run on a Xilinx FPGA
            running RISC-V assembly instructions and software programs written
            in C.
          </li>
          <li>
            Added forwarding between stages to avoid data hazards and a Branch
            Prediction Buffer built using a cache
          </li>
        </ul>
        <a href={cpuDiagram}>
          <img
            src={cpuDiagram}
            alt="RISC-V Pipeline Diagram"
            style={{ width: "50%" }}
          />
        </a>

        <h3>Path Tracer</h3>
        <a href="https://cal-cs184-student.github.io/hw-webpages-liokaiser-writeup/hw3/index.html">
          Full Project Page
        </a>
        <ul>
          <li>
            Implemented direct and indirect lighting using ray intersections
            accelerated by a bounding volume hierarchy.
          </li>
          <li>
            Utilized Monte Carlo integration and Russian Roulette to solve the
            rendering equation and adaptively sample each pixel to efficiently
            reduce noise in final renders.
          </li>
        </ul>
        <table>
          <tbody>
            <tr>
              <td style={{ textAlign: "center" }}>
                <a href={bunnyDemo1}>
                  <img
                    src={bunnyDemo1}
                    alt="Bunny with light depth 1"
                    style={{ width: "100%" }}
                  />
                </a>
              </td>
              <td style={{ textAlign: "center" }}>
                <a href={bunnyDemo5}>
                  <img
                    src={bunnyDemo5}
                    alt="Bunny with light depth 5"
                    style={{ width: "100%" }}
                  />
                </a>
              </td>
              <td style={{ textAlign: "center" }}>
                <a href={dragonDemo}>
                  <img
                    src={dragonDemo}
                    alt="Dragon Sample Rate"
                    style={{ width: "100%" }}
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <h3>RookieDB</h3>
        <ul>
          <li>
            Implemented a bare-bones database system supporting B+ tree indices,
            efficient join algorithms, query optimization, multigranularity
            locking, and database recovery to execute simple transactions in
            series.
          </li>
          <li>
            Leveraged ARIES recovery method to perform savepointing, rollbacks,
            and ACID-compliant restart recovery
          </li>
        </ul>

        <h3>Resume Builder</h3>
        <a href="https://resume-pal.netlify.app/">
          Full Project Page
        </a>
        <ul>
          <li>
            Developed a responsive resume generator using React, allowing users
            to input and edit their personal, educational, and professional
            information with real-time state management.
          </li>
          <li>
            Implemented a modular component structure to manage input fields,
            form submission, and data display, ensuring ease of maintenance and
            scalability.
          </li>
          <li>
            Successfully deployed the application to Netlify, enabling
            continuous integration and deployment directly from GitHub for
            seamless updates.
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
