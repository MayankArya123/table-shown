import "./App.css";
import { useEffect, useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import colorImg from  './change-color.png'

const data = require("./csvjson.json");

function App() {
  const [AllData, setAllData] = useState([]);
  const [DuplicateData, setDuplicateData] = useState([]);
  const [Active, setActive] = useState([]);

  const unSort = () => {
    console.log(AllData, DuplicateData, data);

    const result = AllData.sort(function () {
      return 0.5 - Math.random();
    });

    console.log(result);
    console.log(AllData);

    setAllData([...result]);
  };

  const sortByASc = () => {
    console.log(AllData);
    function compare(a, b) {
      if (a.first_name < b.first_name) {
        return -1;
      }
      if (a.first_name > b.first_name) {
        return 1;
      }
      return 0;
    }

    const result = AllData.sort(compare);

    console.log(result);
    console.log(AllData);

    setAllData([...result]);
  };

  const sortByDSc = () => {
    console.log(AllData);
    function compare(a, b) {
      if (a.first_name < b.first_name) {
        return 1;
      }
      if (a.first_name > b.first_name) {
        return -1;
      }
      return 0;
    }

    const result = AllData.sort(compare);

    // console.log(result);
    // console.log(AllData);

    setAllData([...result]);
  };

  const setColor = (item) => {
    if (Active.includes(item.id)) {
      console.log("enter", Active, item.id);

      const result = Active.filter((EC) => EC !== item.id);

      console.log(result);

      setActive(result);
    } else {
      setActive([...Active, item.id]);
    }
  };

  console.log(Active);

  useEffect(() => {
    setDuplicateData(data);
    setAllData(data);
  }, []);

  return (
    <div className="App table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th> color </th>
            <th scope="col">
              <div className="adjust" >
                <div>First name </div>

                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    sort
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li className="cursor" onClick={() => unSort()}>
                      <a class="dropdown-item">UnSort</a>
                    </li>
                    <li className="cursor" onClick={() => sortByASc()}>
                      <a class="dropdown-item">Sort by ASC</a>
                    </li>
                    <li className="cursor" onClick={() => sortByDSc()}>
                      <a class="dropdown-item">Sort by DSC</a>
                    </li>
                  </ul>
                </div>
              </div>{" "}
            </th>
            <th scope="col">Last name</th>
            <th scope="col">status</th>
            <th scope="col">Full name</th>
          </tr>
        </thead>

        {AllData.map((item) => {
          return (
            <tbody>
              <tr
                className={
                  Active && Active.includes(item.id) ? "blue" : "white"
                }
              >
                <td className="cursor" onClick={() => setColor(item)}>
                  {" "}
                    <img  className="colorImg" src={colorImg} /> {" "}
                </td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>
                  {item.status ? (
                    <p className="green"> true </p>
                  ) : (
                    <p className="red"> false </p>
                  )}
                </td>
                <td>
                  {" "}
                  {item.first_name} {item.last_name}{" "}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
