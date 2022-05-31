import React from 'react'
import '../pages/Login.css'
function Login() {
//     const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// });
  return (
      <>
    <div>
    <div className="container">
  <div className="forms-container">
    <div className="signin-signup">
      <form action="#" className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" defaultValue="Login" className="btn solid" />
        <p className="social-text">Join Us on different platforms</p>
        <div className="social-media">
          <a href=".com" className="social-icon">
            <i className="fab fa-facebook-f" />
          </a>
          <a href=".com"className="social-icon">
            <i className="fab fa-twitter" />
          </a>
          <a href=".com"className="social-icon">
            <i className="fab fa-google" />
          </a>
          <a href=".com"className="social-icon">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </form>
      <form action="#" className="sign-up-form">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" className="btn" defaultValue="Sign up" />
        <p className="social-text">Join Us on different platforms</p>
        <div className="social-media">
          <a href=".com"className="social-icon">
            <i className="fab fa-facebook-f" />
          </a>
          <a href=".com"className="social-icon">
            <i className="fab fa-twitter" />
          </a>
          <a href=".com"className="social-icon">
            <i className="fab fa-google" />
          </a>
          <a href=".com"className="social-icon">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </form>
    </div>
  </div>
  <div className="panels-container">
    <div className="panel left-panel">
      <div className="content">
        <h3>New here ?</h3>
        <p>
          If you are new to Local Yatri then click on sign up button to become a
          member.
        </p>
        <button className="btn transparent" id="sign-up-btn">
          Sign up
        </button>
      </div>
    </div>
    <div className="panel right-panel">
      <div className="content">
        <h3>One of us ?</h3>
        <p>
          If you are already a member then click on the button below to login.
        </p>
        <button className="btn transparent" id="sign-in-btn">
          Sign in
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
    </>
  )
}
 export default Login;