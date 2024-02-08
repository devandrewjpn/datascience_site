import Link from "next/link";
import { Fragment, useEffect } from "react";
import useWindowSize from "../useWindowSize";
import { stickyNav } from "../utils";

function Header({ singleMenus }) {

  useEffect(() => {
    stickyNav({ singleMenus });
  }, []);

const { width } = useWindowSize();
useEffect(() => {
  const headers = document.querySelectorAll(".header-navigation");
  headers.forEach((header) => {
    if (width <= 1199) {
      header.classList.add("breakpoint-on");
    } else {
      header.classList.remove("breakpoint-on");
    }
    // toggle
    const toggleBtn = header.getElementsByClassName("navbar-toggler")[0],
      overlay = header.getElementsByClassName("nav-overlay")[0],
      menu = header.getElementsByClassName("nav-menu")[0];
    toggleBtn.addEventListener("click", () => {
      overlay.classList.add("active");
      menu.classList.add("menu-on");
    });
    overlay.addEventListener("click", () => {
      overlay.classList.remove("active");
      menu.classList.remove("menu-on");
    });
  });
}, [width]);

return (
  <header className="header-area transparent-header">
    {/*=== Header Navigation ===*/}
    <div className="header-navigation navigation-two navigation-white">
      <div className="nav-overlay" />
      <div className="container">
        {/*=== Primary Menu ===*/}
        <div className="primary-menu">
          {/*=== Site Branding ===*/}
          <div className="site-branding">
            <Link legacyBehavior href="/">
              <a className="brand-logo">
                <img src="/ds/assets/images/logo_branca.png" alt="Site Logo" />
              </a>
            </Link>
          </div>
          {/*=== Nav Inner Menu ===*/}
          <div className="nav-inner-menu">
            <div className="nav-menu">
              {/*=== Mobile Logo ===*/}
              <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img src="/ds/assets/images/logo_branca.png" alt="Site Logo" />
                  </a>
                </Link>
              </div>
              <SingleMenu menus={singleMenus} />
              <div className="menu-button pt-30">

                <a href="https://api.whatsapp.com/send?phone=553197862659&text=Quero%20saber%20mais%20sobre%20a%20Data%20Science!" target="_blank" rel="noreferrer" className="main-btn btn-blue">Contate nos</a>

              </div>
            </div>
            {/*=== Nav right item ===*/}
            <div className="nav-right-item d-flex align-items-center">
              <div className="sign-in-button">
                <a href="http://app.brasilatuarialds.com.br/" target="_blank" rel="noreferrer" className="btn-link">Log in</a>
              </div>
              <div className="menu-button">
                <a href="https://api.whatsapp.com/send?phone=553197862659&text=Quero%20saber%20mais%20sobre%20a%20Data%20Science!" target="_blank" rel="noreferrer" className="main-btn btn-blue">Contate nos</a>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

};

const SingleMenu = ({ menus }) => {
  return (
    <Fragment>
      <nav className="main-menu">
        <ul>
          {menus.map((menu, i) => (
            <li className="menu-item" key={i}>
              <a href={`#${menu.href}`} className="page-scroll nav-link">
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Header;