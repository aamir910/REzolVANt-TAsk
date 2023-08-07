import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [status, setstatus] = useState("TO-DO");
  
  const [value, setvalue] = useState("");

  const [value2, setvalue2] = useState([]);

  const [toglebtn, settoglebtn] = useState(true);

  const [edititem, setedititem] = useState(null);


  function handlechange(event) {
    let aa = event.target.value;
    setvalue(aa);
  }
  function addtaskbutton() {
    if (!value) {
      alert("inputBar is empty");
    } else if (value && !toglebtn) {
      setvalue2(
        value2.map((elem) => {
          if (elem.id === edititem) {
            return { ...elem, name: value };
          }
          return elem;
        })
      );
      setvalue("");
      settoglebtn(true);
    } else {

    // setstatus("TO-DO") ; 


      const inputdata = {
        id: new Date().getTime().toString(),
        name: value,
        status:  "TO-DO",
      };
      setvalue2([inputdata, ...value2]);
      setvalue("");
      const currentTime = new Date().toLocaleTimeString();
      setCurrentTime(currentTime);
    }
  }
  function handleremove(index) {
    const updatearray = value2.filter((elem) => {
      return index !== elem.id;
    });
    setvalue2(updatearray);
  }
  function handleedit(index) {
    let updateitem = value2.find((elem) => {
      return elem.id === index;
    });

    settoglebtn(false);

    setvalue(updateitem.name);

    setedititem(index);
  }
  function handlestatus(index) {
    let updateitem2 = value2.find((elem) => {
      return elem.id === index;
    });

    if (updateitem2.status === "TO-DO") {
      updateitem2.status = "COMPLETED";
      setstatus("COMPLETED");
    } else {
      updateitem2.status = "TO-DO";
      setstatus("TO-DO");
    }
  }

  return (
    <div className="App">
      <>
        <div>
          <h1>ADD ITEMS</h1>
          <div className="input">
            <input type="text" onChange={handlechange} value={value} />

            {toglebtn ? (
              <button onClick={addtaskbutton} className="btn taskbtn">
                {" "}
                <FontAwesomeIcon icon={faPlus} />{" "}
              </button>
            ) : (
              <button className="btn taskbtn" onClick={addtaskbutton}>
                <FontAwesomeIcon icon={faEdit} />{" "}
              </button>
            )}
          </div>
          <ul className="listitems">
            {value2.map((items) => {
              return (
                <div className="itemsinlist">
                  <li key={items.id} className="fulltask">
                    <div className="task"
                   style={
                    items.status === "COMPLETED" ? {textDecoration : "line-through black"} : {textDecoration : "none"}
          }>{items.name}</div>

                    <div>
                      <button
                        className="btn todobtn"
                        onClick={() => handlestatus(items.id)}
                      >
                        {" "}
                        {items.status}
                      </button>
                    </div>

                    <div>
                      <p className="time">{currentTime}</p>
                    </div>

                    <div className="editdelete">
                      <button
                        onClick={() => handleremove(items.id)}
                        className="btn "
                      >
                        <FontAwesomeIcon icon={faTrash} className="dtebtn" />
                      </button>
                      <button
                        onClick={() => handleedit(items.id)}
                        className="btn"
                      >
                        <FontAwesomeIcon icon={faEdit} className="editbtn"  />
                      </button>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </>
    </div>
  );
};

export default Todo;
