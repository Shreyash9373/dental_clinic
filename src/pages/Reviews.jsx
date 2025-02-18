import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { AiOutlineLoading } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";

const Reviews = () => {
  const [reviews, setReviews] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URI}/api/visits/reviews/shown`
        );
        setReviews(response.data.reviews);
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
      }
    })();
  }, []);

  if (reviews === undefined)
    return (
      <div className='text-5xl py-5 flex justify-center items-center'>
        <div className='animate-spin'>
          <AiOutlineLoading />
        </div>
      </div>
    );

  if (reviews === null)
    return (
      <div className='py-10 text-3xl text-center text-gray-400 font-light'>
        Something went wrong
      </div>
    );

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            className='text-yellow-500'
            fill='currentColor'
          />
        ))}
        {halfStar && (
          <Star
            key='half'
            className='text-yellow-500'
            fill='currentColor'
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className='text-gray-300' />
        ))}
      </>
    );
  };

  return (
    <div className='overflow-hidden w-full bg-gray-100 py-8'>
      <motion.div
        className='flex space-x-8'
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}>
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            className='min-w-[300px] p-4 bg-white rounded-2xl shadow-md'>
            <div className='flex items-center mb-2'>
              {renderStars(review.rating)}
              <span className='ml-2 text-gray-600'>{review.rating}</span>
            </div>
            <p className='italic overflow-hidden text-ellipsis whitespace-nowrap'>
              "{review.description}"
            </p>
            <p className='mt-4 text-right text-gray-500'>- {review.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Reviews;
