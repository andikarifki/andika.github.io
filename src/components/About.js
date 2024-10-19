import React from "react";
import "./css/About.css";

function About() {
  return (
    <>
      <div className="about">
        <h1 className="heading-name">Andika Rifqi Istanto</h1>
        <h2 className="heading-position">Frontend Developer</h2>
        <section className="section-link">
          <a
            href="/cv.pdf" // Ganti dengan path ke file PDF Anda
            download // Menyatakan bahwa file ini adalah untuk diunduh
            className="link-pdf"
          >
            Download CV
          </a>
        </section>
      </div>
    </>
  );
}

export default About;
