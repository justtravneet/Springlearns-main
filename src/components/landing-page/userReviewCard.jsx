import React from "react";
import UserAvatar from "./userAvatar";
import { StarIcon } from "lucide-react";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const UserReviewCard = ({ review }) => {
  return (
    <motion.div
      whileHover={{ scale: "1.06" }}
      className="bg-gray-100 p-4 rounded-md max-w-full shadow-2xl drop-shadow-sm cursor-pointer"
    >
      <div className="flex items-center mb-2 gap-3">
        <UserAvatar name={review?.name} />
        <h4 className="font-bold">{review.name}</h4>
      </div>
      <div className="text-gray-600 mb-2">
        <p>{review.text}</p>
        <div className="flex items-center">
          {Array(review.rating)
            .fill()
            .map((_, index) => (
              <StarFilledIcon className="text-yellow-300 w-4 h-4" key={index} />
            ))}

          {Array(5 - review.rating)
            .fill()
            .map((_, index) => (
              <StarIcon className="text-yellow-300 w-4 h-4" key={index} />
            ))}
        </div>
      </div>
      <div className="text-black-60 text-sm">
        <p>{review?.profession}</p>
      </div>
      <div className="text-black-70 text-sm">
        <p>{review?.description}
            <span className="text-blue-10 hover:underline text-sm">... Read More</span>
        </p>
      </div>
      <div className="text-gray-400 text-sm">
        <p>Posted on {review?.createdAt}</p>
      </div>
    </motion.div>
  );
};

export default UserReviewCard;
