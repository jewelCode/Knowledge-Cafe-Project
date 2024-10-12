import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import BookMarks from "./components/BookMarks/BookMarks"
import Header from "./components/Header"

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog =>{
    console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleReadingTime = time =>{
    console.log('mark as read', time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleReadingTime={handleReadingTime} handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <BookMarks readingTime={readingTime} bookmarks={bookmarks}></BookMarks>
      </div>
    </>
  )
}

export default App
