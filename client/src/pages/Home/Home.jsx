import "../../../src/style.css";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Spotlight from '../../components/Spotlight.jsx'
import Trending from '../../components/Trending.jsx'
// import Genres from '../../components/Genres.jsx'
import Loader from '../../components/Loader.jsx';
import Top10 from "../../components/Top10.jsx";
import Latest from '../../components/Latest.jsx';
import Navbar from '../../components/header/Navbar';

export default function Home() {
    const [buttonBg, setButtonBg] = useState("");
    const [content, setContent] = useState("");
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleButtonClick = (buttonContent) => {
        setContent(buttonContent);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://aniwatch-api-v1-0.onrender.com/api/parse");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);


    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const Week = data.UpcomingAnime.map((anime) => (
        <Link to={`/show/${anime.idani}`} name={anime.idani} key={anime.idani}>
            <Top10
                name={anime.name}
                poster={anime.imgAnime}
            />
        </Link>
    ));
    
    const Today = data.trend.map((anime) => (
        <Link to={`/show/${anime.id}`} name={anime.id}>
            <Top10
            name={anime.name}
            poster={anime.img}
        />
        </Link>
    ))
    const Month = data.slides.map((anime) => (
        <Link to={`/show/${anime.animeId}`} name={anime.animeId}>
            <Top10
            name={anime.name}
            poster={anime.imageAnime}
        />
        </Link>
    ))

    const setBg = (para) => {
        setButtonBg(para)
    }


    return (
        <>
            <Navbar />
            <div className="pt-12 Home h-screen overflow-scroll scrollbar-hide">
                <div className="flex flex-col w-screen">
                    <div className="h-96 w-screen">
                        <div className="h-20 text-2xl font-medium p-4 pl-8 text-white ">Spotlight</div>
                        <div className="h-72 flex flex-wrap overflow-scroll scrollbar-hide">
                            <div className="w-1/3 h-full text-7xl p-8 text-white">It's time for ANIME</div>
                            <div className="h-72 w-2/3 flex flex-wrap flex-col justify-center text-white">
                                
                                {data.slides.map(anime => (
                                    <Link to={`/show/${anime.animeId}`} name={anime.animeId}>
                                        <Spotlight name={anime.name} logo={anime.imageAnime} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-3/4">
                            <div className="h-20 text-2xl font-medium p-4 pl-8 text-white ">Trending</div>
                            <div className="h-80 w-full">
                                <div className="h-80 flex flex-wrap overflow-x-scroll scrollbar-hide flex-col text-white align-middle">
                                    {data.trend.map(anime => (
                                        <Link to={`/show/${anime.iD}`} name={anime.iD}>
                                        <Trending name={anime.name} logo={anime.imgAni} />
                                    </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="h-20 text-2xl font-medium p-4 pl-8 text-white ">Latest Episodes</div>
                            <div className="w-full">
                                <div className="flex flex-wrap text-white align-middle ml-4">
                                    {data.UpcomingAnime.map(anime => (
                                        <Link to={`/show/${anime.idani}`} name={anime.idani}>
                                        <Latest name={anime.name} logo={anime.imgAnime} />
                                    </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="h-20 text-2xl font-medium p-4 pl-8 text-white ">Upcoming Animes</div>
                            <div className="w-full">
                                <div className="flex flex-wrap text-white align-middle ml-4">
                                    {data.trend.map(anime => (
                                    <Link to={`/show/${anime.iD}`} name={anime.iD}>
                                        <Latest name={anime.name} logo={anime.imgAni} />
                                    </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 flex justify-center">
                            <div>
                                <div className="flex justify-between pt-4">
                                    <p className="text-2xl font-medium">Top 10</p>
                                    <div>
                                        <button onClick={() => { handleButtonClick(Week); setBg(1); }} className={`px-1 text-xl ${buttonBg == 1 ? 'bg-slate-400' : ''}`}>
                                            Today
                                        </button>
                                        <button onClick={() => { handleButtonClick(Today); setBg(2); }} className={`px-1 text-xl ${buttonBg == 2 ? 'bg-slate-400' : ''}`}>
                                            Week
                                        </button>
                                        <button onClick={() => { handleButtonClick(Month); setBg(3); }} className={`px-1 text-xl ${buttonBg == 3 ? 'bg-slate-400' : ''}`}>
                                            Month
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    {!content && (
                                        <div className="text-white">
                                            <div>{Week}</div>
                                        </div>
                                    )}
                                    {content && (
                                        <div className='text-white'>
                                            <p>{content}</p>
                                        </div>
                                    )}
                                </div>
                                {/* <div className="text-2xl font-medium my-4">Genres</div>
                                <div className="flex w-80 flex-wrap justify-between">
                                    {data.genres.map(anime => (
                                        <Genres name={anime} />
                                    ))}
                                </div> */}
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    )
};