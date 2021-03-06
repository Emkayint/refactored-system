import "./dashboard.css"
import Graph from "../graph/Graph";
import { useAuth } from "../../firebase";


function Dashboard({wpm, errorRate, accuracy, timespeed}) {
  const currentUser = useAuth();

  return (
    <div className="height">
      <div className="header text-white text-center">
        <h1>Statistics {currentUser ? "for" : null} { currentUser?.email}</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="mycard d-flex align-items-center flex-row justify-content-center">
            <div className="circle text-center d-flex align-items-center flex-row justify-content-center">
              <span className="tn">{Math.floor(wpm)}</span>
              <span className="tText">WPM</span>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="myGraph">
            <Graph
              errorRate={errorRate}
              accuracy={accuracy}
              timespeed={timespeed}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;