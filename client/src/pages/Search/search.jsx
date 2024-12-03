import '../../../src/style.css';
import { Link, useParams } from 'react-router-dom';
import MovieCard from "/src/components/Moviecard"
import SideCard from "/src/components/SideCard";
import Loader from '../../components/Loader.jsx';
import Navbar from '../../components/header/Navbar';
import React, { useState, useEffect } from 'react';

const Search = () => {
    const { id } = useParams();

    const [pages, setPages] = useState(1);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("fetching")
                const response = await fetch(`https://api-aniwatch.onrender.com/anime/search?q=${id}&page=${pages}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                console.log("fetched and setting json")
                const json = await response.json();
                console.log("json set")
                setPages(json?.totalPages);
                setData(json);
                setIsLoading(false);
            } catch (error) {
                console.error(error.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        <div>Loading</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    const handlePageClick = async (page) => {
        if (page > pages) {
            page = 1
        }
        if (page < 1) {
            page = pages;
        }
        
        try {
            console.log("fetching")
            const response = await fetch(`https://api-aniwatch.onrender.com/anime/search?q=${id}&page=${page}`);
            
            console.log("fetched and json")
            const json = await response.json();
            console.log("json set")
            setData(json);
            setActivePage(page);
            setIsLoading(false);
        } catch (error) {
            console.error(error.message);
            setIsLoading(false);
        }
    };

    const cards = data ? data.animes.map((item) => (
        <Link to={`/show/${item.id}`} key={item.id}>
            <MovieCard
                key={item.id}
                id={item.id}
                name={item.name}
                poster={item.poster}
                rating={item.rating}
                episodes={item.episodes.sub}
                type={item?.type}
                duration={item.duration}
            />
            </Link>
    )) : null;


    const popularCard = data && data.mostPopularAnimes ? data.mostPopularAnimes.map((item) => (
        <Link to={`/show/${item.id}`} key={item.id}>
        <SideCard
            key={item.id}
            name={item.name}
            poster={item.poster}
            rate={item.type}
            episode={item.episodes.sub}
        />
        </Link>
    )) : null;

    return (<>
        <Navbar />
        <div className="bg-slate-900 h-screen w-screen overflow-hidden scrollbar-hide">
            <div className="u-non-blurred w-screen pt-20 h-full overflow-x-hidden relative scrollbar-hide">

                <div className="text-3xl px-8 font-bold text-slate-400">
                    SHOWING SEARCH RESULT FOR : <span className="font-serif"> {id.toUpperCase()} </span>
                </div>
                <div className="mx-4 flex w-screen h-max  min-h-[30rem]">
                    <div className="w-full flex h-full overflow-hidden">

                        <div className="relative flex w-full gap-3 flex-wrap py-4 overflow-x-scroll scrollbar-hide">
                            {cards}
                        </div>

                        <div className="w-[18%] px-2 overflow-hidden">
                            {data && data.mostPopularAnimes && data.mostPopularAnimes.length > 0 ? (<><p className="font-bold text-slate-300 text-lg mt-2 mx-2">MOST POPULAR</p>
                                <div className="mt-6 relative flex w-full gap-2 flex-wrap overflow-scroll scrollbar-hide">
                                    {popularCard}
                                </div>
                            </>
                            ) : null}
                        </div>

                    </div>

                </div>
                <div className="w-screen flex justify-center gap-[1px] mt-12">
                    <i class="ri-skip-left-fill text-2xl text-purple-400 cursor-pointer" onClick={() => handlePageClick(1)}></i>
                    <i class="ri-arrow-left-s-fill text-2xl text-purple-400 cursor-pointer" onClick={() => handlePageClick(activePage - 1)}></i>
                    <div className="flex flex-wrap gap-1 max-w-[70%]">
                    {[...Array(pages).keys()].map((page) => (
                        <div className={`page w-8 h-8 pt-1 text-sm text-center font-bold cursor-pointer rounded-lg ${activePage === page + 1 ? 'bg-gray-400' : 'bg-purple-400'}`}
                            key={page}
                            onClick={() => handlePageClick(page + 1)}>
                            {page + 1}
                        </div>
                    ))}
                    </div>
                    <i class="ri-arrow-right-s-fill text-2xl text-purple-400 cursor-pointer" onClick={() => handlePageClick( activePage + 1)}></i>
                    <i class="ri-skip-right-fill text-2xl text-purple-400 cursor-pointer" onClick={() => handlePageClick(pages)}></i>
                </div>
                <div className="w-screen h-20"></div>
            </div>
        </div>
    </>
    )
}

export default Search;