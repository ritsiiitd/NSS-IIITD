import React from 'react';
import { download } from '../assets/images';
import { downloadImage } from '../utils';

const Cardd = ({ _id, title, prompt, photo }) => {
  return (
    <div className='rounded-xl group relative flex mb-5 hover:shadow-cardhover'>
      <div className='relative' style={{ height: '100%' }}>
        <img
          className='w-full h-full mt-0 justify-center object-cover rounded-xl transition-transform transform hover:scale-105'
          src={photo?.driveLink}
          alt={prompt}
        />
        <div className='group-hover:flex flex-col max-h-full absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md transition-opacity opacity-0 hover:opacity-100'>
          <p className='text-white text-sm overflow-y-auto prompt'>{prompt}</p>
          <button
            type=''
            onClick={() => downloadImage(_id, photo?.driveLink)}
            className=''
          >
            <img
              src={download}
              alt='download'
              className=''
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardd;
