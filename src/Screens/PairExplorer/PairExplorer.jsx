import React, { useEffect, useState } from "react";
import { Row, Col, Input, Progress, Button, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { logos } from "../../mockData";
import {
  PAIR_EXPLORER_PAIR,
  PAIR_EXPLORER_TRADES,
} from "./../../modules/pairExplorer/actions";
import { pairExplorerPageWS } from "../../constants";

import { getWS, openStatusSocket } from "../../websocket";
import Image from "react-bootstrap/Image";
import Chart from "../../components/chart/LightWeightChart";
import TabPanel from "./../../components/TabPanel";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import "./PairExplorer.scss";

const Explorer = ({ pair, trades }) => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();
  const client = getWS();

  useEffect(() => {
    client ? sendMessage(client) : openStatusSocket(sendMessage);
  }, []);

  useEffect(() => {
    client && updateClient(client);
  });
  const updateClient = (client) => {
    if (client?.readyState === client?.OPEN) {
      client.onmessage = function (e) {
        if (typeof e.data === "string") {
          const data = JSON.parse(e.data);
          if (data.hasOwnProperty("pair")) {
            dispatch({
              type: PAIR_EXPLORER_PAIR,
              payload: { pair: data?.pair },
            });
          } else if (data.hasOwnProperty("trades")) {
            dispatch({
              type: PAIR_EXPLORER_TRADES,
              payload: { trades: data?.trades[pairExplorerPageWS.PairAddress] },
            });
          }
        }
      };
    }
  };
  const sendMessage = (client) => {
    if (client?.readyState === client?.OPEN) {
      client?.send(
        JSON.stringify({
          type: "SubscribeToPage",
          message: {
            page: "pair-explorer",
            address: "0x1B96B92314C44b159149f7E0303511fB2Fc4774f",
          },
        })
      );
    }
  };

  const handleInfiniteOnLoad = () => {
    setLoading(true);
    // if (dataSource.length > 100) {
    //   message.warning("End of transactions");
    //   setLoading(false);
    //   setHasMore(false);
    //   return;
    // }

    //api call
    const latest = [];
    const newData = trades.concat(latest);

    setTimeout(() => {
      //   setDataSource(newData);
      setLoading(false);
    }, 1000);
  };
  return (
    <div id="explorer">
      <Navbar />
      <div className="adds d-flex align-items-center justify-content-center">
        <h1 className="swap-tools">
          Contact info@bextools.io for advertising services.
        </h1>
      </div>
      <div className="trend-bar button-container d-flex align-items-center">
        <div className="d-flex align-items-center ml-4 mr-3">
          <h1 className="trending mr-2">TRENDING</h1>
          <Image src="/images/fire.png" alt="logo" height="20px" />
        </div>
        <div className="line d-md-block d-none  " />
        <div id="inner3" style={{ width: "90%", marginTop: "8px" }}>
          <marquee id="trendMarquee" behavior="scroll" direction="left">
            <ul className="d-flex align-items-center trenders">
              <li style={{ width: "80px" }} className="yellow">
                #1 FCL
              </li>
              <li style={{ width: "100px" }}> #2 SUPER</li>
              <li style={{ width: "80px" }}>#3 POL</li>
              <li style={{ width: "100px" }}> #4 LPOOL</li>
              <li style={{ width: "90px" }}> #5 MOD</li>
              <li style={{ width: "76px" }}>#6 FCL</li>
              <li style={{ width: "100px" }}>#7 SUPER</li>
              <li style={{ width: "80px" }}>#8 POL</li>
              <li style={{ width: "100px" }}> #9 LPOOL</li>
              <li style={{ width: "100px" }}> #10 MOD</li>
            </ul>
          </marquee>
        </div>
      </div>
      <div className="px-md-4 p-2">
        <Row
          gutter={30}
          style={{ height: "150px" }}
          className="d-md-flex align-items-center "
        >
          <Col lg={14} md={24} sm={24} xs={24}>
            <div className="weth-container d-flex align-items-center">
              <Image
                src="/images/compounder_logo.png"
                alt="compounder_logo"
                className="compounder-logo"
              />
              <div>
                <div className="d-flex align-items-flex-start">
                  <span className="erc-wallet mr-2 text-white">
                    <span className="d-inline-block mr-1">BNB</span>
                    <strong className="d-inline-block">/ SHITCOIN</strong>
                  </span>
                </div>
                <div className="d-flex align-items-start">
                  <div
                    class="d-inline-block"
                    style={{ fontSize: "14px", marginTop: "-5px" }}
                  >
                    <small class="p-0 m-0 text-muted">
                      Token contract:{" "}
                      <span class="mr-1">...41d4ce4f89dbbcc8c</span>
                      <a
                        placement="top"
                        class="fa fa-copy text-muted text-decoration-none d-inline-block"
                      ></a>
                    </small>
                    <small class="p-0 ml-2 m-0 text-muted">
                      <span class="mr-1">- Pair</span>
                      <a
                        placement="top"
                        class="fa fa-copy text-muted text-decoration-none d-inline-block"
                      ></a>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={10} md={24} sm={24} xs={24}>
            <div className="input-field d-flex align-items-center justify-content-between">
              <Input
                size="large"
                placeholder="Search pair by symbol/name/pair contract / token contract"
                prefix={<SearchOutlined />}
              />
            </div>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col lg={8} md={24} sm={24} xs={24}>
            <div className="tools p-md-4 px-1 pb-2 d-flex align-items-center justify-content-between">
              {logos.map((item) => (
                <Image src={item} alt="circle" className="mt-2" />
              ))}
            </div>
            <div className="tools mt-3">
              <div className="p-md-4 p-1 py-2">
                <div className="d-flex align-items-end justify-content-between">
                  <h2 className="currency ml-2">
                    $1.00 <br />
                    0.001 BNB
                  </h2>
                  <div className="d-flex align-items-center tradenow">
                    <p className="tradenowtext ml-1">Trade</p>
                    <Image src="/images/bnb.png" alt="circle" />
                  </div>
                </div>
                <hr />
                <div className="mt-3">
                  <div className="d-flex align-items-center justify-content-between px-1">
                    <p className="total-liquidity">Total Liquidity:</p>
                    <p className="total-liquidity1">
                      ${pair.TotalLiquidityUSD}
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between px-1">
                    <p className="total-liquidity">24hr Volume</p>
                    <p className="total-liquidity1">${pair.DailyVolumeUSD}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between px-1">
                    <p className="total-liquidity">Pooled BNB:</p>
                    <p className="total-liquidity1">Not know the values</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between px-1">
                    <p className="total-liquidity">Pooled Shitcoin:</p>
                    <p className="total-liquidity1">Not know the values</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between px-1">
                    <p className="total-liquidity">Transactions:</p>
                    <p className="total-liquidity1">${pair.TotalTX}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between px-1">
                    <p className="total-liquidity">Holders:</p>
                    <p className="total-liquidity1">{pair.Holders}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tools p-md-3 p-1 py-2 mt-3">
              <div className="community-trust d-flex align-items-center justify-content-between">
                <p className="score">BEXT Score</p>
                <p className="total-liquidity1">100</p>
              </div>
              <hr />
              <div className="community-trust d-flex align-items-center justify-content-between">
                <p className="like">Information</p>
                <div style={{ width: "60%" }}>
                  <Progress
                    percent={100}
                    success={{ percent: 100 }}
                    showInfo={false}
                  />
                </div>
              </div>
              <div className="community-trust d-flex align-items-center justify-content-between">
                <p className="like">Transactions</p>
                <div style={{ width: "60%" }}>
                  <Progress
                    percent={100}
                    success={{ percent: 100 }}
                    showInfo={false}
                  />
                </div>
              </div>
              <div className="community-trust d-flex align-items-center justify-content-between">
                <p className="like">Holders</p>
                <div style={{ width: "60%" }}>
                  <Progress
                    percent={100}
                    success={{ percent: 100 }}
                    showInfo={false}
                  />
                </div>
              </div>
              <div className="community-trust d-flex align-items-center justify-content-between">
                <p className="like">Liquidity</p>
                <div style={{ width: "60%" }}>
                  <Progress
                    percent={100}
                    success={{ percent: 100 }}
                    showInfo={false}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg={16}
            md={24}
            sm={24}
            xs={24}
            className="mt-lg-0 mt-4 trading-area"
          >
            <Chart />
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={24} sm={24} xs={24}>
            <div className="tools mt-3 mr-2" style={{ height: "805px" }}>
              <div className="p-md-4 p-1 py-2">
                <h2 className="sponsored">
                  DeFi <span>Sponsored</span>
                </h2>
                <hr />
                <p className="mt-5 touch">
                  No news to display. Want to appear here? Get in touch at{" "}
                  <br className="d-md-block d-none" />
                  info@bextools.io
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={20}
            md={24}
            sm={24}
            xs={24}
            className="mt-lg-0 mt-4 trading-area"
          >
            <div className="trade-data pt-2 mt-3 ml-2">
              <TabPanel
                trades={trades}
                handleInfiniteOnLoad={handleInfiniteOnLoad}
                loading={loading}
                hasMore={hasMore}
              />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Explorer;
