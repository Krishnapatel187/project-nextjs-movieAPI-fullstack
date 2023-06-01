import Link from 'next/link'
import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from '../styles/common.module.css'


const Movie = async () => {

  await new Promise(resolve => setTimeout(resolve, 3000));
  
  const url = process.env.RAPID_URL;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_KEY,
      'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;


  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie </h1>
          <div className={styles.card_section}>
            {
              main_data.map((curElem, index) => {
                return <MovieCard key={index}  {...curElem} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Movie