import "../../../src/style.css";
import { useState } from 'react';
// import Navbar from '../components/header/Navbar'

export default function Main() {

    const [searchValue, setSearchValue] = useState('');
    
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
        console.log(event.target.value)
    };

    return (
        <div className='h-screen overflow-hidden'>
        <div className='flex mt-20 h-screen' >
            
            <div className="w-full flex justify-center h-screen">
                <div className="bg-violet-950 w-4/5 h-3/4 rounded-lg Background2">
                    <p className="text-3xl text-white p-16 pb-4 pt-20 font-bold">ANIMEVERSE</p>
                    <div className="flex">
                        <form action={`/search/${searchValue}`} className="p-16 pt-0 pb-2">
                            <input 
                                type="text" 
                                placeholder="Search" 
                                className="h-12 rounded-xl w-80 pl-6"
                                value={searchValue}
                                onChange={handleInputChange} 
                            />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-4 h-12 w-12">
                                <i class="ri-search-2-line"></i>
                            </button>
                        </form>
                    </div>
                    <p className="p-16 pt-0 w-2/3 text-white font-bold ">
                        Welcome to AnimeVerse, your one-stop destination for anime! Stream, review, and engage with fellow fans. Dive into a world of endless adventures and unforgettable stories. Join us and let the anime magic unfold!</p>
                    <a href="/home" className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg w-1/2 m-16 mt-0 p-4">Watch Full Site <i class="ri-arrow-right-line pl-2"></i></a>
                </div>
            </div>
        </div>
        </div>
        
    )
}