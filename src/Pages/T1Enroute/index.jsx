import React from "react";
// import "./t1.js"
import "./t1enroute.css"
import Header from "../../Components/Header";
import Subscribe from "../../Components/Subscribe";
import Footer from "../../Components/Footer";
const T1Enroute = () => {
  return (
    <>
   <Header />
        <T1Banner 
        title="T1 ENROUTE TRANSIT SERVICE"
        subtitle="Digitalize the transit network"
        subtitle2="and connect vehicles"
        subtitle3="to collect data"
        btnlink="#"
        btntext="request demo"
        imgsrc="/images/images-entour/lots-of-blue-buses.png"
        />
        {/* information section */}
      <TransitInformation
      title="T1 Enroute transit service"
      imgsrc="/images/images-entour/t1enroute.png"
      detail=" With our T1 Enroute transit service you easily start the
      digitalization process of your public transport system. This service
      is the first step in creating GTFS Static feeds. It will help you to
      understand the static topology data of your transit network, and
      serve as the foundation for collecting data from vehicles operating
      on routes. This data, when combined with our T2 Performance transit
      service, empowers you to gain insights into the performance of
      vehicles assigned to specific routes, as well as visualize time
      bands and start creating schedules."
      />
        {/* cards section */}
        <TransitCards 
        card1title="Create GTFS static data"
        card1dec=" Create a detailed transit network map in our eQconnect® cloud
        transit dashboard, showing terminals, routes and stops. Add
        schedule information to generate GTFS Static feeds."
        card2title="Import GTFS Static Data"
        card2des="Import existing GTFS Static datasets into our eQconnect®
        dashboard for convenient accessibility. This enables simple
        editing and ongoing data maintenance, guaranteeing up-to-date
        and accurate information."
        card3title="Export GTFS Static Data"
        card3des="  The data generated is structured in GTFS Static format, making
        it available for export to city authorities for governance. It
        can also be integrated into third-party trip planning
        applications like Google Maps."
        />
        
        {/* Connect vehicles section start */}
        <div className="Connect-vehicles p-5 mt-5">
          <div className="row">
            <div className="col-lg-6 text-light p-3">
              <h1>Connect vehicles</h1>
              <p>
                Register vehicles and add relevant vehicle information. Connect
                the GPS tracking devices that are already installed or planned
                for installation in the vehicles. Vehicle location is
                automatically updated and visualized in real-time in the transit
                cloud dashboard.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="images/images-entour/settings-devices.png"
                alt="This is an image"
              />
            </div>
          </div>
        </div>
        <div className="Transit-service-packages overflow-hidden mt-5">
          <div className="row p-5">
            <div className="col-lg-6 image-insight d-flex">
              <img src="images/images-entour/insights.png" alt="" />
            </div>
            <div className="col-lg-5">
              <h1>Transit service packages</h1>
              <p className="mt-5 fs-5">
                For high utilization, check our transit service packages with T1
                Enroute.
              </p>
              <div className="container">
                <ul className="accordion">
                  <li className="accordion__item">
                    <a
                      href="#"
                      className="accordion__link accordion__link_active"
                    >
                      Performance package
                    </a>
                    <ul className="sub-accordion">
                      <li className="sub-accordion__item">
                        In our Performance package, you have access to both T1
                        Enroute and T2 Performance transit services. These
                        services enable the digitalization of your transit
                        network and connect vehicles to collect performance data
                        along routes. You can then visualize and analyze this
                        data, gaining vital insights into your transit network's
                        topology, fleet performance, and service efficiency.
                      </li>
                    </ul>
                  </li>
                  <li className="accordion__item">
                    <a href="#" className="accordion__link">
                      {" "}
                      Schedules package{" "}
                    </a>
                    <ul className="sub-accordion">
                      <li className="sub-accordion__item">
                        Our Schedules package gives you the advantages of not
                        only T1 Enroute and T2 Performance transit services, but
                        also our T3 Schedules transit service. This allows you
                        to create Dynamic GTFS Schedules and adjust frequency
                        time bands and vehicle counts to customize your
                        schedules according to current passenger demand and
                        traffic conditions.
                      </li>
                    </ul>
                  </li>
                  <li className="accordion__item">
                    <a href="#" className="accordion__link">
                      {" "}
                      GTFS Static package{" "}
                    </a>
                    <ul className="sub-accordion">
                      <li className="sub-accordion__item">
                        In our GTFS Static package, you'll discover T1 Enroute,
                        T2 Performance, T3 Schedules, and T4 GTFS Static transit
                        services. This comprehensive package equips you with the
                        necessary tools to effortlessly generate GTFS Static
                        files, laying the groundwork for the creation of GTFS
                        Realtime data.
                      </li>
                    </ul>
                  </li>
                  <li className="accordion__item">
                    <a href="#" className="accordion__link">
                      GTFS Realtime package
                    </a>
                    <ul className="sub-accordion">
                      <li className="sub-accordion__item">
                        Within our GTFS Realtime package, you will find a range
                        of transit services, including T1 Enroute, T2
                        Performance, T3 Schedules, T4 GTFS Static, and T5 GTFS
                        Realtime. This comprehensive package provides you with
                        all the essential tools required to easily create and
                        distribute GTFS Realtime feeds.
                      </li>
                    </ul>
                  </li>
                  <li className="accordion__item">
                    <a href="#" className="accordion__link">
                      {" "}
                      Operations package{" "}
                    </a>
                    <ul className="sub-accordion">
                      <li className="sub-accordion__item">
                        Our Operations package offers the full spectrum of our
                        transit services, encompassing T1 Enroute, T2
                        Performance, T3 Schedules, T4 GTFS Static, T5 GTFS
                        Realtime, and T6 Operations. These services are
                        essential for effective operations control, enabling you
                        to manage your entire vehicle fleet successfully.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* two-images-section start */}
        <TransitTwoImages
        subtitle1="Analyze transit data"
        subtitle2="Create GTFS schedules"
        title1="T2 Performance"
        title2="T3 Schedules"
        btn1link="javascript:void(0)"
        btn2link="javascript:void(0)"
        />
        {/* social media icons */}
        <div className="social-icons">
          <div className="container text-center">
            <h3>Stay connected with Bus Mate</h3>
            <p>Follow us in all our channels</p>
            <div className="icons mt-4">
              <ul className="list-unstyled d-flex justify-content-evenly align-items-center fs-2">
                <a href="#">
                  <li>
                    <i className="fa-brands fa-facebook" />
                  </li>
                </a>
                <a href="#">
                  <li>
                    <i className="fa-brands fa-instagram" />
                  </li>
                </a>
                <a href="#">
                  <li>
                    <i className="fa-brands fa-twitter" />
                  </li>
                </a>
                <a href="#">
                  <li>
                    <i className="fa-brands fa-linkedin" />
                  </li>
                </a>
                <a href="#">
                  <li>
                    <i className="fa-brands fa-youtube" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
    <Subscribe />
    <Footer />
    </>
  );
};

export default T1Enroute;
