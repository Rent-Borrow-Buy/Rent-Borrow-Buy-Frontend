import React from 'react';
import andrea from '../../assets/andrea.jpeg';
import cole from '../../assets/cole.jpeg';
import marcus from '../../assets/marcus.jpeg';
import yovana from '../../assets/yovana.jpeg';

import styles from '../../views/CreatorsPage/CreatorsPage.css';


export default function CreatorsPage() {
    return (
    <div className={styles.creator}>
      <h1>Meet the Creators!</h1>

      <div>
        <br />
        <br />
        <h2>Andrea Cleland</h2>
        <p>Beauty and grace</p>
        <div className={styles.border}>
          <a href="https://www.linkedin.com/in/andrea-cleland/">
            <img
              src={andrea}
              style={{
                objectFit: 'cover',
                width: '98%',
                height: '98%',
                border: 'solid black',
              }}
            />
          </a>
        </div>
      </div>
      <br />
      <br />
      <div>
        <h2>Cole</h2>
        <p>Gym is life and I'm the vibe</p>
        <div className={styles.border}>
          <a href="https://www.linkedin.com/in/cole-rossman/">
            <img
              src={cole}
              style={{
                objectFit: 'cover',
                width: '98%',
                height: '98%',
                border: 'solid black',
              }}
            />
          </a>
        </div>
      </div>
      <br />
      <br />
      <div>
        <h2>Marcus</h2>
        <p>Nail polish on point and dope af</p>
        <div className={styles}>
          <a href="https://www.linkedin.com/in/marcus-ghiringhelli/">
            <img
              src={marcus}
              style={{
                width: '98%',
                height: '98%',
                border: 'solid black',
              }}
            />
          </a>
        </div>
      </div>
      <div>
        <h2>Yovana</h2>
        <p>Full Stack Software Engineer and I enjoy music and standup comedy.</p>
        <div className={styles.border}>
          <a href="https://www.linkedin.com/in/yovana-pelayo">
            <img
              src={yovana}
              style={{
                width: '98%',
                height: '98%',
                border: 'solid black',
              }}
            />
          </a>
        </div>
      </div>
      <footer className={styles}>
        <div></div>
      </footer>
    </div>
  );
}