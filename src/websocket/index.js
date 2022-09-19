import { w3cwebsocket as W3CWebSocket } from "websocket";
import * as _ from "lodash";

import { WS_URL } from "../constants/config";

var client;

export const sendCredientials = () => {
  if (client.readyState === client.OPEN) {
    // client.send(
    //   JSON.stringify({
    //     action: "delivery-order-status",
    //     tenant_id: tenantId,
    //   })
    // );
  }
};

// client.onopen = function () {
//   console.log("Here's some text that the server is urgently awaiting!");
// };

export const getWS = () => client;

export const openStatusSocket = (sendMessage) => {
  if (_.isNil(client)) {
    // client = new W3CWebSocket(WS_URL);
    client = new WebSocket(WS_URL);
  }

  client.onopen = function () {
    sendMessage(client);
    console.log("WebSocket Client Connected");
  };

  client.onclose = function () {
    console.log("WebSocket Client Reconnecting...");
    // client = new W3CWebSocket(WS_URL);
    openStatusSocket(sendMessage);
    console.log("WebSocket Client Sending Credentials...");
    // sendMessage(client);
    console.log("WebSocket Client Reconnected");
  };
};

// export const receiveStatus = () => {
//   client?.onmessage = ({ data }) => {
//     console.log(data, "outside");
//     return data;
//   };
// };
