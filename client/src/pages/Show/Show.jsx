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
    }, [id]); // Added dependency array to refetch when `id` changes

    if (isLoading) {
        return <div> <Loader /> </div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    // const seasonCard = data && data.seasons ? data.seasons.map((item) => (
    //     <Link to={`/show/${item.id}`} key={item.id}>
    //         <Card id={item.id} name={item.name} image={item.poster} />
    //     </Link>
    // )) : null;

    // const popularCard = data && data.mostPopularAnimes ? data.mostPopularAnimes.map((item) => (
    //     <Link to={`/show/${item.id}`} key={item.id}>
    //         <SideCard
    //             key={item.id}
    //             name={item.name}
    //             poster={item.poster}
    //             rate={item.type}
    //             episode={item.episodes.sub}
    //         />
    //     </Link>
    // )) : null;

    // const cardList = showRecommended ? data?.recommendedAnimes : data?.relatedAnimes;
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
                    <div className="pl-8 mb-2 flex gap-16 static h-[61%] w-screen mt-[18%] flex-col flex-wrap overflow-x-scroll scrollbar-hide">
                        <div className="absolute w-full h-max bottom-0">
                            <div className="overflow-hidden">
                                <img src={data?.infoX[0]?.image}
                                    className="h-56 w-44 border-4 border-gray-700 absolute right-16 -top-48" />
                            </div>
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
                                    {/* <div className="bg-green-300 p-1 border border-green-400">{data?.infoX[1]?.quality}</div> */}
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
                    </div>
                    {/* {data && data.seasons && data.seasons.length > 0 ? (
                        <>
                            <p className="relative font-bold text-slate-300 text-lg mt-8 mx-2">SEASONS</p>
                            <div className="px-3 py-4 flex flex-col flex-wrap w-screen h-56 gap-3 border border-gray-500 rounded-lg overflow-hidden overflow-x-scroll scrollbar-hide">
                                {seasonCard}
                            </div>
                        </>
                    ) : null} */}
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
                        {/* <div className="w-[18%] px-2 overflow-hidden">
                            {data && data.mostPopularAnimes && data.mostPopularAnimes.length > 0 ? (
                                <>
                                    <p className="font-bold py-1 px-4 mt-6 mr-4 rounded-lg blurr text-center">MOST POPULAR</p>
                                    <div className="mt-6 relative flex w-full gap-2 flex-wrap overflow-scroll scrollbar-hide">
                                        {popularCard}
                                    </div>
                                </>
                            ) : null}
                        </div> */}
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

// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import Card from "/src/components/Card";
// import Review from "/src/components/Review";
// import MovieCard from "/src/components/Moviecard";
// import SideCard from "/src/components/SideCard";
// import Loader from '../../components/Loader.jsx';
// import Navbar from '../../components/header/Navbar';

// const Show = () => {
//     const { id } = useParams();
//     const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showRecommended, setShowRecommended] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`https://aniwatch-api-v1-0.onrender.com/api/related/${id}`);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 const json = await response.json();
//                 setData(json);
//                 setIsLoading(false);
//             } catch (error) {
//                 console.error(error.message);
//                 setError(error.message);
//                 setIsLoading(false);
//             }
//         };

//         fetchData();
//     }, [id]);

//     if (isLoading) return <div className="bg-red-700">Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     // Extract required fields
//     const malscore = data?.infoX[1]?.malscore || "N/A";
//     const japaneseName = data?.infoX[1]?.japanese || data?.infoX[0]?.jname || "Unknown";
//     const description = data?.infoX[0]?.desc || "No description available.";
//     const image = data?.infoX[0]?.image;

//     return (
//         <>
//             <Navbar />
//             <div className="bg-slate-900 h-screen w-screen overflow-hidden scrollbar-hide">
//                 <div className="pl-8 mb-2 flex flex-col gap-4">
//                     {/* Anime Image */}
//                     <img src={image} alt="Anime" className="h-56 w-44 border-4 border-gray-700" />

//                     {/* Anime Title */}
//                     <h1 className="text-4xl font-bold text-white">
//                         {data?.infoX[0]?.name} <span className="text-2xl">({japaneseName})</span>
//                     </h1>

//                     {/* MAL Score */}
//                     <div className="flex items-center">
//                         <span className="text-yellow-400 font-bold text-lg">MAL Score:</span>
//                         <span className="ml-2 text-white text-lg">{malscore}</span>
//                     </div>

//                     {/* Description */}
//                     <p className="text-white text-sm italic">{description}</p>

//                     {/* Genres */}
//                     <div className="flex flex-wrap gap-2">
//                         {data?.infoX[1]?.genre?.map((genre) => (
//                             <span key={genre} className="bg-green-400 p-1 text-xs rounded">
//                                 {genre}
//                             </span>
//                         ))}
//                     </div>

//                     {/* Navigation */}
//                     <div className="mt-4 flex gap-4">
//                         <button onClick={() => setShowRecommended(true)} className={`py-2 px-4 ${showRecommended ? 'bg-green-600' : 'bg-slate-600'}`}>
//                             Recommended
//                         </button>
//                         <button onClick={() => setShowRecommended(false)} className={`py-2 px-4 ${!showRecommended ? 'bg-green-600' : 'bg-slate-600'}`}>
//                             Related
//                         </button>
//                     </div>

//                     {/* Cards */}
//                     <div className="flex flex-wrap gap-4">
//                         {(showRecommended ? data?.recommendedAnimes : data?.relatedAnimes)?.map((item) => (
//                             <Link to={`/show/${item.id}`} key={item.id}>
//                                 <MovieCard {...item} />
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Show;