import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmarks, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])


    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl">Blogs:{blogs.length}</h2>
            {
                blogs.map(blog =><Blog key={blog.id} blog={blog} handleReadingTime={handleReadingTime} handleAddToBookmarks={handleAddToBookmarks}></Blog>)

            }
        </div>
    );
};

export default Blogs;