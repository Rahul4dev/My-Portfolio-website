import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SiHashnode, SiGithub } from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/rahul-singh-840714254/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://rahul4dev.hashnode.dev/"
        target="_blank"
        rel="noreferrer"
      >
        <SiHashnode />
      </a>
      <a href="https://github.com/Rahul4dev" target="_blank" rel="noreferrer">
        <SiGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
