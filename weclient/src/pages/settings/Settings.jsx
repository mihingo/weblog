import "./Settings.css";
import SideBar from "../../components/sidebar/SideBar";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePic">
            <img
              src="https://lh3.googleusercontent.com/r0RFQ8S9klIeUAZ5KwNctR8b_KHC61Wu-8QOJgA2v-f9uDaQdiWqNl0_KzCuiM6-e1-BEVY_QCqC6MXt6PsFVxsPhMxWonW_LkY5idfNut0GhASkW_yJymGcV2iXynQZnYCF2xWGtxzUgpA5sC6GWlLeTajThftlJGM0qG-Kqv4m7PCenZfJOuXLwTBJTPYDSV6mYRbCYrIpKtNQqe1Z54D_ais9siphr43iUr50Wg6HqswRIbqXrw3NStLx9BT1lGW6SCT_PuDOjXc4vFOAIOhK-CEhqAcoJwIxJvhLEV3TpWypkUrFYKUwkTL4HUUu7tJd5bh-91hHsrfQsLrjPdsvQmvNvvdIpiHlHZFkIKeXbGO_-zyZJ5hqqe5jFebdNGvngWu3nu6VIaUnGxq4xTMFfaNvfD803x7vSjdYNYrr6-T6uH1tl_-IH7Wx8uGg3bumAa9qcfTqyxs1MSEd4E2c8xUG1nzLG09Mp-3t48Gr2r6kDUEeSXE693_RcjlliC5esno6KegJMdp7SK69ThG0hER-GIgjWvTW7z3C5zlAZhSnscqUpSzEtEJcD3UILa4B93CKBwu0JgfHxlnCmdvRChIW5250FilAgG-Qtb-Xbo8G8WjpTFQKUJ58Szi_wyj1i2Zloc5qBBVOCxk9TqeMkXF3aedRCQSJ0I4f_bZL-WISEs93fcwte0JUjjjTyAsXtoQNbJxohCS8ahsBHvnjhA=w915-h1220-no?authuser=0"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsProfilePicIcon fas fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Mihingo" name="username" />
          <label>Email</label>
          <input type="email" placeholder="test@mihingo.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}

export default Settings;
