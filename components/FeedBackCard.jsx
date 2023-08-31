"use client";
import React from "react";
import Image from "next/image";
import "@/styles/feedbackCard.css";
import path from "@/public/assets/icons/pathIcon.svg";
import commentIcon from "@/public/assets/icons/commentIcon.svg";
import data from "@/constants/data.json";
import { useState, useEffect } from "react";
function FeedBackCard() {
  console.log(data.productRequests);
  const [comment, setComment] = useState([]);
  const arr1 = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    setComment(data.productRequests);
  }, []);
  return (
    <div style={{ marginBottom: "3rem" }}>
      {comment.map((comments) => (
        <div className="feedback_card">
          <div
            className="feedback_card_content"
            style={{
              display: "flex",
              justifyContent: "",
              alignItems: "start",
              paddingTop: "2rem",
              paddingLeft: "2.5rem",
              gap: "2.5rem",
            }}
          >
            <div className="comment-like">
              <Image
                src={path}
                width="0.5rem"
                height="0.25rem"
                alt="comment down"
              />
              <div className="comment_number">{comments.upvotes}</div>
            </div>

            <div className="comment_text">
              <div
                className="feebback_text-wrapper"
                style={{ marginBottom: "0.75rem" }}
              >
                <p className="q-a-within-the-chall">{comments.title}</p>
              </div>
              <div style={{ marginBottom: "0.25rem", width:"40rem"}}>
                <p className="challenge-specific-q">{comments.description}</p>
              </div>

              <button className="feedback-btn">{comments.category}</button>
            </div>

            <div style={{alignSelf:"flex-start",paddingTop:"2.9rem", display:"flex", alignItems:"center"}}>
              <Image
                src={commentIcon}
                width="1.125rem"
                height="1rem"
                alt="commentIcon"
                style={{ marginRight: "0.5rem" }}
              />

              <div className="comment_number">2</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedBackCard;
