import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "John Doe",
    rating: 4.5,
    comment: "Great product! Highly recommended.",
  },
  {
    name: "Jane Smith",
    rating: 5,
    comment: "Amazing quality and fast shipping!",
  },
  {
    name: "Alice Johnson",
    rating: 4,
    comment: "Good value for money. Will buy again.",
  },
  {
    name: "Mark Thompson",
    rating: 4.8,
    comment: "Exceeded my expectations! ",
  },
  {
    name: "Emma Wilson",
    rating: 3.5,
    comment: "Decent product, but room for improvement.",
  },
];

const Reviews = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            className="text-yellow-500"
            fill="currentColor"
          />
        ))}
        {halfStar && (
          <Star
            key="half"
            className="text-yellow-500"
            fill="currentColor"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <div className="overflow-hidden w-full bg-gray-100 py-8">
      <motion.div
        className="flex space-x-8"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            className="min-w-[300px] p-4 bg-white rounded-2xl shadow-md"
          >
            <div className="flex items-center mb-2">
              {renderStars(review.rating)}
              <span className="ml-2 text-gray-600">{review.rating}</span>
            </div>
            <p className="text-gray-700 italic overflow-hidden text-ellipsis whitespace-nowrap">
              "{review.comment}"
            </p>
            <p className="mt-4 text-right text-gray-500">- {review.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Reviews;
