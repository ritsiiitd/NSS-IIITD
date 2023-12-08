import React from 'react';
import { download } from '../assets/images';
import { downloadImage } from '../utils';

const Card = ({ _id, title, prompt, photo }) => {
  return (
    <div className='rounded-xl group relative flex mb-5 hover:shadow-cardhover card'>
      <img
        className='w-full h-full mt-0 justify-center object-cover rounded-xl'
        src={photo?.driveLink}
        alt={prompt}  // Fix the typo here
      />
      <div className='group-hover:flex flex-col max-h-[50%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
        <p className='text-white text-sm overflow-y-auto prompt'>{prompt}</p>
        <button
          type='button'
          onClick={() => downloadImage(_id, photo?.driveLink)}
          className='mr-0 w-6 h-6 bg-transparent border-dotted'
        >
          <img
            src={download}
            alt='download'
            className='w-6 h-6 object-contain invert'
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
