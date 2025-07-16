import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
         {" Designed by a student, powered by hope, and aimed at a future in tech that’s still being written — one line of code at a time."}
       
        </p>
      </div>
    </Fade>
  );
}
