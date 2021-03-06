import React, { useState } from "react";
import Tab from "./Tab";

import "./Tabs.css";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {props.children.map((child, index) => {
          const { label, icon } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={index}
              label={label}
              icon={icon}
              onClick={() => onClickTabItem(label)}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {props.children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default Tabs;