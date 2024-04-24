import React from "react";

const Footer = () => {
  return (
    <>
      <div className="site-footer">
        <div className="inner first">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="widget">
                  <h3 className="heading">
                    <strong>About Tour</strong>
                  </h3>
                  <p className="text-dark">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <div className="widget">
                  <ul className="list-unstyled social">
                    <li>
                      <a href="#">
                        <span className="icon-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-apple" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-google" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 pl-lg-5">
                <div className="widget">
                  <h3 className="heading">
                    <strong>Pages</strong>
                  </h3>
                  <ul className="links list-unstyled">
                    <li>
                      <a href="#">GTFS</a>
                    </li>
                    <li>
                      <a href="#">Resources</a>
                    </li>
                    <li>
                      <a href="#">Partner</a>
                    </li>
                    <li>
                      <a href="#">Login</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="widget">
                  <h3 className="heading">
                    <strong> Transit Services </strong>
                  </h3>
                  <ul className="links list-unstyled">
                    <li>
                      <a href="t1-enroute.html"> T1 Enroute </a>
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
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="widget">
                  <h3 className="heading">
                    <strong>Contact</strong>
                  </h3>
                  <ul className="list-unstyled quick-info links">
                    <li className="email">
                      <a href="#">mail@example.com</a>
                    </li>
                    <li className="phone">
                      <a href="#">+1 222 212 3819</a>
                    </li>
                    <li className="address">
                      <a href="#">43 Raymouth Rd. Baltemoer, Australia 3910</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inner dark copy-right-color">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-8 mb-3 mb-md-0 mx-auto">
                <p className="text-dark">
                  Copyright © . All Rights Reserved. —
                  {/* License information: https://untree.co/license/ */}
                  <a href="index.html" target="_blank">
                    Bus Mate
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
