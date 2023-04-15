import { useEffect, useState } from 'react';
import Header from './components/header';
import FilmCard from './components/filmCard';

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd8f3bdddfcmsh0d2102590538877p1b0578jsn04f9fd220639',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
      },
    };

    fetch(
      'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr',
      options
    )
      .then((response) => response.json())
      .then((response) => setFilms(response.d))
      .catch((err) => console.error(err));
  }, []);
  // console.log(films);
  return (
    <main>
      <Header />

      <div className="grid p-2 grid-cols-2 gap-2">
        {films && films.map((film, idx) => <FilmCard key={idx} props={film} />)}
      </div>
    </main>
  );
}

export default App;
