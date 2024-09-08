
import React, { useEffect, useState } from "react";
const reviews = [
    {
      id: 1,
      name: "John Doe",
      review: "This product has changed my life! Highly recommend to anyone.",
      image: "https://en.wikipedia.org/wiki/Man",
      
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "Excellent service and amazing support. I'm very happy!",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Sam Wilson",
      review: "A must-have product for anyone looking to improve their workflow.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Lucy Brown",
      review: "Superb quality and outstanding customer service. Worth every penny!",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Tom Holland",
      review: "Love the features and the overall experience is fantastic!",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Anna White",
      review: "Great product, really helps me get things done faster.",
      image: "https://via.placeholder.com/150",
    },
  ];
  
const Cus = ()=>{
    const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      nextReviews();
    }, 2000); // Automatically slide every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  const nextReviews = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + reviewsPerPage >= reviews.length ? 0 : prevIndex + reviewsPerPage
    );
  };

  const prevReviews = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - reviewsPerPage < 0 ? reviews.length - reviewsPerPage : prevIndex - reviewsPerPage
    );
  };
    return(
        <>
       <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Customer Reviews</h2>
      <div className="flex overflow-hidden space-x-4">
        {reviews.slice(currentIndex, currentIndex + reviewsPerPage).map((review) => (
          <div
            key={review.id}
            className="flex-shrink-0 w-full sm:w-1/3 bg-white p-6 rounded-lg shadow-lg"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">{review.name}</h3>
            <p className="text-gray-600 text-center">{review.review}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {/* <div className="flex justify-center mt-6">
        <button
          onClick={prevReviews}
          className="bg-indigo-600 text-white px-4 py-2 rounded-l-lg focus:outline-none hover:bg-indigo-700"
        >
          Prev
        </button>
        <button
          onClick={nextReviews}
          className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg focus:outline-none hover:bg-indigo-700"
        >
          Next
        </button>
      </div> */}
    </div>
        </>

    )
}
export default Cus;