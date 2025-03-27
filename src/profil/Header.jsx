import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  return (
    <div className="container d-flex flex-column text-center">
      {/* Logo */} 
      <div className="container-fluid d-flex flex-column text-center mt-3">
        <div className="row justify-content-center align-items-center">
          {/* Logo */}
          <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
            <img src="gote2.png" className="logo img-fluid" alt="Logo" />
          </div>

          {/* Texte */}
          <div className="col-12 col-md-8 text-center text-md-start px-3 mt-5">
            <h1 className="text-white fw-bold mb-3 boldonse-regular text-left">
              GoatedNoobie
            </h1>
            <p className="text-white text-justify">
              🎮 I am <strong>GoatedNoobie</strong>, the best streamer on Kick!
              Bringing you the most entertaining, high-energy gaming content,
              from epic wins to hilarious moments. If you love competitive
              gaming, engaging streams, and top-tier entertainment, you’re in
              the right place! Join the community and be part of the GOATED
              squad! 🚀🔥

            </p>
               
          </div>
        </div>
      </div>

      {/* Section Réseaux Sociaux */}
     <div>
     <h2 className="text-white fw-bold text-center mt-5 boldonse-regular fs-4 !importent">Follow Me on Social Media</h2>
      {/* Icônes des réseaux sociaux */}
      <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
              <img
                src="https://media.tenor.com/PODuLdcrSnYAAAAi/insta-instagram.gif"
                alt="Instagram"
                className="social-icon"
              />
              <img
                src="https://media.tenor.com/56rb9SP2BC0AAAAj/kick-kick-logo.gif"
                alt="Kick"
                className="social-icon"
              />
              <img
                src="https://media.tenor.com/bJahDWJVDvwAAAAi/heart-love.gif"
                alt="Heart"
                className="social-icon"
              />
            </div>
     </div>

      {/* Social Media Cards */}
      <div className="row justify-content-center align-items-center">
        {/* Instagram Card */}
        <div className="col-12 mb-4">
          <div className="card social-card bg-transparent shadow-lg">
            <a
              href="https://www.instagram.com/goatednoobie/"
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
              <p className="text-white">Follow me on Instagram for exclusive updates.</p>
            </a>
          </div>
        </div>

        {/* Kick Card */}
        <div className="col-12 mb-4">
          <div className="card social-card bg-transparent shadow-lg">
            <a
              href="https://kick.com/goatednoobie"
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
              <p className="text-white">Check out my exclusive content on Kick.</p>
            </a>
          </div>
        </div>

        {/* YouTube Card */}
        <div className="col-12 mb-4">
          <div className="card social-card bg-transparent shadow-lg">
            <a
              href="https://www.youtube.com/@GOATEDNOOBIE"
              target="_blank"
              rel="noopener noreferrer"
              className="card-body text-center"
            >
              <img
                src="https://media.tenor.com/bJahDWJVDvwAAAAi/heart-love.gif"
                alt="Heart"
                className="social-icon"
              />
              <h5 className="card-title mt-2 text-white">YouTube</h5>
              <p className="text-white">Subscribe to my YouTube channel for exclusive videos.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
