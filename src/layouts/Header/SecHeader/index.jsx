import { NavLink } from "react-router-dom";
import Logo from "../../../assets/img/header.png";
const SecHeader = ({ dropdownItem, MenuInfo }) => {
  return (
    <div>
      <div className="header-strip">
        <ul className="social-ul">
          <a href="">
            <li>
              <i class="fab fa-instagram"></i>
              <span>Instagram</span>
            </li>
          </a>
          <a href="https://www.tiktok.com/@immersion.miners" target="_blank">
            <li>
              <i class="fab fa-tiktok"></i>
              <span>TikTok</span>
            </li>
          </a>
          <a href="https://t.co/dgjCcyrc65" target="_blank">
            <li>
              <i class="fab fa-discord"></i>
              <span>Discord</span>
            </li>
          </a>
          <a href="https://twitter.com/immersionminers" target="_blank">
            <li>
              <i class="fab fa-twitter"></i>
              <span>Twitter</span>
            </li>
          </a>
        </ul>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-white fixed-top"
        id="banner"
      >
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand" href="#">
            <span>
              <img draggable="false" width="100" src={Logo} alt="logo" />
            </span>
          </a>
          {/* Toggler/collapsibe Button */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar links */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {MenuInfo &&
                MenuInfo.map((item, key) => (
                  <li className="nav-item" key={key}>
                    <a className="nav-link" href={item.path}>
                      {item.nameLink}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SecHeader;
