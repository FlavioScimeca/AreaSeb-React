import React, { useEffect } from 'react';
import { FilmIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { items } = useSelector((store) => store.wishCounter);

  const navigate = useNavigate();

  return (
    <div className="bg-zinc-300 flex justify-between items-center py-3 px-6">
      <div onClick={() => navigate('/')}>
        <p className=" cursor-pointer underline text-xl font-semibold">
          Videoteca
        </p>
      </div>
      <div
        onClick={() => navigate('/wishlist')}
        className="relative flex items-center gap-2 font-semibold cursor-pointer"
      >
        Wishlist
        <FilmIcon className="h-10 w-10 p-1" />
        <div className="absolute top-6 right-[-5px] p-3 bg-sky-700 rounded-full">
          <span className="absolute bottom-[2px] right-2">{items.length}</span>
        </div>
      </div>
    </div>
  );
}
