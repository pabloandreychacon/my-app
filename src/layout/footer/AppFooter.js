import React from "react";

function AppHeader() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Andrey</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed using{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            ReactJs
          </a>
        </div>
      </div>
    </footer>
  );
}

export default AppHeader;
