import React from 'react'
import { Link } from 'react-router-dom'

const BlogLink = ({ blog }) => {
  return (
    <div>
        <li className="w-full m-2 roboto text-[1.4vw] list-disc">
            <Link 
              to={`/blog/${blog.slug}`} // Le pasamos el slug como ruta dinamica
            >
              {blog.title}
            </Link>
        </li>
    </div>
  )
}

export default BlogLink