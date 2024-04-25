import React from "react";
import "./T2Performance.css"
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Accordion from "../../Components/Accordion";


const T2Performance = () => {

    return (
        <>
            <Header />
            <main>
                <div className="t2-banner overflow-hidden">
                    <div className="row">
                        <div className="col-lg-6 text-light banner-section">
                            <h6>T2 PERFORMANCE TRANSIT SERVICE</h6>
                            <h2>Analyze transit data from</h2>
                            <h2>vehicle performance on routes</h2>
                            <a href="demo.html">
                                <button>Requset a demo</button>
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <div className="map-circle">
                                <img src="images/images.entour/insights.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* information section */}
                <div className="t2-information-section">
                    <div className="container mt-lg-5">
                        <div className="img-heading d-flex justify-content-center align-items-center">
                            <img src="images/images.entour/T2_performance.png" alt="" />
                            <h1 className="ms-3">T1 Enroute transit service</h1>
                        </div>
                        <p className="text-center fs-5 p-5">
                            With our T1 Enroute transit service you easily start the digitalization
                            process of your public transport system. This service is the first step
                            in creating GTFS Static feeds. It will help you to understand the static
                            topology data of your transit network, and serve as the foundation for
                            collecting data from vehicles operating on routes. This data, when
                            combined with our T2 Performance transit service, empowers you to gain
                            insights into the performance of vehicles assigned to specific routes,
                            as well as visualize time bands and start creating schedules.
                        </p>
                    </div>
                </div>
                {/* cards-t2 */}
                <div className="cards-t2">
                    <div className="container">
                        <div className="row d-flex justify-content-evenly align-items-center">
                            <div
                                className="col-lg-3 text-center background-color-card"
                                style={{ width: "23%" }}
                            >
                                <h4>Service frequencies</h4>
                                <p>
                                    Display and analyze typical departure frequencies and time bands by
                                    line direction and day-type based on historical service performance.
                                    Best performance
                                </p>
                            </div>
                            <div
                                className="col-lg-3 text-center background-color-card"
                                style={{ width: "23%" }}
                            >
                                <h4>Resource allocation</h4>
                                <p>
                                    Optimize resource allocation by comparing registered vehicles to
                                    their actual usage, monitoring trips and mileage. This ensures that
                                    fleet size and performance align with operational needs.
                                </p>
                            </div>
                            <div
                                className="col-lg-3 text-center background-color-card"
                                style={{ width: "23%" }}
                            >
                                <h4>Accessibility improvement</h4>
                                <p>
                                    Identifying and understanding current network topology and service
                                    coverage are essential for planning future network elements and
                                    services.
                                </p>
                            </div>
                            <div
                                className="col-lg-3 text-center background-color-card"
                                style={{ width: "23%" }}
                            >
                                <h4>Network optimization</h4>
                                <p>
                                    Understand the network’s lines, routes, distances, and stops to aid
                                    route optimization, reduces redundancy, and efficiently allocate
                                    operator fleets and resources.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* image with text */}
                <div className="images-text p-2 mt-5">
                    <div className="row p-4">
                        <div className="col-lg-6 side-image">
                            <img src="images/images.entour/Passenger+capacity.png" alt="" />
                        </div>
                        <div className="col-lg-6 text-light fs-6">
                            <h1>Cost-efficiency</h1>
                            <p>
                                Analyzing vehicle trips, in-service and non-revenue mileage helps to
                                identify opportunities for improved fleet utilization. This will help
                                you reduce operational costs or increase service availability.
                            </p>
                            <h1>Service efficiency</h1>
                            <p>
                                Insights into departure timeliness and distribution help to meet
                                service commitments. Analysis of vehicle trip distribution enhances
                                scheduling, reducing wait times for a better passenger experience.
                            </p>
                        </div>
                    </div>
                    <div className="row p-4">
                        <div className="col-lg-6 text-light fs-6">
                            <h1>Resource planning</h1>
                            <p>
                                Understanding current system performance aids in effectively planning
                                for future growth. This ensures strategic resource deployment to
                                accommodate rising or unmet demand.
                            </p>
                            <h1>Compliance and accountability</h1>
                            <p>
                                Fundamental data serves as a basis for accountability, enabling
                                monitoring of compliance with service standards, contracts, and
                                regulations.
                            </p>
                        </div>
                        <div className="col-lg-6 image-2" style={{ height: 350, width: "auto" }}>
                            <img
                                src="images/images.entour/lots-of-blue-buses (1).png"
                                className=""
                                style={{ height: 300, width: "auto" }}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                {/* transit services packages */}
                <div className="transit-services">
                    <div className="container text-center mt-5">
                        <h1>Transit service packages</h1>
                        <p>
                            Our transit service packages are designed to facilitate high utilization
                            of your data, catering to your needs.
                        </p>
                        < Accordion />
                    </div>
                </div>
                {/* two images */}
                <div className="two-images-section overflow-hidden">
                    <div className="row p-5 g-3">
                        <div className="col-lg-6 t3-schedule text-light d-flex justify-content-center align-items-center flex-column">
                            <h4>Create GTFS schedules</h4>
                            <h1>T3 Schedules</h1>
                            <a href="t3.html">
                                <button className="btn-two-images-section">Learn more</button>
                            </a>
                            {/* <img src="images/images.entour/performance.png" alt=""> */}
                        </div>
                        <div className="col-lg-6 text-light t4-gtfs-static d-flex justify-content-center align-items-center flex-column">
                            <h4>Learn more about GTFS data</h4>
                            <h1>T4 GTFS Static</h1>
                            <a href="t4.html">
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
                                <a href="javascript:void(0)">
                                    <li>
                                        <i className="fa-brands fa-facebook" />
                                    </li>
                                </a>
                                <a href="javascript:void(0)">
                                    <li>
                                        <i className="fa-brands fa-instagram" />
                                    </li>
                                </a>
                                <a href="javascript:void(0)">
                                    <li>
                                        <i className="fa-brands fa-twitter" />
                                    </li>
                                </a>
                                <a href="javascript:void(0)">
                                    <li>
                                        <i className="fa-brands fa-linkedin" />
                                    </li>
                                </a>
                                <a href="javascript:void(0)">
                                    <li>
                                        <i className="fa-brands fa-youtube" />
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

        </>
    )
}
export default T2Performance;