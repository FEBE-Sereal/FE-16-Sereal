import React, { useEffect, useState } from "react";
import Team1 from "../../assets/img/team1.png";
import { dashboardServices } from "../../services/dashboardServices";
// import "../../App.css"

function Dashboard() {
  // const [dashboard, setDashboard] = useState([]);

  // const getDasboardList = () => {
  //   dashboardServices.getDasboardList().then((response) => {
  //     setDashboard(response);
  //   });
  // };
  // useEffect(() => {
  //   getDasboardList();
  // });

  return (
    <>
      <section style={{ backgroundColor: "#fff" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src={Team1} alt="avatar" className="rounded-circle img-fluid" style={{ width: "150px" }} />
                  <h5 className="my-3">Nexus</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  {/* {dashboard.map((item) => ( */}
                  <>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Nama</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">Nama</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">Email</p>
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
