import React from "react";
import { Layout } from "antd";

import SideNav from "./../components/Sidenav";
import Footer from "./../components/Footer";
import "./LayoutWrapper.scss";
import { openStatusSocket } from "./../websocket";
const { Content } = Layout;

const LayoutWrapper = (props) => {
  React.useEffect(() => {
    openStatusSocket();
  }, []);

  return (
    <div id="layoutWrapper">
      <Layout>
        <SideNav />
        <Layout className="site-layout">
          <Content style={{ margin: "30px" }}>{props.children}</Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
};
export default LayoutWrapper;
