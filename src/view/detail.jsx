import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import placeHolder from '../../public/placeholder-image.jpg';
import { HeartIcon } from '@heroicons/react/24/solid';
import Header from '../components/header';

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [info, setInfo] = useState({});
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd8f3bdddfcmsh0d2102590538877p1b0578jsn04f9fd220639',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
      },
    };

    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${id}`, options)
      .then((response) => response.json())
      .then((response) => setInfo(response.d[0]))
      .catch((err) => console.error(err));
  }, []);
  console.log(id);
  return (
    <>
      <Header />
      <div>
        <div className="m-5 p-2 shadow-sm rounded-md bg-gray-400 ">
          <div className="relative h-48">
            <img
              className="absolute h-full w-full object-contain"
              src={info.i ? info.i.imageUrl : placeHolder}
              alt={info.l}
            />
          </div>
          <p className="text-center text-lg font-medium line-clamp-1 my-2">
            {info.l}
          </p>
          <div className="flex justify-evenly">
            <button
              onClick={() => navigate(-1)}
              className=" p-1 px-2 rounded-md bg-yellow-200 text-center"
            >
              back
            </button>
            <button className="p-1 px-2 rounded-md bg-red-600 text-center flex justify-between">
              Add
              <HeartIcon className="mt-[2px] ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
