const addStyles = (css) => {
  const styleEle = document.createElement("style");
  styleEle.type = "text/css";
  styleEle.textContent = css;
  document.documentElement.appendChild(styleEle);
};