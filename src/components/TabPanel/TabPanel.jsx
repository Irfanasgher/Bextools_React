import React from "react";
import { Tabs } from "antd";
import Table from "./../Table";

import "./TabPanel.scss";
const { TabPane } = Tabs;
const TabPanel = ({ ...rest }) => {
  return (
    <div id="tab-panel" className="px-2">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Trade History" key="1">
          <Table {...rest} />
        </TabPane>
      </Tabs>
    </div>
  );
};
export default TabPanel;

/*<TabPane tab='Limit Order' key='2'>
<Table trades={trades} />
</TabPane>
<TabPane tab='Stop-Loss' key='3'>
    <Table trades={trades} />
</TabPane> */
