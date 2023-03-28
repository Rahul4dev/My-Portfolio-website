import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

// import { images } from '../../constants';
import { urlFor, client } from '../../client';

import './About.scss';

// const abouts = [
//   {
//     title: 'Web Development',
//     description: 'I am a learned web developer',
//     imgUrl: images.about01,
//   },
//   {
//     title: 'Web Design',
//     description: 'Specialized in Designing Web',
//     imgUrl: images.about02,
//   },
//   {
//     title: 'UI/UX ',
//     description: 'Focus on User more than anything',
//     imgUrl: images.about03,
//   },
//   {
//     title: 'Visual Design',
//     description: 'Creativity lies here',
//     imgUrl: images.about04,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client
      .fetch(query)
      .then((data) => setAbouts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that<span> Good Design</span>
        <br />
        means<span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + i}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
