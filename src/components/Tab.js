import React from "react";

const Tab = (props) => {
  const { activeTab, label, icon, onClick } = props;

  return (
    <li
      className={`tab-list-item ${
        activeTab === label ? "tab-list-active" : ""
      }`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt={`${label} Icon`} width="16" height="16" />}{" "}
      {label}
    </li>
  );
};

export default Tab;