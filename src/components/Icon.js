import React from "react";
import "./css/Icon.css";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import LinkedIn and GitHub icons

export default function Icon() {
  return (
    <div className="icon-container">
      <div className="icon">
        <a
          href="https://www.linkedin.com/in/andika-rifqi-istanto-339747232/e/" // Ganti dengan URL LinkedIn Anda
          target="_blank" // Membuka di tab baru
          rel="noopener noreferrer" // Mencegah potensi risiko keamanan
          className="linkedin-icon"
        >
          <FaLinkedin size={30} color="#0077b5" /> {/* Ukuran dan warna ikon */}
        </a>
      </div>
      <div className="icon">
        <a
          href="https://github.com/your-github-username" // Ganti dengan URL GitHub Anda
          target="_blank" // Membuka di tab baru
          rel="noopener noreferrer" // Mencegah potensi risiko keamanan
          className="github-icon"
        >
          <FaGithub size={30} color="#333" /> {/* Ukuran dan warna ikon */}
        </a>
      </div>
    </div>
  );
}
