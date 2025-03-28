import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { bookData, setBookData } = useContext(BookContext);
  let navigate=useNavigate()

  const handleDelete = (id) => {
    axios
      .delete(`https://67e5612e18194932a585c9f9.mockapi.io/book/book/${id}`)
      .then(() => {
        let updatedBooks = bookData.filter((b) => b.id !== id);
        setBookData(updatedBooks);
      })
      .catch((error) => console.error("Error deleting book:", error));
  };

  const handleUpdate = (book) => {
    const newTitle = prompt("Enter new title:", book.title);
    const newAuthor = prompt("Enter new author:", book.author);
    const newPrice = prompt("Enter new price:", book.price);
    const newImage = prompt("Enter new image URL:", book.image);
    const newDescription= prompt("Enter new Description", book.description)

    // If user cancels any prompt, stop the update
    if (!newTitle || !newAuthor || !newPrice || !newImage || !newDescription) return;

    const updatedBook = {
      title: newTitle,
      author: newAuthor,
      price: newPrice,
      image: newImage,
      description: newDescription
    };

    axios
      .put(`https://67e5612e18194932a585c9f9.mockapi.io/book/book/${book.id}`, updatedBook)
      .then((response) => {
        setBookData(
          bookData.map((b) => (b.id === book.id ? { ...b, ...updatedBook } : b))
        );
        console.log("Book updated successfully:", response.data);
      })
      .catch((error) => console.error("Error updating book:", error));
  };

  const handleNavigate = (book) => {
    localStorage.setItem("selectedBook", JSON.stringify(book));
    navigate("/bookdesc", { state: book });
  };
  

  return (
    <div className="h-[80vh] pt-5 overflow-auto px-2 md:px-10 md:overflow-auto">
      <div className="overflow-x-auto">
        <table className="border-collapse border w-full mt-5 min-w-[600px]">
          <thead className="bg-gray-200">
            <tr className="border text-lg md:text-xl font-bold text-center">
              <th className="p-2 md:p-3">Book Image</th>
              <th className="p-2 md:p-3">Title</th>
              <th className="p-2 md:p-3">Author</th>
              <th className="p-2 md:p-3">Price</th>
              <th className="p-2 md:p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookData.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No books available
                </td>
              </tr>
            ) : (
              bookData.map((val, idx) => (
                <tr key={idx} className="border text-center text-sm md:text-base">
                  <td className="p-2 md:p-3">
                    <div onClick={() => handleNavigate(val)} className="flex flex-col items-center">
                      <img
                        className="h-20 w-20 md:h-24 md:w-24 object-cover mx-auto p-1 md:p-3"
                        src={val.image}
                        alt="Book"
                      />
                    </div>
                  </td>
                  <td className="p-2 md:p-3">{val.title}</td>
                  <td className="p-2 md:p-3">{val.author}</td>
                  <td className="p-2 md:p-3">{val.price}</td>
                  <td className="p-2 md:p-3">
                    <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4">
                      <button
                        onClick={() => handleUpdate(val)}
                        className=" cursor-pointer bg-blue-500 text-white px-3 py-1 md:h-10 md:w-20 rounded text-sm md:text-base"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(val.id)}
                        className="cursor-pointer  bg-red-500 text-white px-3 py-1 md:h-10 md:w-20 rounded text-sm md:text-base"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hero;
