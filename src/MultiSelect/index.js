import React, { useState } from "react";
import filtericon from "../../../assets/icons/filtericon.svg";
import "./MultiSelect.scss";

const MultiSelect = ({
  options = [],
  selectedOptions = [],
  onChange,
  placeholder = "Enter here",
  isIcon=false,
  sortIcon=false,
  boder=false,
  leave=false,
  selectbox=false,
}) => {
  let [isOpen, setIsOpen] = useState(false);

  const addOption = async (option) => {
    let list = selectedOptions;
    list.push(option);
    await onChange(list);
    await setIsOpen(false);
  };

  const deleteOption = async (id) => {
    let list = selectedOptions;
    list.splice(id, 1);
    await onChange(list);
    await setIsOpen(false);
  };

  return (
    <div
      className={  selectbox ? "selectbox-alignment":"multi-select-container"} 
      tabIndex="0"
      onBlur={() => setIsOpen(false)}
    >
     
      <div className={  boder ? "border-selectbox":"multi-select"} onClick={() => setIsOpen(!isOpen)}> 
      {isIcon &&       
      <img src={filtericon}  className={`${sortIcon ? "selectsort" :"filterIcon" }`}/>}
        <div className="selected-option-wrapper">
          {selectedOptions.length == 0 ? (
            <span style={{ color: "#374151" }}>{placeholder}</span>
          ) : (
            selectedOptions.map((list, index) => {
              return (
                <span key={index} className="selected-option">
                  {list}
                  <span
                    className="delete-tag"
                    style={{ color: "black" }}
                    onClick={() => deleteOption(index)}
                  >
                    &#x2715;
                  </span>
                </span>
              );
            })
          )}
        </div>
        <div
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s",
          }}
        >
          <span className="fa fa-chevron-down"></span>
        </div>
      </div>
      {isOpen && (
        <div className="multi-select-option">
          {options.length === selectedOptions.length ? (
            <div className="no-option">
              <span>No Options</span>
            </div>
          ) : (
            options.map((list, index) => {
              return (
                !selectedOptions.includes(list) && (
                  <div
                    key={index}
                    className="select-list"
                    onClick={() => addOption(list)}
                  >
                    <span>{list}</span>
                  </div>
                )
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
