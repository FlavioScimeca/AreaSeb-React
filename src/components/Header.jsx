import React from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <div className="bg-zinc-300 flex justify-between items-center py-4 px-6 ">
      <div>
        <p className="text-xl font-semibold">VideoTeca</p>
      </div>
      <div>
        <ShoppingBagIcon className="h-9 w-9 p-1 bg-sky-700 rounded-full" />
      </div>
    </div>
  );
}
