import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import placeHolder from '../public/placeholder-image.jpg';
import { HeartIcon, ArrowSmallLeftIcon } from '@heroicons/react/24/solid';
import Header from '../components/header';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../app/features/counter/wishSlice';

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [info, setInfo] = useState({});

  const dispatch = useDispatch();

  const addItemToWishList = () => {
    toast.success('Film aggiunto :)');
    dispatch(addToWishList(info));
  };

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
  //   console.log(id);
  return (
    <>
      <Header />
      <div className="h-screen flex justify-center items-center">
        <div className="m-5 py-7 p-3 shadow-sm rounded-md bg-gray-400 w-[250px] ">
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
          <p className="text-center text-lg font-medium mb-2">
            Rank :<span>{info.rank}</span>
          </p>
          <p className="text-center text-lg font-medium mb-2">
            Anno :<span>{info.y}</span>
          </p>
          <div className="flex justify-evenly">
            <button
              onClick={() => navigate(-1)}
              className="text-gray-700 tracking-wider font-semibold py-2 px-4 rounded-full bg-yellow-200 text-center flex justify-between"
            >
              <ArrowSmallLeftIcon className="mt-[2px] mr-2 w-5 h-5" />
              back
            </button>
            <button
              onClick={() => addItemToWishList()}
              className="text-gray-300 tracking-wider font-semibold py-2 px-4 rounded-full bg-red-600 text-center flex justify-between"
            >
              Add
              <HeartIcon className="mt-[2px] ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
