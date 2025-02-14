import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { IoStarOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

import confetti from "../../assets/confetti-3.gif";

const AddReview = () => {
  const { visitId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ rating: 5, description: "" });
  const [isAlreadyReviewed, setIsAlreadyReviewed] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  // useEffect to fetch status of review
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URI}/api/visits/${visitId}/review`,
          { ...formData }
        );
        const { review } = response.data;
        if (!review) setIsAlreadyReviewed(false);
        else {
          setIsAlreadyReviewed(true);
          toast.success(response.data.message);
        }
      } catch (error) {
        toast.error(error.response?.data?.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleReviewSubmit = () => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URI}/api/visits/${visitId}/review`,
          { ...formData }
        );
        setSubmitted(true);
        toast.success(response.data.message);
      } catch (error) {
        toast.error(error.response?.data?.message);
      } finally {
        setIsLoading(false);
      }
    })();
  };

  const handleRatingChange = (rating) => {
    if (rating === formData.rating)
      setFormData((prev) => ({ ...prev, rating: 0 }));
    else setFormData((prev) => ({ ...prev, rating }));
  };

  if (isLoading)
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='w-16 h-16 border border-t-4 border-blue-500 border-solid rounded-full animate-spin'></div>
      </div>
    );

  if (isAlreadyReviewed)
    return (
      <div className='flex flex-col gap-3 justify-center items-center h-[50vh]'>
        <h1 className='text-xl text-gray-600 font-medium md:text-3xl lg:text-4xl'>
          You have already reviewed this visit
        </h1>
        <Link
          to='/'
          className='underline text-blue-800 hover:text-blue-500 lg:text-lg'>
          Return to home
        </Link>
      </div>
    );

  if (submitted)
    return (
      <div className='relative overflow-hidden flex flex-col gap-3 justify-center items-center h-[50vh]'>
        <h1 className='text-xl text-blue-800 font-medium md:text-3xl lg:text-4xl'>
          Thank you for reviewing our clinic
        </h1>
        <Link
          to='/'
          className='underline text-blue-800 hover:text-blue-500 lg:text-lg'>
          Return to home
        </Link>
        <img
          onLoad={(e) => setTimeout(() => e.target.remove(), 3000)}
          src={confetti}
          alt=''
          className='absolute z-0 w-1/2 mx-auto opacity-50'
        />
      </div>
    );

  return (
    <div className='w-11/12 mx-auto flex flex-col gap-4 lg:w-3/4 my-14'>
      {/* rating */}
      <div className='flex flex-col gap-1'>
        <label
          className='font-medium text-xl select-none md:text-2xl lg:text-3xl'
          htmlFor='rating'>
          Rating
        </label>
        {/* rating stars */}
        <div className='flex gap-1 items-center'>
          {new Array(formData.rating).fill(null).map((r, index) => (
            <IoStar
              onClick={(e) => handleRatingChange(index + 1)}
              key={index}
              className='cursor-pointer text-5xl text-yellow-500'
            />
          ))}
          {new Array(5 - formData.rating).fill(null).map((r, index) => (
            <IoStarOutline
              onClick={(e) => handleRatingChange(formData.rating + index + 1)}
              key={index}
              className='cursor-pointer text-5xl text-yellow-500'
            />
          ))}
        </div>
      </div>
      {/* description */}
      <div className='flex flex-col gap-1'>
        <label
          className='font-medium text-xl select-none md:text-2xl lg:text-3xl'
          htmlFor='description'>
          Description
        </label>
        <div
          contentEditable={true}
          onInput={(e) =>
            setFormData((prev) => ({
              ...prev,
              description: e.target.innerText,
            }))
          }
          className='border px-3 py-1 outline-none rounded-md border-gray-400 focus:border-blue-500 md:px-5 md:py-2'></div>
      </div>
      {/* submit */}
      <button
        onClick={handleReviewSubmit}
        className='bg-blue-500 text-white w-min px-3 py-1 rounded-md mx-auto hover:bg-blue-800 md:px-5 md:py-2'>
        Submit
      </button>
    </div>
  );
};

export default AddReview;
