import React from "react";
import DashboardNav from "../components/Header/DashboardNav";
import Crashes from '../components/Charts/Crashes';

const DashboardCrashes = () => {
  const body = (
    <div className="container-fluid my-4 pt-4">
        <div className="bg-white shadow m-1 p-3">
            <Crashes/>
        </div>
    </div>
  );
  return <DashboardNav body={body} />;
};

export default DashboardCrashes;
