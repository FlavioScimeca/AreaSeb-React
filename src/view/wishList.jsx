import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import { useSelector } from 'react-redux';
import FilmCard from '../components/filmCard';

export default function WishList() {
  const { items } = useSelector((store) => store.wishCounter);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 p-3 gap-3">
        {items
          .map((film) => JSON.parse(film))
          .map((film, idx) => (
            <FilmCard key={idx} props={film} />
          ))}
      </div>
    </div>
  );
}
