import { useState } from 'react';
import axios from 'axios';
import appLogo from './assets/logo.svg';

const Homepage = () => {
    const [longUrl, setLongUrl] = useState('');
      const [shortUrl, setShortUrl] = useState('');
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!longUrl) return;
        try {
            console.log(import.meta.env.VITE_BACKEND_URL);
          const res = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/shorten`,
            { longUrl }
          );
    
          setShortUrl(res.data.shortUrl);
        } catch (err) {
          console.error(err);
        }
      };
  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#DED3C4] p-6">
            <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-4 mb-6">
              <img
                src={appLogo}
                alt="App Logo"
                className="w-20 h-20 object-contain"
              />
              <h2 className="text-xl sm:text-2xl font-semibold mt-2 sm:mt-0">
                URL Shortener
              </h2>
            </div>
      
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center w-full max-w-md space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Enter long URL"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#77BEF0] placeholder-gray-500"
              />
              <br />
              <button
                type="submit"
                className="px-5 py-3 bg-[#1B3C53] text-white rounded-md shadow hover:bg-[#456882] transition"
              >
                Shorten
              </button>
            </form>
      
            {shortUrl && (
              <div className='result p-5'>
                <p className='font-medium'>Short URL:</p>
                <a href={shortUrl} target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>
                  {shortUrl}
                </a>
              </div>
            )}
    </div>
  )
}

export default Homepage
