import React, { useState, useEffect } from 'react';
import "./profile.css"

const Profile = () => {
  const words = [
    "Full Stack Developer 💻",
    "MERN Stack Developer 🚀",
    "Web Developer 💻",
    "React Developer ⚛️",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const wordIndex = currentWordIndex;
    const word = words[wordIndex];
    let timer;

    if (typing) {
      timer = setTimeout(() => {
        setCurrentWord(word.substring(0, currentWord.length + 1));

        if (currentWord.length === word.length) {
          setTyping(false);

          setTimeout(() => {
            setTyping(true);
            setCurrentWord("");
            setCurrentWordIndex((currentWordIndex + 1) % words.length);
          }, 5000); // Pause at the end of each word for 2 seconds before erasing
        }
      }, 100);
    } else {
      timer = setTimeout(() => {
        setCurrentWord(word.substring(0, currentWord.length - 1));

        if (currentWord.length === 0) {
          setTyping(true);
        }
      }, 50);
    }

    return () => clearTimeout(timer);
  }, [currentWord, currentWordIndex, typing]);

  return (
    <div className='profile-container'>
      <div className="profile-parent">
        <div className="profile-details">
          {/* <div className="colz">
            <div className="colz-icon">
            <a href="#">
              <i className='fa fa-facebook-square'></i>
            </a>
            <a href="#">
              <i className='fa fa-google-plus-square'></i>
            </a>
            <a href="#">
              <i className='fa fa-instagram'></i>
            </a>
            <a href="#">
              <i className='fa fa-twitter'></i>
            </a>
            </div>
          </div> */}

          <div className="profile-details-name">
            <span className='primary-text'>
              {" "}
              Hello, I'm <span className='highlighted-text'>Andries</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                {currentWord}
              </h1>
              <span className="profile-role">
                Knack of building applications with front and back-end operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className='btn primary-btn'>
              {""}
              Hire Me{" "}
            </button>
            <a href="#">
              <button className='btn highlighted-btn'>WhatsApp me</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
