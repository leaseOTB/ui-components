import React, { FunctionComponent } from "react";
import "../tailwindcss/App.css";

type SearchProps = {
  data: Array<Object>;
};

const LeaseSearchResults: FunctionComponent<SearchProps> = ({ data }) => {
  // address: "411 Washington",
  // contract: "49184027148s29j",
  // rent: "500",
  // bedRooms: 3,
  // BIN: 123,
  return (
    <div>
      {/* address: "411 Washington", contract: "49184027148s29j", rent: "500",
      bedRooms: 3, BIN: 123, */}
      {data.map((item) => {
        return (
          <div className="flex my-4 bg-gray-100 px-4 py-4 justify-between">
            <img
              src={item.image}
              alt=""
              className="w-32 h-32 object-cover rounded"
            />
            <div className="bg-white flex justify-between w-full mx-4 py-6 px-4 rounded">
              <div>
                <p className="title font-xl mb-2">Address</p>
                <p className="description font-md">{item.address}</p>
              </div>
              <div>
                <p className="title font-xl mb-2">Public Key</p>
                <p className="description font-md">{item.contract}</p>
              </div>
              <div>
                <p className="title font-xl mb-2">BIN</p>
                <p className="description font-md">{item.BIN}</p>
              </div>
              <div>
                <p className="title font-xl mb-2">Monthly Rent</p>
                <p className="description font-md">{item.rent}</p>
              </div>
              <div>
                <p className="title font-xl mb-2">BedRooms</p>
                <p className="description font-md">{item.bedRooms}</p>
              </div>
            </div>
            <button className="btn">View</button>
          </div>
        );
      })}
    </div>
  );
};

export default LeaseSearchResults;
// ; is necessary at the end of export default for components using propTypes
