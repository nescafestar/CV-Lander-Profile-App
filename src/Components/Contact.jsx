import React from "react";
import "../styles.css";

export default function Contact() {
  return (
    <div>
      <SocialLinks />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content">
      Connect on:
      <ul>
        <li>
          <p>Linkedin @</p>
          <a href="http://www.Linkedin.com/in/waleed-javed">Waleed-Javed</a>
        </li>
        <li>
          <p>Instagram @</p>
          <a href="https://www.instagram.com/pistalavista/">Waleed-Javed</a>
        </li>
      </ul>
    </div>
  );
}
