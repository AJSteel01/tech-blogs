import React from "react";
import appwriteService from "../backend/conf";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block">
      <div className="w-full bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
