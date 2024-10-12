import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmarks, handleReadingTime}) => {
    console.log(blog);
    const {title, cover, author_img, author, posted_date, hashtags, reading_time} = blog;
    return (
        <div className="mb-20">
            <img className="w-full mb-8" src={cover} alt={`Cover picture of title${title}`} />
            <div className="flex justify-between">
                <div className="flex">
                    <img className="w-14 rounded-full" src={author_img}/>
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}</span>
                    <button onClick={()=>handleAddToBookmarks(blog)} className="ml-2 text-red-600 text-2xl"><FaBookmark/></button>
                </div>
            </div>
            <h2 className="text-4x">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a>{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleReadingTime(reading_time)} className="text-purple-600 font-bold underline">Mark as Read</button>
           
        </div>
    );
};

export default Blog;