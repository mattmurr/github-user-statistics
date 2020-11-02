import React, { Fragment } from "react";
import { Waypoint } from "react-waypoint";
import moment from "moment";

const Header = ({ label }) => {
  return (
    <th className="px-5 py-3 text-sm font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-200 border-b-2 border-gray-300">
      {label}
    </th>
  );
};

const Row = ({ waypoint, userData }) => {
  return (
    <tr>
      <td className="px-5 py-5 bg-white border-b border-gray-300 text-md">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-16 h-16">
            <img
              className="w-full h-full rounded-full"
              src={userData.avatarUrl}
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{userData.login}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-normal">{userData.bio}</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <div className="flex flex-row flex-wrap">
          <div className="m-1">
            <div className="px-4 py-1 text-xs bg-gray-400 rounded-full pill">
              Javascript
            </div>
          </div>
          <div className="m-1">
            <div className="px-4 py-1 text-xs bg-gray-400 rounded-full pill">
              Ruby
            </div>
          </div>
          <div className="m-1">
            <div className="px-4 py-1 text-xs bg-gray-400 rounded-full pill">
              Ruby
            </div>
          </div>
        </div>
        {waypoint}
      </td>
    </tr>
  );
};

const UsersTable = (props) => {
  return (
    <div className="inline-block min-w-full mt-6 overflow-hidden overflow-x-auto rounded-lg shadow overscroll-x-auto">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <Header label={"User"} />
            <Header label={"Bio"} />
            <Header label={"Languages"} />
          </tr>
        </thead>
        <tbody>
          {props.nodes.map((value, i) => (
            <Fragment key={i}>
              <Row
                waypoint={
                  i === props.nodes.length - 2 ? (
                    <Waypoint
                      onEnter={() => props.onWaypointEntered()}
                      scrollableAncestor={window}
                    />
                  ) : null
                }
                userData={value.node}
              />
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
