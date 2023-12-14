import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../apis/user/user";
import { replace } from "formik";

const Header = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/", { replace: true });
  }

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [pathname]);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/blog.jpeg" alt="" className={styles.brandlogo} />
        </div>

        <div className={styles.options}>
          {!token ? (
            <div className={styles.navlinks}>
              <div>
                <NavLink className={styles.navlink} to="login">
                  LogIn
                </NavLink>
              </div>
              <div>
                <NavLink className={styles.navlink} to="signup">
                  SignUp
                </NavLink>
              </div>
            </div>
          ) : (
            <div className={styles.navlinks}>
              <div>
                <NavLink className={styles.navlink} to="/postblog">
                  Post
                </NavLink>
              </div>

              <div>
                <span className={styles.navlink} onClick={handleLogout}>
                  Logout
                </span>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
