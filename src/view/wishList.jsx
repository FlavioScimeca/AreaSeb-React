import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import { useSelector } from 'react-redux';
import FilmCard from '../components/filmCard';

export default function WishList() {
  const { items } = useSelector((store) => store.wishCounter);
  useEffect(() => {
    console.log('rebderizzato');
  }, [items]);
  return (
    <div>
      <Header />
      {items.length == 0 ? (
        <div className=" h-screen bg-sky-950 flex items-center justify-center text-2xl text-gray-400">
          Wishlist vuota
        </div>
      ) : (
        <div className="mx-auto grid p-2 grid-cols-2 gap-2 md:grid-cols-3 md:max-w-3xl md:py-12">
          {items
            // .map((film) => JSON.parse(film))
            .map((film, idx) => (
              <FilmCard key={idx} props={film} />
            ))}
        </div>
      )}
    </div>
  );
}
