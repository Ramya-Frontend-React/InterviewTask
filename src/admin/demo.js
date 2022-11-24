Rihhana, [24-11-2022 13:48]
import React from "react";
import { useState } from "react";

export default function ColumnCreation(props) {
  const [value, setvalue] = useState([]);

  const [select, setSelect] = useState(false);
  //name
  const [name, setName] = useState("");
  //date
  const [date, setDate] = useState("");
  //age
  const [age, setAge] = useState("");
  //location
  const [location, setlocation] = useState({
    place: [],
    response: [],
  });
  function onselect() {
    setSelect(true);
  }

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { place } = location;

    console.log(${value} is ${checked});

    // Case 1 : The user checks the box
    if (checked) {
      setlocation({
        place: [...place, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setlocation({
        place: place.filter((e) => e !== value),
      });
    }
  };
  function onAdd() {
    let updatedValue = [...v];
    updatedValue.push({
      name: name,
      date: date,
      age: age,
      location: location.place,
    });
    setvalue(updatedValue);
    setSelect(false);
    value = props.value;
  }

  console.log(value, "success");
  return (
    <div clas="container border float-end ">
      {select ? (
        <div className="container w-25 float-end">
          <h4>Select Event</h4>
          {value.map((dat, index) => {
            return (
              <div className="box" key={index} index={index}>
                <p>Location: {dat.location}</p>

                <br></br>
              </div>
            );
          })}
          <form onSubmit={handleChange}>
            <div className="form-check  m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="place"
                value="chennai "
                id="flexCheckDefault"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Chennai
              </label>
            </div>
            <br />
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="place"
                value="Mumbai "
                id="flexCheckDefault"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Mumbai
              </label>
            </div>
            <br />
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="place"
                value="Delhi "
                id="flexCheckDefault"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Delhi
              </label>
            </div>
            <br />
          </form>
        </div>
      ) : (
        ""
      )}
      <div>
        <div className="container  ">
          <table className="w-75">
            <thead>
              <tr>
                <th>Name</th>
                <th>Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    name="name"
                    placeholder="name"
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
                <td>
                  <div class="dropdown">
                    <button
                      type="button"
                      class="btn btn-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                      <li>

Rihhana, [24-11-2022 13:48]
<a class="dropdown-item" href="#">
                          Date Of Birth :
                          <input
                            name="date"
                            value={date}
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                          />
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Age :
                          <input
                            name="age"
                            value={age}
                            placeholder="age"
                            onChange={(e) => setAge(e.target.value)}
                            type="number"
                          />
                        </a>
                      </li>
                      <li>
                        <h5 class="dropdown-header">MultiSelect</h5>
                      </li>{" "}
                      <button onClick={onselect}>Location</button>{" "}
                    </ul>
                  </div>
                </td>
                <td>
                  <button onClick={onAdd}>submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {value.map((dat, index) => {
        return (
          <div className="box" key={index} index={index}>
            <p> Name: {dat.name}</p>
            <p>Date of Birth: {dat.date}</p>
            <p>Age: {dat.age}</p>
            <p>Location: {dat.location}</p>

            <br></br>
          </div>
        );
      })}
    </div>
  );
}