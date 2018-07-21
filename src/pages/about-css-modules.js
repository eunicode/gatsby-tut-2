import React from "react";
import styles from "./about-css-modules.module.css";
import Container from "../components/container";

console.log(styles);

// The console.log(styles) code logs the resulting import so we can see what the 
// processed file looks like.

// {
//     avatar: "src-pages----about-css-modules-module---avatar---2lRF7"
//     description: "src-pages----about-css-modules-module---description---ev5yS"
//     excerpt: "src-pages----about-css-modules-module---excerpt---2Itwq"
//     user: "src-pages----about-css-modules-module---user---2CXbd"
//     username: "src-pages----about-css-modules-module---username---2EBkm"
//     __proto__: Object
// }

// Each class is now a key in the imported object pointing to a long string 
// e.g. `description` points to `src-pages----about-css-modules-module---description---ev5yS`
// These are the class names CSS Modules generates.

const User = props =>
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>
        {props.username}
      </h2>
      <p className={styles.excerpt}>
        {props.excerpt}
      </p>
    </div>
  </div>

export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>

    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />

    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
);