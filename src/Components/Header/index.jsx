import React from "react";

const Header = () => {
  return (
    <>
      <>
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <span className="icofont-close js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>
        <nav className="site-nav">
          <div className="container">
            <div className="site-navigation">
              <a href="index.html" className="logo m-0">
                <img src="/images/logo white.png" width={200} alt="" />
                <span className="text-primary" />
              </a>
              <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
                <li className="active">
                  <a href="index.html">GTFS</a>
                </li>
                <li>
                  <a href="services.html">Resources</a>
                </li>
                <li>
                  <a href="services.html">Pricing</a>
                </li>
                {/* <li><a href="about.html">About</a></li> */}
                <li>
                  <a href="#">Partners</a>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Transit Services <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    {/* Dropdown menu items */}
                    <li>
                      <a href="/t1enroute"> T1 Enroute </a>
                    </li>
                    <li>
                      <a href="t2.html">T2 Performance </a>
                    </li>
                    <li>
                      <a href="t3.html">T3 Schedules </a>
                    </li>
                    <li>
                      <a href="t4.html">T4 GTFS Static </a>
                    </li>
                    <li>
                      <a href="t5.html">T5 GTFS Realtime </a>
                    </li>
                    <li>
                      <a href="t6.html">T6 Operations </a>
                    </li>
                    <li>
                      <a href="t7.html">T7 Insights </a>
                    </li>
                    <li>
                      <a href="t8.html">T8 Governance </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Company <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    {/* Dropdown menu items */}
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </li>
                &nbsp; &nbsp;
                <li>
                  <a href="Sign-up.html">Login</a>
                </li>
              </ul>
              <a
                href="#"
                className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                data-toggle="collapse"
                data-target="#main-navbar"
              >
                <span />
              </a>
            </div>
          </div>
        </nav>
      </>
    </>
  );
};

export default Header;
