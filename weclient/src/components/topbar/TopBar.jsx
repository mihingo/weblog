import "./TopBar.css";
import { Link } from "react-router-dom";

function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-linkedin"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              {user && "Logout"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://lh3.googleusercontent.com/r0RFQ8S9klIeUAZ5KwNctR8b_KHC61Wu-8QOJgA2v-f9uDaQdiWqNl0_KzCuiM6-e1-BEVY_QCqC6MXt6PsFVxsPhMxWonW_LkY5idfNut0GhASkW_yJymGcV2iXynQZnYCF2xWGtxzUgpA5sC6GWlLeTajThftlJGM0qG-Kqv4m7PCenZfJOuXLwTBJTPYDSV6mYRbCYrIpKtNQqe1Z54D_ais9siphr43iUr50Wg6HqswRIbqXrw3NStLx9BT1lGW6SCT_PuDOjXc4vFOAIOhK-CEhqAcoJwIxJvhLEV3TpWypkUrFYKUwkTL4HUUu7tJd5bh-91hHsrfQsLrjPdsvQmvNvvdIpiHlHZFkIKeXbGO_-zyZJ5hqqe5jFebdNGvngWu3nu6VIaUnGxq4xTMFfaNvfD803x7vSjdYNYrr6-T6uH1tl_-IH7Wx8uGg3bumAa9qcfTqyxs1MSEd4E2c8xUG1nzLG09Mp-3t48Gr2r6kDUEeSXE693_RcjlliC5esno6KegJMdp7SK69ThG0hER-GIgjWvTW7z3C5zlAZhSnscqUpSzEtEJcD3UILa4B93CKBwu0JgfHxlnCmdvRChIW5250FilAgG-Qtb-Xbo8G8WjpTFQKUJ58Szi_wyj1i2Zloc5qBBVOCxk9TqeMkXF3aedRCQSJ0I4f_bZL-WISEs93fcwte0JUjjjTyAsXtoQNbJxohCS8ahsBHvnjhA=w915-h1220-no?authuser=0"
            alt="Profile"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
