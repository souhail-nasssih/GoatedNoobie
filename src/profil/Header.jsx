import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  return (
    <div className="container d-flex flex-column text-center">
      {/* Logo */}
      <div className="container d-flex flex-column text-center mt-3">
        <div className="row justify-content-center align-items-center">
          {/* Logo */}
          <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
            <img src="moussawi.png" className="logo img-fluid" alt="Logo" />
          </div>

          {/* Texte */}
          <div className="col-12 col-md-8 text-center text-md-start px-3 mt-5">
            <h1 className="text-white fw-bold mb-3 boldonse-regular text-left">
              Moussaoui
            </h1>
            <p className="text-white text-justify">
              🎮 I am <strong>Moussaoui</strong>, a passionate streamer on
              Kick! Delivering the most entertaining, high-energy gaming content
              — from insane plays to hilarious fails. If you're into competitive
              games, chill vibes, and unforgettable moments, you’re in the right
              place. Join the community and become part of the Moussaoui Squad!
              🚀🔥
            </p>
          </div>
        </div>
      </div>

      {/* Section Réseaux Sociaux */}
      <div>
        <h2 className="text-white fw-bold text-center mt-5 boldonse-regular fs-4 !importent">
          Follow Me on Social Media
        </h2>
        {/* Icônes des réseaux sociaux avec liens */}
        <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
          <a
            href="https://www.instagram.com/24_moussaoui/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://media.tenor.com/PODuLdcrSnYAAAAi/insta-instagram.gif"
              alt="Instagram"
              className="social-icon"
            />
          </a>
          <a
            href="https://kick.com/moussaoui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://media.tenor.com/56rb9SP2BC0AAAAj/kick-kick-logo.gif"
              alt="Kick"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.tiktok.com/@moussaoui24x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://media.tenor.com/ozI2VRWEgN0AAAAj/tiktok-logo.gif"
              alt="TikTok"
              className="social-icon"
            />
          </a>
        </div>
      </div>

      {/* Social Media Cards */}
      <div className="row justify-content-center align-items-center">
        {/* Instagram Card */}
        <div className="col-12 mb-4">
          <div className="card social-card bg-transparent shadow-lg">
            <a
              href="https://www.instagram.com/24_moussaoui/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-body text-center"
            >
              <img
                src="https://media.tenor.com/PODuLdcrSnYAAAAi/insta-instagram.gif"
                alt="Instagram"
                className="social-icon"
              />
              <h5 className="card-title mt-2 text-white">Instagram</h5>
              <p className="text-white">
                Follow me on Instagram for exclusive updates.
              </p>
            </a>
          </div>
        </div>

        {/* Kick Card */}
        <div className="col-12 mb-4">
          <div className="card social-card bg-transparent shadow-lg">
            <a
              href="https://kick.com/moussaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="card-body text-center"
            >
              <img
                src="https://media.tenor.com/56rb9SP2BC0AAAAj/kick-kick-logo.gif"
                alt="Kick"
                className="social-icon"
              />
              <h5 className="card-title mt-2 text-white">Kick</h5>
              <p className="text-white">
                Check out my exclusive content on Kick.
              </p>
            </a>
          </div>
        </div>

        {/* TikTok Card */}
        <div className="col-12 mb-4">
          <div className="card social-card bg-transparent shadow-lg">
            <a
              href="https://www.tiktok.com/@moussaoui24x"
              target="_blank"
              rel="noopener noreferrer"
              className="card-body text-center"
            >
              <img
                src="https://media.tenor.com/ozI2VRWEgN0AAAAj/tiktok-logo.gif"
                alt="TikTok"
                className="social-icon"
              />
              <h5 className="card-title mt-2 text-white">TikTok</h5>
              <p className="text-white">
                Follow me on TikTok for fun and creative content.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
