import React,{useEffect, useState} from 'react'
import axios from 'axios';

const Admin = () => {

    const [urls,setUrls] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            try{
                const res = await axios.get('/api/admin/urls',{
                    headers: {
                        Authorization: `Bearer supersecrettoken`
                    }
                });
                setUrls(res.data);
            }catch(err){
                console.error(err);
            }
        };
        fetchData();
    },[]);

  return (
    <div className="min-h-screen bg-[#DED3C4] p-6">
      <h2 className="text-2xl font-semibold mb-4">Admin - All Shortened URLs</h2>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white rounded shadow'>
            <thead>
                <tr>
                    <th className='py-2 px-4 border-b'>Short URL</th>
                    <th className='py-2 px-4 border-b'>Long URL</th>
                    <th className='py-2 px-4 border-b'>Clicks</th>
                </tr>
            </thead>
            <tbody>
                {urls.map((u) => (
                    <tr key={u._id}>
                        <td className='py-2 px-4 border-b break-all'>
                            {u.longUrl}
                            <a href={`${import.meta.env.VITE_BASE_URL}/${u.shortCode}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-600 underline'
                            >
                            {u.shortCode}
                            </a>
                        </td>
                        <td className="py-2 px-4 border-b break-all">{u.longUrl}</td>
                        <td className="py-2 px-4 border-b text-center">{u.clicks}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin
