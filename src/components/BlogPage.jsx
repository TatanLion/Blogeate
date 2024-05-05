import { Outlet } from "react-router-dom";
import { blogData } from "../data/blogData";
import BlogLink from "./BlogLink";

const BlogPage = () => {
  return (
    <div className="flex items-center justify-start flex-col w-[100vw] h-[90vh]">
      <h1 className="text-center text-[4vw] mb-5">Blog Post</h1>
      <ul>
        {blogData.map((blog) => (
          <BlogLink key={blog.slug} blog={blog} />
        ))}
      </ul>
      <Outlet /> {/** Este será el contenido que vamos mostrar "inyectado" **/}
    </div>
  );
};

export default BlogPage;
