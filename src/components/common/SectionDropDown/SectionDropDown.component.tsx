import React, { useState } from 'react';

const SectionDropDown = ({ needsScroll = false, sectionName, children }: any) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);
  return (
    <>
      <div
        className='dropdown-toggle bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-400 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out
        flex
        items-center
        whitespace-nowrap flex-row align-center justify-between w-100 content-center px-10 py-3 mb-3'
        onClick={toggleShow}
      >
        <span>{sectionName}</span>
        <span className='text-xl'>{show ? '↑' : '↓'}</span>
      </div>
      {show && (
        <div className={`${!needsScroll ? 'overflow-y-auto' : 'overflow-y-visible'}`}>
          {children}
        </div>
      )}
    </>
  );
};

export default SectionDropDown;
