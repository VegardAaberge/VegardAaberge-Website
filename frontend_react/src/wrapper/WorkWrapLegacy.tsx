import React from "react";
import WorkApp from "../workContainer/WorkApp";

interface Props {
  projectLink: string;
}

const WorkWrapLegacy: React.FC<Props> = ({ projectLink }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-10 col-lg-9 col-sm-8">
          <div className="panel panel-default" id="article1">
            <WorkApp projectLink={projectLink} />;
          </div>
          <br />
        </div>

        <nav className="col-xl-2 col-lg-3 col-sm-4" id="myScrollspy">
          <ul className="nav nav-pills nav-stacked">
            <li
              className={projectLink === "aaberge_brudesalong" ? "active" : ""}
            >
              <a href="aaberge_brudesalong">
                <h4 className="list-group-item-heading">
                  Black Oil Calculator <small>Laget for Lundin Norge</small>
                </h4>
                <p className="list-group-item-text">
                  En nettsideapp som innholder en olje/gas kalkulator,
                  stratigrafisk bildeserie, faktakart med mye data, Norlex
                  database og noen flere funksjoner
                </p>
              </a>
            </li>
            <li
              className={projectLink === "black_oil_calculator" ? "active" : ""}
            >
              <a href="black_oil_calculator">
                <h4 className="list-group-item-heading">
                  Black Oil Calculator (Labview){" "}
                  <small>Laget for Lundin Norge</small>
                </h4>
                <p className="list-group-item-text">
                  En PC-applikasjon som kan gjøre oljekalkulasjoner med lokale
                  og data fra en server, administrere filer og brukere og vise
                  strategrafi og lisenser på et google earth kart
                </p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default WorkWrapLegacy;
