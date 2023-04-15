import React, { useEffect } from 'react';
import { FilmIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { items } = useSelector((store) => store.wishCounter);
  // const dispatch = useDispatch();

  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(calculateTotal());
  // }, [items]);
  return (
    <div className="bg-zinc-300 flex justify-between items-center py-3 px-6">
      <div onClick={() => navigate('/')}>
        <p className="text-xl font-semibold">VideoTeca</p>
      </div>
      <div onClick={() => navigate('/wishlist')} className="relative">
        <FilmIcon className="h-10 w-10 p-1" />
        <div className="absolute top-6 left-6 p-3 bg-sky-700 rounded-full">
          <span className="absolute bottom-[2px] right-2">{items.length}</span>
        </div>
      </div>
    </div>
  );
}
