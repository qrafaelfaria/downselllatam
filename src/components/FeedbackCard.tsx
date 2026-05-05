import React from 'react';

interface FeedbackCardProps {
  quote: string;
  author: string;
  image: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ quote, author, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <img src={image} alt={author} className="w-20 h-20 rounded-full mb-4 object-cover" />
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <p className="font-semibold text-gray-900">- {author}</p>
    </div>
  );
};

export default FeedbackCard;
