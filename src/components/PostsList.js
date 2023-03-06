import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Post from "../components/Post";
import "../components/PostsList.css";

function PostsList() {

  const navigate = useNavigate();
  const allData = useSelector((state) => state);
  const [activeFilter, setActiveFilter] = useState("all");

  function filterBtnOnClickHandler(e) {
    setActiveFilter((prev) => {
      if (prev !== e.target.name) {
        return e.target.name;
      }
    });
  }

  const postListToRender = allData.postsArr.map((value) => {
    return {
      ...value,
      userInfo: getUserInfo(value.author)
    }
  });

  function getUserInfo(nickname) {
    for (let i = 0; i < allData.usersArr.length; i++) {
      if (allData.usersArr[i].nickname === nickname) {
        return allData.usersArr[i];
      }
    }
    return {
      nickname: "",
      foto: "",
      fullName: ""
    }
  }
      
  return (
    <div className="main-container">
      <div className="navbar">
        <div className="nav-center">
          <div className="navbar-newpost">
            <button
              id="new-post-btn"
              onClick={(e) => {
                navigate("/newpost");
              }}
            >
              New post
            </button>
          </div>
          <div className="navbar-filters">
            <button
              name="all"
              onClick={filterBtnOnClickHandler}
              className={
                activeFilter === "all"
                  ? "filter-btn active-filter-btn"
                  : "filter-btn"
              }
            >
              All
            </button>
            <button
              name="today"
              onClick={filterBtnOnClickHandler}
              className={
                activeFilter === "today"
                  ? "filter-btn active-filter-btn"
                  : "filter-btn"
              }
            >
              Today
            </button>
            <button
              name="lastWeek"
              onClick={filterBtnOnClickHandler}
              className={
                activeFilter === "lastWeek"
                  ? "filter-btn active-filter-btn"
                  : "filter-btn"
              }
            >
              Last week
            </button>
            <button
              name="lastMonth"
              onClick={filterBtnOnClickHandler}
              className={
                activeFilter === "lastMonth"
                  ? "filter-btn active-filter-btn"
                  : "filter-btn"
              }
            >
              Last month
            </button>
          </div>
        </div>
      </div>
      <div className="posts-list-container">
        {postListToRender.map((postEl, index) => {
          return <Post key={index.toString()} postData={postEl} />;
        })}
      </div>
    </div>
  );
}

export default PostsList;