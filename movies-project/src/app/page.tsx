import Link from 'next/link'
import React from 'react'


const movies = [
  {
    id: 1,
    title: 'Inception',
    description: 'A mind-blowing thriller by Christopher Nolan',
    rating: 4.5,
    comments: 124,
  }, {
    id: 2,
    title: 'Gaddar 2',
    description: 'An action packed movie by anil sharma',
    rating: 4.5,
    comments: 124,
  }, {
    id: 3,
    title: "Avatar",
    description: "A mind-blowing thriller by Christopher Nolan",
    rating: 4.5,
    comments: 124
  },
  {
    id: 4,
    title: 'Interstellar',
    description: 'A space exploration movie by Christopher Nolan',
    rating: 4.8,
    comments: 344,
  }, {
    id: 5,
    title: 'The Dark Knight',
    description: 'The iconic batsman movie directed by Christopher Nolan',
    rating: 4.5,
    comments: 678
  }
]
const Home = () => {
  const totalMovies = movies.length
  const totalComments = movies.reduce((acc, movie) => acc + movie.comments, 0)
  const averageRating = (movies.reduce((acc, movie) => acc + movie.rating, 0) / totalMovies).toFixed(1)
  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl shadow-lg">
        <h2 className="text3xl font-semibold txet-white mb-4">
          Dashboard Overview
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-3  gap-6 text-white'>
          <div className='h-[150px]  bg-gradient-to-r from-blue-900 to-green-900  p-4 rounded-xl flex flex-col items-center justify-around'>
            <p className='text-lg font-medium'>
              Total Movies
            </p>
            <p className='text-4xl font-bold'>{totalMovies}</p>
          </div>
          <div className='h-[150px] bg-green-800 shadow-xl drop-shadow-xl p-4 rounded-xl flex flex-col items-center justify-around'>
            <p className='text-lg font-medium'>
              Total Comments
            </p>
            <p className='text-4xl font-bold'>{totalComments}</p>
          </div>
          <div className='h-[150px] bg-gradient-to-r from-blue-900 to-green-900  p-4 rounded-xl flex flex-col items-center justify-around'>
            <p className='text-lg font-medium'>
              Average Rating
            </p>
            <p className='text-4xl font-bold'>{averageRating}</p>
          </div>
        </div>

      </div>
      {/* Movie List */}
      <h2 className='text-3xl font-semibold text-white'>Movie List</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-900 p-6 rounded-xl shadow-lg h-full min-h-[180px] border-1 border-gray-600 cursor-pointer hover:bg-gray-950 hover:shadow-2xl transition-all duration-300 hover:border-blue-800">
            <Link href={"/movies/" + movie.id}>
              <h3 className="text-xl font-semibold mb-2 text-white">{movie.title}</h3>
              <p className="text-gray-400">{movie.description}</p>
              <div className="mt-4 flex items-center">
                <span className="text-yellow-500 mr-2">{movie.rating}</span>
                <span className="text-gray-400">({movie.comments} comments)</span>
              </div></Link>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Home