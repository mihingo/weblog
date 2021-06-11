import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        src="https://www.worldatlas.com/r/w1200/upload/c5/17/2a/shutterstock-188637683.jpg"
        alt="Header"
        className="headerImg"
      />
    </div>
  );
}

export default Header;
