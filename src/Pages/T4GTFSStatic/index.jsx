import React from "react";
import "./T4GTFSStatic.css";
import Header from "../../Components/Header";

import Footer from "../../Components/Footer";
import Accordion from "../../Components/Accordion";
import T1Banner from "../../Components/T1banner";
import TransitInformation from "../../Components/TransitInformation";
import TransitCards from "../../Components/TransitCards";

const T4GTFSStatic = () => {
    return (
        <>
            <Header />
            <T1Banner
                title="T3 SCHEDULES TRANSIT SERVICE"
                subtitle="Create Dynamic Schedules"
                subtitle2="and adjust frequency needs"
                subtitle3="to collect data"
                btnlink="#"
                btntext="request demo"
                imgsrc="/images/images-entour/Frequency+and+vehicles+1.0.png"

            />
            {/* information section */}
            <TransitInformation
                title="T3 Schedules transit service"
                imgsrc="/images/images-entour/T4_GTFS+static.png"
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

            <>
                {/* image with text */}
                <div className="images-text p-5 mt-5">
                    <div className="row p-4">
                        <div className="col-lg-6 text-light fs-6">
                            <h3>T1 Enroute</h3>
                            <p>
                                With our T1 Enroute transit service you easily start the process of
                                digitalizing your public transport system. This service is the first
                                step in creating GTFS Static feeds. It will help you to understand the
                                static topology data of your transit network, and serve as the
                                foundation for collecting data from vehicles operating on routes.
                            </p>
                            <a href="t1-enroute.html" className="text-light">
                                Learn more
                            </a>
                        </div>
                        <div className="col-lg-6 side-image">
                            <img src="/images/images-entour/new_mockup.png" alt="" />
                        </div>
                    </div>
                    <div className="row p-4">
                        <div className="col-lg-6 image-2">
                            <img
                                src="/images/images-entour/Passenger+capacity.png"
                                className=""
                                style={{ height: 250, width: "auto" }}
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6 text-light fs-6">
                            <h3>T2 Performances</h3>
                            <p>
                                Our T2 Performance transit service gives you essential insights into
                                the topology of your transit network, fleet performance, and service
                                efficiency. This allows you to make informed and impactful governance
                                decisions, driving improvements in the public transportation system,
                                including optimizing resources and enhancing service quality.
                            </p>
                            <a href="t2.html" className="text-light">
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div className="row p-4">
                        <div className="col-lg-6 text-light fs-6">
                            <h3>T3 Schedules</h3>
                            <p>
                                With our T3 Schedules transit service, you can create Dynamic GTFS
                                Schedules (DGS) or adjust frequency time bands and vehicle counts to
                                customize your schedules. Our platform and algorithms use historical
                                data and service performance to generate an initial schedule, which
                                you can choose to accept or fine-tune to suit your specific
                                requirements.
                            </p>
                            <a href="t3.html" className="text-light">
                                Learn more
                            </a>
                        </div>
                        <div className="col-lg-6 side-image">
                            <img src="/images/images-entour/Frequency+and+vehicles+1.0.png" alt="" />
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
                            <Accordion />
                        </div>
                    </div>
                </div>

                <div className="two-images-section overflow-hidden">
                    <div className="row p-5 g-3">
                        <div className="col-lg-6 t3-schedule text-light d-flex justify-content-center align-items-center flex-column">
                            <h4>Learn more about GTFS data</h4>
                            <h1>T5 GTFS Static</h1>
                            <a href="t4.html">
                                <button className="btn-two-images-section">Learn more</button>
                            </a>
                            {/* <img src="/images/images-entour/performance.png" alt=""> */}
                        </div>
                        <div className="col-lg-6 text-light t4-gtfs-static d-flex justify-content-center align-items-center flex-column">
                            <h4>More riders. More revenue.</h4>
                            <h1>T6 GTFS Realtime</h1>
                            <a href="t5.html">
                                <button className="btn-two-images-section">Learn more</button>
                            </a>
                        </div>
                    </div>
                </div>
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

            </>
            <Footer />
        </>
    );

};
export default T4GTFSStatic;