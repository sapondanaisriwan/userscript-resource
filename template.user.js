// ==UserScript==
// @name        Project Name
// @version     1.0.0
// @author      sapondanaisriwan
// @description Your Description
// @match       https://www.youtube.com/*
// @grant       none
// @license     MIT
// @namespace   https://greasyfork.org/en/users/1021085-sapondanaisriwan
// @homepageURL https://github.com/sapondanaisriwan/Project-Name
// @supportURL  https://github.com/sapondanaisriwan/Project-Name/issues
// @icon        https://i.imgur.com/I9uDrsq.png
// ==/UserScript==

/*
If you want to submit a bug or request a feature please report via github issue. Since I receive so many emails, I can't reply to them all.
Contact: sapondanaisriwan@gmail.com
Support me: https://ko-fi.com/sapondanaisriwan 
Support me: https://ko-fi.com/sapondanaisriwan
Support me: https://ko-fi.com/sapondanaisriwan
Support me: https://ko-fi.com/sapondanaisriwan
Support me: https://ko-fi.com/sapondanaisriwan
*/

"use strict";

const config = { childList: true, subtree: true };

const selectors = {
  yt: "",
};

const styles = {
  log: "color: #fff; font-size: 16px;",
  styleEle: ``,
};

const cLog = (msg) => console.log(`%c${msg}`, styles.log);

const select = (selector) => document.querySelector(selector);

const selectAll = (selector) => document.querySelectorAll(selector);

const addStyles = (css) => {
  const style = document.createElement("style");
  style.type = "text/css";
  style.textContent = css;
  document.documentElement.appendChild(style);
};

const main = () => {
  
}

const run = () => {
  addStyles(styles.styleEle);
  const observer = new MutationObserver(main);
  observer.observe(document.body, config);
};

run();
