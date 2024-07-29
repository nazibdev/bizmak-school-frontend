import React, { useState } from "react";
import News from "../Markettings/News";

const NewsAndSuccessStories = () => {
  const [currentTab, setCurrentTab] = useState("news");

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="news-success-container">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${currentTab === "news" ? "active" : ""}`}
            onClick={() => handleTabChange("news")}
          >
            News
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${currentTab === "success" ? "active" : ""}`}
            onClick={() => handleTabChange("success")}
          >
            Success Stories
          </a>
        </li>
      </ul>
      <div className="tab-content">
        {currentTab === "news" && (
          <div className="tab-pane active">
            <h3>News</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis, sapien eget eleifend tincidunt, mi risus tempor risus,
              vel consectetur orci velit vel velit.
              <News />
            </p>
          </div>
        )}
        {currentTab === "success" && (
          <div className="tab-pane active">
            <h3>Success Stories</h3>
            <p>
              <div>Add success stories</div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis, sapien eget eleifend tincidunt, mi risus tempor risus,
              vel consectetur orci velit vel velit.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsAndSuccessStories;
