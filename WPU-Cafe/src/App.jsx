import './index.css'
import Menu from './Menu'
import { useState,useEffect } from 'react'
import Button from './UI/Button';

function App() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

  const fetchMenu = async (keyword = "") => {
    try {
      setLoading(true);
      const response = await fetch(`https://wpu-cafe.vercel.app/api/menu?search=${keyword}`);
      const result = await response.json();
      
      // Mengisi state dengan array data dari API
      setMenus(result.data || []);
    } catch (error) {
      console.error('Error fetching menu:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); 
    fetchMenu(keyword); 
  };

  return (
    <>
      <div className='bg-[#e0f2f7] font-serif text-[#008080] text-center min-h-screen'>
        <div className='p-5 mx-auto max-w-6xl flex flex-col justify-center gap-5'>
          <h1 className='font-bold text-4xl '>WPU Café</h1>
          <div>
            <form className='space-x-1.5' onSubmit={handleSearch}>
              <input 
              type="search" 
              placeholder='Cari Menu' 
              id='search-input' 
              value={keyword} 
              onChange={(e) => setKeyword(e.target.value)} 
              className='bg-white rounded-md p-1.5 min-w-2xs'
              />
              <Button>Cari</Button>
            </form>
            {loading ? (
              <p className="text-center p-4">Loading menu...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {menus.map((item) => (
                  <Menu key={item.id} imgUrl={item.image_url}>
                    {item.name}
                  </Menu>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
