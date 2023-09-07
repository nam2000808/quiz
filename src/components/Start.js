import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="start-container">
      <h1>Bắt Đầu Bài Kiểm Tra</h1>
      <Link to="/quiz">
        {" "}
        {/* Sửa đường dẫn ở đây */}
        <button>Bắt đầu</button>
      </Link>
    </div>
  );
};

export default Start;
