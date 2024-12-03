import "../../../src/style.css";
import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader.jsx';
import Movie from "../../components/Movie.jsx";
import Top10 from "../../components/Top10.jsx";
import Genres from '../../components/Genres.jsx'
import Navbar from '../../components/header/Navbar';

export default function Home() {
    const [content, setContent] = useState("");

    const handleButtonClick = (buttonContent) => {
        setContent(buttonContent);
    };
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api-aniwatch.onrender.com/anime/movie?page=1`);
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
    const Week = data.top10Animes.week.map((anime) => (
        <Top10
            name={anime.name}
            poster={anime.poster}
        />
    ))
    const Today = data.top10Animes.today.map((anime) => (
        <Top10
            name={anime.name}
            poster={anime.poster}
        />
    ))
    const Month = data.top10Animes.month.map((anime) => (
        <Top10
            name={anime.name}
            poster={anime.poster}
        />
    ))

    return (<>
        <Navbar />
        <div>
            <div className="pt-14 overflow-scroll scrollbar-hide w-screen h-screen">
                <div className="w-screen flex">
                    <div className="w-3/4 h-full flex flex-wrap">
                        {data.animes.map(anime => (
                            <Movie name={anime.name} logo={anime.poster} />
                        ))}
                    </div>
                    <div className="w-1/4 flex justify-center ">
                        <div>
                            <div className="flex justify-between pt-4">
                                <p>Top 10</p>
                                <div>
                                    <button onClick={() => handleButtonClick(Week)} className="px-1">
                                        Today
                                    </button>
                                    <button onClick={() => handleButtonClick(Today)} className="px-1">
                                        Week
                                    </button>
                                    <button onClick={() => handleButtonClick(Month)} className="px-1">
                                        Month
                                    </button>
                                </div>
                            </div>
                            <div>
                                {!content && (
                                    <div>
                                        <p>{Week}</p>
                                    </div>
                                )}
                                {content && (
                                    <div className='text-white'>
                                        <p>{content}</p>
                                    </div>
                                )}
                            </div>
                            <div>Genres</div>
                            <div className="flex w-80 flex-wrap justify-between">
                                {data.genres.map(anime => (
                                    <Genres name={anime} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}