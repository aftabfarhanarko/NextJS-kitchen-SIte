import ReviewSkeletions from '@/components/ReviewSkeletions';
import React from 'react';

const ReviewLoding = () => {
    return (
         <div className=" my-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
      {[...Array(12)].map((_, index) => (
        <ReviewSkeletions key={index} />
      ))}
    </div>
    );
};

export default ReviewLoding;