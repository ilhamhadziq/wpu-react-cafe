import './index.css'

function App() {
  return (
    <>
      <body className='bg-[#e0f2f7] font-serif text-[#008080] text-center'>
        <div className='p-5 my-5 mx-auto max-w-6xl flex flex-col justify-center gap-5'>
          <h1 className='font-bold text-4xl '>WPU Café</h1>
          <div>
            <form action="" className='space-x-1.5'>
              <input type="search" placeholder='Cari Menu' id='search-input' className='bg-white rounded-md p-1.5'/>
              <button class="search-button px-4 py-1.5 rounded-md bg-[#008080] text-white">Cari</button>
            </form>
          </div>
        </div>
      </body>
    </>
  )
}

export default App
