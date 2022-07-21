import React from 'react';
import andrea from '../../assets/andrea.jpeg';
import cole from '../../assets/cole.jpeg';
import marcus from '../../assets/marcus.jpeg';
import yovana from '../../assets/yovana.jpeg';
import { Link } from "react-router-dom";


import styles from '../../views/CreatorsPage/CreatorsPage.css';


export default function CreatorsPage() {
    return (
    <div className={styles.allcreators}>
      <Link to="/" >
      <button>Return Home</button>
    </Link>
      <h1>Meet the Creators!</h1>
      <p>The Rent Borrow Buy team created a full stack application all that allows users to sell items through an app. R.B.B is an...</p>
    <div className={styles.creator}>
      <div className={styles.container}>
        <h2>Andrea Cleland</h2>
        <div className={styles.text}>
          <a href="https://www.linkedin.com/in/andrea-cleland/">
            <img
              src={andrea}
              style={{
               
              }}
              />
          </a>
              <p>Andrea Cleland is a budding full-stack software engineer in Portland, Oregon. In addition to programming, she enjoys video games, audiobooks, hiking, and roller skating.</p>
        </div>
      </div>
      <div className={styles.container}>
        <h2>Cole</h2>
        <div className={styles.text}>
          <a href="https://www.linkedin.com/in/cole-rossman/">
            <img
              src={cole}
              // style={{
              //   objectFit: 'cover',
              //   width: '98%',
              //   height: '50%',
              //   border: 'solid rgb(58, 216, 244)',
              // }}
              />
          </a>
              <p>Cole Rossman is a full-stack software engineer located in Lake Oswego, OR. When not creating full-stack JavaScript applications, you can find Cole hiking in the Columbia Gorge, rock climbing or seeking out new food carts to try.</p>
        </div>
      </div>
      <div className={styles.container}>
        <h2>Marcus</h2>
        <div className={styles.text}>
          <a href="https://www.linkedin.com/in/marcus-ghiringhelli/">
            <img
              src={marcus}
              />
          </a>
              <p>Marcus is a full stack software developer from Portland, Oregon who likes making music and trying to keep plants alive.</p>
        </div>
      </div>
      <div className={styles.container}>
        <h2>Yovana</h2>
        <div className={styles.text}>
          <a href="https://www.linkedin.com/in/yovana-pelayo">
            <img
              src={yovana}
              style={{
                // width: '50%',
                // height: '50%',
                // border: 'solid rgb(58, 216, 244)',
              }}
              />
          </a>
              <p>Yovana is a full Stack Software Engineer from Portland, Oregon who enjoys taking on DIY projects and watching stand up comedy!</p>
        </div>
      </div>
      <footer className={styles}>
        <div></div>
      </footer>
    </div>
    </div>
  );
}