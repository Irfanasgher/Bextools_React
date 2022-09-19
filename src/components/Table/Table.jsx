import React, { useState } from "react";
import { Table, message, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import dayjs from "dayjs";
import Fake from "./DataList";
import "./Table.scss";

const dataList = Fake;
const TransactionTable = ({
  dataSource,
  loading,
  hasMore,
  handleInfiniteOnLoad,
  trades,
}) => {
  console.log("🚀 ~ file: Table.jsx ~ line 16 ~ trades", trades);
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date - b.date,
      align: "center",
      render: (text, record) => (
        <>{dayjs(record.Time).format("DD MMM, ddd-DD/MM/YYYY")}</>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      sorter: (a, b) => a?.type?.length - b?.type?.length,
      sortDirections: ["descend", "ascend"],
      render: (text, record) => (
        // eslint-disable-next-line
        <a style={{ color: record.Purchase ? "#0BB783" : "#F64E60" }}>
          {record.Purchase ? "buy" : "sell"}
        </a>
      ),
      align: "center",
    },
    {
      title: "Price USD",
      dataIndex: "PricePerTokenUSD",
      sorter: (a, b) => a.priceUSD - b.priceUSD,
      align: "center",
      //   render: (text, record) => <>{record.PricePerTokenUSD}</>,
    },
    {
      title: "Price ETH",
      dataIndex: "PricePerToken",
      sorter: (a, b) => a.priceETH - b.priceETH,
      align: "center",
      //   render: (text, record) => <>{record.PricePerToken}</>,
    },
    {
      title: "Amount CP3R",
      dataIndex: "amountCP3R",
      sorter: (a, b) => a.amountCP3R - b.amountCP3R,
      align: "center",
    },
    {
      title: "Total ETH",
      dataIndex: "totalETH",
      sorter: (a, b) => a.totalETH - b.totalETH,
      align: "center",
    },
    {
      title: "Marker",
      dataIndex: "Maker",
      // eslint-disable-next-line
      render: (text) => <a style={{ color: "#00B8D8" }}>{text}</a>,
      align: "center",
    },
    {
      title: "Others",
      dataIndex: "others",
      render: (text, record) => (
        <div
          style={{
            height: "20px",
            width: "20px",
            marginLeft: "calc(50% - 10px)",
            borderRadius: "50%",
            backgroundColor: record.Purchase ? "#FFF" : "#FFA500",
          }}
        />
      ),
      align: "center",
    },
  ];

  const handleLoad = () => {
    handleInfiniteOnLoad();
  };

  return (
    <div id="table">
      <div
        className="infinite-container"
        style={{ height: "700px", overflow: "auto" }}
      >
        <InfiniteScroll
          initialLoad={false}
          loadMore={handleLoad}
          hasMore={!loading && hasMore}
          threshold={20}
          useWindow={false}
        >
          <Table
            dataSource={trades}
            columns={columns}
            pagination={false}
            size="small"
          />
          {loading && hasMore && (
            <div
              className="spinner"
              style={{
                bottom: "40px",
                position: "absolute",
                textAlign: "center",
                width: "100%",
              }}
            >
              <Spin />
            </div>
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default TransactionTable;
