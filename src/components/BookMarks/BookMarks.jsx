import BookMark from "../BookMark/BookMark";

const BookMarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200">
            <div>
                <h3 className="text-4xl">Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-3xl">Book Marked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) =><BookMark key={idx} bookmark={bookmark}></BookMark>)
            }
        </div>
    );
};

export default BookMarks;