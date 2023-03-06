import React, { useState } from "react";
import "./Post.css";
import authorizedIcon from "../images/correct.png";
import commentImg from "../images/comment.png";
import shareImg from "../images/repeat.png";
import likeImg from "../images/heart.png";
import downloadImg from "../images/download.png";

const Post = (props) => {

  const postInfo = props.postData;
  
  const [comments, setComments] = useState({
    commentsCount: postInfo.comments,
    commentIsOn: false
  });
  const [reposts, setReposts] = useState({
    repostsCount: postInfo.reposts,
    repostIsOn: false,
  });
  const [likes, setLikes] = useState({
    likesCount: postInfo.likes,
    likeIsOn: false,
  });

  return (
    <div className="post">
      <div className="author-logo">
        <img src={postInfo.userInfo.photo} alt="author logo" />
      </div>
      <div className="post-info">
        <div className="author">
          <div className="authorized-box">
            <p className="author-name">{postInfo.userInfo.name}</p>
            <img src={authorizedIcon} alt="autorized user" />
          </div>
          <p className="author-nick">{postInfo.userInfo.nickname}</p>
          <p className="post-date">{postInfo.date}</p>
        </div>
        <div className="post-desc">
          <p>{postInfo.content}</p>
        </div>
        <div className="main-image">
          <img className="post-img" src={postInfo.image} alt="post image" />
        </div>
        <div className="post-actions">
          <div className="post-comments">
            <img src={commentImg} alt="comment-img" onClick={(e) => {
              setComments((prev) => {
                return {
                  commentsCount: prev.commentIsOn ? prev.commentsCount - 1 : prev.commentsCount + 1,
                  commentIsOn: !prev.commentIsOn
                }
              });
            }} />
            <span className={comments.commentIsOn ? "active-action" : ""}>{comments.commentsCount}</span>
          </div>
          <div className="post-sharing">
            <img src={shareImg} alt="shares-img" onClick={(e) => {
              setReposts((prev) => {
                return {
                  repostsCount: prev.repostIsOn ? prev.repostsCount - 1 : prev.repostsCount + 1,
                  repostIsOn: !prev.repostIsOn
                }
              });
            }} />
            <span className={reposts.repostIsOn ? "active-action" : ""}>{reposts.repostsCount}</span>
          </div>
          <div className="post-likes">
            <img src={likeImg} alt="like" onClick={(e) => {
              setLikes((prev) => {
                return {
                  likesCount: prev.likeIsOn ? prev.likesCount - 1 : prev.likesCount + 1,
                  likeIsOn: !prev.likeIsOn
                }
              });
            }} />
            <span className={likes.likeIsOn ? "active-action" : ""}>{likes.likesCount}</span>
          </div>
          <div className="post-download">
            <img src={downloadImg} alt="download" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
