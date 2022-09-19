import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";

import Navigation from "../../components/Navbar";

import "./LandingPage.scss";

import Facebook from "./../../assets/images/facebook1.svg";
import LinkedIn from "./../../assets/images/linkedin1.svg";
import Twitter from "./../../assets/images/twitter1.svg";
import Instagram from "./../../assets/images/instagram1.svg";
import BTicon from "./../../assets/images/blackLogo.svg";
import Arrow from "./../../assets/images/path94.png";

const LandingPage = () => {
  return (
    <div id="landing">
      <div className="container">
        <Navigation />
        <div className="smallTab">
          <Button type="primary" className="tabButton">
            <div className="leftPane d-flex align-items-center justify-content-center">
              1 BT = $15040
            </div>
            <div className="rightPane">
              view more assets
              <span>
                <img src={Arrow} alt="path" className="ml-2" />
              </span>
            </div>
          </Button>
        </div>
        <Row>
          <Col xl={14} lg={14} md={24} sm={24} xs={24}>
            <h1 className="title">Everyone can be a chef with BexTools</h1>
            <p className="subtitle">
              Lorem ipsum is simply dummy text Lorem ipsum is simply dummy text
              Lorem ipsum is simply dummy text Lorem ipsum is simply dummy text
            </p>
            <Row>
              <Col span={24} className="d-flex mt-4 iconsColumn">
                <Link to="/bextools-board">
                  <Button
                    type="primary"
                    className="customButtons yellowColor mr-3"
                  >
                    <img src={BTicon} alt="icon" />
                    Enter App
                  </Button>
                </Link>
                <Button
                  type="primary"
                  className="customButtons whiteColor mr-3"
                >
                  Learn More
                </Button>
                <div>
                  <div className="socialIcons d-flex pt-1">
                    <div className="icon p-1">
                      <img src={Facebook} alt="fb" />
                    </div>
                    <div className="icon p-1">
                      <img src={LinkedIn} alt="linkedin" />
                    </div>
                    <div className="icon p-1">
                      <img src={Twitter} alt="twitter" />
                    </div>
                    <div className="icon p-1">
                      <img src={Instagram} alt="instagram" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={10} lg={10} md={24} sm={24} xs={24}></Col>
        </Row>
        <div className="footerBottom">
          <ul className="footer d-flex justify-content-center">
            <li>
              <span>BitTrade:</span> $15.40
            </li>
            <li>
              {" "}
              <span>Liquidity:</span> 3.29b
            </li>
            <li>
              {" "}
              <span>Total Volume:</span> 32.29b
            </li>
            <li>
              {" "}
              <span>Total Fees:</span> 98,613,646
            </li>
            <li>
              {" "}
              <span>Pairs:</span> 757
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
