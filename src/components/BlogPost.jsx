import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogData } from "../data/blogData";
import { useAuth } from "../hooks/auth";

const BlogPost = () => {

  const { slug } = useParams(); // Recibimos el slug de la ruta

  const navigate = useNavigate();

  const post = blogData.find((blog) => blog.slug === slug);

  const returnToBlog = () => {
    // navigate(-1) //Esto nos retornara al equivalente de ir atras en el navegador
    navigate("/blog");
  };
  
  const auth = useAuth()

  const canDelete = auth.user?.isAdmin || post.author === auth.user?.userName

  return (
    <div className="w-[60vw] flex flex-col justify-center mt-5">
      <h2 className="text-[2.5vw] text-center">{post.title}</h2>
      <p className="roboto text-center m-4">{post.content}</p>
      <div className="flex justify-between items-center gap-10">
        <p className="text-[1.3vw] w-1/3 text-center">
          <span className="font-medium text-[1.5vw]">Author:</span> {post.author}
        </p>
        {canDelete && (
          <button
            className=" w-1/3 bg-red-700 text-white text-[1.3vw] px-8 py-2 m-auto rounded-md hover:bg-red-800"
          >
            Eliminar Post</button>
        )}
        <button 
          className="w-1/3 bg-sky-950 text-white text-[1.3vw] px-8 py-2 m-auto rounded-md hover:bg-sky-800"
          onClick={returnToBlog}
        >
          Volver al Blog
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
