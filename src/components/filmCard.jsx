import React, { useEffect, useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import placeHolder from '../../public/placeholder-image.jpg';
import { Link } from 'react-router-dom';

function FilmCard({ props }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    setData(props);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div className="text-center bg-red-600">Loading</div>;
  } else {
    return (
      <div className="p-3 shadow-sm rounded-md bg-gray-400 ">
        <div className="relative h-48">
          <img
            className="absolute h-full w-full object-contain"
            src={data.i ? data.i.imageUrl : placeHolder}
            alt={data.l}
          />
        </div>
        <p className="text-center text-lg font-medium line-clamp-1 my-2">
          {data.l}
        </p>
        <div className="flex justify-evenly">
          <button className=" p-1 px-2 rounded-md bg-yellow-200 text-center">
            <Link to={`/detail/${data.id}`}>Info</Link>
          </button>
          <button className="p-1 px-2 rounded-md bg-red-600 text-center flex justify-between">
            Add
            <HeartIcon className="mt-[2px] ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }
}

export default FilmCard;
