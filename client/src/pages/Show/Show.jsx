import '../../../src/style.css';
import { Link, useParams } from 'react-router-dom';
import Card from "/src/components/Card";
import Review from "/src/components/Review";
import MovieCard from "/src/components/Moviecard";
import SideCard from "/src/components/SideCard";
import Loader from '../../components/Loader.jsx';
import Navbar from '../../components/header/Navbar';
import React, { useState, useEffect } from 'react';

const Show = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showRecommended, setShowRecommended] = useState(true);
    const toggleContent = () => {
        setShowRecommended((prev) => !prev);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("fetching")
                const response = await fetch(`https://aniwatch-api-v1-0.onrender.com/api/related/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                console.log("fetched and json setting")
                const json = await response.json();
                console.log("json setter")
                setData(json);
                console.log("json setted")
                setIsLoading(false);
                console.log("done")
            } catch (error) {
                console.error(error.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (isLoading) {
        return <div> <Loader /> </div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    const cards = data?.recommendation?.map((item) => (
        <Link to={`/show/${item.xid}`} key={item.xid}>
            <MovieCard
                key={item.xid}
                id={item.xid}
                name={item.name}
                poster={item.image}
                rating={item.total}
                episodes={item.sub}
                type={item.format}
                duration={item.duration}
            />
        </Link>
    )) || null;
    
    return (
        <>
            <Navbar />
            <div className="bg-slate-900 h-screen w-screen overflow-hidden scrollbar-hide">
                <div className="u-non-blurred w-screen h-full overflow-x-hidden relative scrollbar-hide mt-16">
                    <div className="pl-8 mb-2 flex gap-16 static mt-[10%] flex-col flex-wrap overflow-x-scroll scrollbar-hide">
                        <div className=" w-[97%] h-max flex">
                            
                            <div>
                            <div className="font-bold text-green-300 m-2">#1 Most Popular</div>
                            <div className="text-4xl font-bold text-white m-2">{data?.infoX[0]?.name}
                                <span className="text-2xl"> ( {data?.infoX[1]?.japanese} )</span>
                            </div>
                            <div className="m-2 flex gap-6">
                                {data?.infoX[1]?.malscore > 0 ? (
                                    <div>
                                        {[...Array(Math.round(data?.infoX[1]?.malscore / 2))].map((_, index) => (
                                            <i key={index} className="ri-star-fill mr-1 text-yellow-200"></i>
                                        ))}
                                    </div>
                                ) : null}
                                <div className="flex gap-1">
                                    <div className="bg-green-400 p-1 rounded-l-lg"><i className="ri-play-circle-fill"></i>{data?.infoX[1]?.statusAnime.toUpperCase()}</div>
                                    <div>
                                        {data?.infoX[1]?.premired ? (
                                            <div className="bg-green-400 p-1 rounded-r-lg"><i className="ri-calendar-fill"></i>{data?.infoX[1]?.premired}</div>
                                        ) : data?.infoX[1]?.aired ? (
                                            <div className="bg-green-400 p-1 rounded-r-lg"><i className="ri-calendar-fill"></i>{data?.infoX[1]?.aired}</div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                            <div className="text-white m-2 w-[95%] text-sm italic backdrop-blur-lg"> {data?.infoX[0]?.desc} </div>
                            <div className="m-2 flex gap-[3px]">
                                <div className="bg-green-400 p-[1px] text-xs rounded-l-lg">{data?.infoX[1]?.genre[0]}</div>
                                {data?.infoX[1]?.genre.slice(1, -1).map((genre, index) => (
                                    <div key={genre} className="bg-green-400 p-[1px] text-xs">{genre}</div>
                                ))}
                                <div className="bg-green-400 p-[1px] text-xs rounded-r-lg">{data?.infoX[1]?.genre.slice(-1)}</div>
                            </div>
                            <div className="m-2 my-3 flex gap-2">
                                <a href="#" className="flex p-2 px-3 text-white font-bold bg-green-600 rounded-lg hover:scale-105 group">
                                    <div> Watch Now </div>
                                    <i className="ri-play-large-fill ml-2 group-hover:scale-125"></i>
                                </a>
                                <a href={data?.infoX[2]?.animechar[0]?.length > 0 ? data?.infoX[2]?.animechar[0].source : '#'} className="flex p-2 px-3 text-white font-bold border border-green-600 rounded-lg hover:scale-105 group">
                                    <div> Trailer</div>
                                    <i className="ri-play-circle-line ml-2 group-hover:scale-110"></i>
                                </a>
                                <div className="flex p-2 px-3 text-white font-bold bg-green-600 rounded-lg hover:scale-105 group">
                                    <div>Wishlist</div>
                                    <i className="ri-add-line ml-1 group-hover:scale-125"></i>
                                </div>
                            </div>
                            </div>

                            {/* <div className="overflow-hidden"> */}
                                <img src={data?.infoX[0]?.image}
                                    className="h-full p-4 w-[50%] border-4 border-gray-700" />
                            {/* </div> */}

                        </div>
                    </div>
                    
                    <div className="mt-8 mx-4 flex w-screen h-max min-h-[30rem]">
                        <div className="w-full h-full overflow-hidden">
                            <button className="mt-2 rounded-lg overflow-hidden">
                                <div className="flex">
                                    <div className={`py-2 px-4 mb-0 font-bold text-sm ${showRecommended ? 'bg-slate-400' : 'blurr'}`} onClick={showRecommended ? null : toggleContent}>Recommended</div>
                                    <div className={`py-2 px-4 mb-0 font-bold text-sm ${showRecommended ? 'blurr' : 'bg-slate-400'}`} onClick={showRecommended ? toggleContent : null}>Related</div>
                                </div>
                            </button>
                            <div className="relative flex w-full gap-3 flex-wrap py-4 overflow-x-scroll scrollbar-hide">
                                {cards}
                            </div>
                        </div>
                      </div>
                    <div>
                        <Review />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Show;