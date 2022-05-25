import "./dashboard.css"
import Graph from "../graph/Graph";
function Dashboard(){

  return (
    <div className="container-main bg-dark h-100">
      <div className="header bg-dark text-white text-center">
        <h1>Statiscica</h1>
      </div>
      <div className="row bg-dark">
        <div className="col-sm-4">
          <div className="mycard d-flex align-items-center flex-row justify-content-center">
            <div className="circle text-center d-flex align-items-center flex-row justify-content-center">
              <span className="tn">17K</span>
              <span className="tText">tests</span>
            </div>
          </div>
        </div>
        <div className="=col-sm-8">
            <Graph />
        </div>
      </div>
    </div>
  );

}

export default Dashboard;