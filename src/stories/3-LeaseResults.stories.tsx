import React from "react";
import LeaseSearchResults from "../components/LeaseSearchResults";

export default {
  title: "Lease Search Results",
  component: LeaseSearchResults,
};

const mockData = [
  {
    address: "411 Washington",
    contract: "49184027148s29j",
    rent: 500,
    bedRooms: 3,
    BIN: 123,
    image: require("../assets/realestate.jpeg"),
  },
  {
    address: "402 Washington",
    contract: "1340589238jx0",
    rent: 300,
    bedRooms: 2,
    BIN: 432,
    image: require("../assets/realestate1.jpg"),
  },
];

export const QuroumDemo = () => {
  return <LeaseSearchResults data={mockData} />;
};
