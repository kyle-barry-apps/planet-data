import React, { FC, useState, useContext } from "react";
import { PlanetContext } from "../../contexts/PlanetContext";
import "./navigation.css";

const Navigation: FC = () => {
  const planetContext = useContext(PlanetContext);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  if (!planetContext) {
    return null;
  }

  const { planet, setPlanet } = planetContext;

  const planetColors: { [key: string]: string } = {
    mercury: "#419EBB",
    venus: "#EDA249",
    earth: "#6D2ED5",
    mars: "#D14C32",
    jupiter: "#D83A34",
    saturn: "#CD5120",
    uranus: "#1EC1A2",
    neptune: "#2D68F0",
  };

  return (
    <nav className="nav">
      <div className="nav-title">The planets</div>
      {showMenu ? (
        <ul className="nav-list mobile">
          <div
            onClick={() => {
              setPlanet("Mercury");
              setShowMenu(!showMenu);
            }}
            className="mobile-list-item"
          >
            <div>
              <div
                className="nav__planet-color"
                style={{ backgroundColor: planetColors["mercury"] }}
              ></div>
              <li className={planet === "Mercury" ? "active" : ""}>Mercury</li>
            </div>
            <img src="/assets/icon-chevron.svg" alt="" />
          </div>
          <div
            onClick={() => {
              setShowMenu(!showMenu);
              setPlanet("Venus");
            }}
            className="mobile-list-item"
          >
            <div>
              <div
                className="nav__planet-color"
                style={{ backgroundColor: planetColors["venus"] }}
              ></div>

              <li className={planet === "Venus" ? "active" : ""}>Venus</li>
            </div>
            <img src="/assets/icon-chevron.svg" alt="" />
          </div>
          <div
            onClick={() => {
              setShowMenu(!showMenu);
              setPlanet("Earth");
            }}
            className="mobile-list-item"
          >
            <div>
              <div
                className="nav__planet-color"
                style={{ backgroundColor: planetColors["earth"] }}
              ></div>

              <li className={planet === "Earth" ? "active" : ""}>Earth</li>
            </div>
            <img src="/assets/icon-chevron.svg" alt="" />
          </div>
          <div
            onClick={() => {
              setShowMenu(!showMenu);

              setPlanet("Mars");
            }}
            className="mobile-list-item"
          >
            <div>
              <div
                className="nav__planet-color"
                style={{ backgroundColor: planetColors["mars"] }}
              ></div>

              <li className={planet === "Mars" ? "active" : ""}>Mars</li>
            </div>
            <img src="/assets/icon-chevron.svg" alt="" />
          </div>
          <div
            onClick={() => {
              setShowMenu(!showMenu);
              setPlanet("Jupiter");
            }}
            className="mobile-list-item"
          >
            <div>
              <div
                className="nav__planet-color"
                style={{ backgroundColor: planetColors["jupiter"] }}
              ></div>

              <li className={planet === "Jupiter" ? "active" : ""}>Jupiter</li>
            </div>
            <img src="/assets/icon-chevron.svg" alt="" />
          </div>
          <div
            onClick={() => {
              setShowMenu(!showMenu);
              setPlanet("Saturn");
            }}
            className="mobile-list-item"
          >
            <div>
              <div
                className="nav__planet-color"
                style={{ backgroundColor: planetColors["saturn"] }}
              ></div>

              <li className={planet === "Saturn" ? "active" : ""}>Saturn</li>
            </div>
            <img src="/assets/icon-chevron.svg" alt="" />
          </div>
          <div
            onClick={() => {
              setShowMenu(!showMenu);
              setPlanet("Uranus");
            }}
            className="mobile-list-item"
          >
            <div>
              <div
                className="nav__planet-color"
                style={{ backgroundColor: planetColors["uranus"] }}
              ></div>

              <li className={planet === "Uranus" ? "active" : ""}>Uranus</li>
            </div>

            <img src="/assets/icon-chevron.svg" alt="" />
          </div>
          <div
            onClick={() => {
              setShowMenu(!showMenu);
              setPlanet("Neptune");
            }}
            className="mobile-list-item"
          >
            <div>
              <div
                className="nav__planet-color"
                style={{ backgroundColor: planetColors["neptune"] }}
              ></div>
              <li className={planet === "Neptune" ? "active" : ""}>Neptune</li>
            </div>
            <img src="/assets/icon-chevron.svg" alt="" />
          </div>
        </ul>
      ) : (
        <ul className="nav-list">
          <li
            className={planet === "Mercury" ? "active" : ""}
            onClick={() => setPlanet("Mercury")}
          >
            Mercury
          </li>
          <li
            className={planet === "Venus" ? "active" : ""}
            onClick={() => setPlanet("Venus")}
          >
            Venus
          </li>
          <li
            className={planet === "Earth" ? "active" : ""}
            onClick={() => setPlanet("Earth")}
          >
            Earth
          </li>
          <li
            className={planet === "Mars" ? "active" : ""}
            onClick={() => setPlanet("Mars")}
          >
            Mars
          </li>
          <li
            className={planet === "Jupiter" ? "active" : ""}
            onClick={() => setPlanet("Jupiter")}
          >
            Jupiter
          </li>
          <li
            className={planet === "Saturn" ? "active" : ""}
            onClick={() => setPlanet("Saturn")}
          >
            Saturn
          </li>
          <li
            className={planet === "Uranus" ? "active" : ""}
            onClick={() => setPlanet("Uranus")}
          >
            Uranus
          </li>
          <li
            className={planet === "Neptune" ? "active" : ""}
            onClick={() => setPlanet("Neptune")}
          >
            Neptune
          </li>
        </ul>
      )}
      <div className="nav-burger" onClick={() => setShowMenu(!showMenu)}>
        <img src="/assets/icon-hamburger.svg" alt="burger menu" />
      </div>
    </nav>
  );
};

export default Navigation;
