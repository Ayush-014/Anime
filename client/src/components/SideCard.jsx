import React from 'react';

const SideCard = ({ name, poster, rate, duration, episode, link }) => {
    return (

        <a href="#">
            <div className="relative h-full w-full">
                <div className="relative mx-8 group">
                    <img src={poster} className="h-32 w-full rounded-md" />
                    <div className="absolute w-max max-w-36 top-4 -left-2 truncate px-2 rounded-md backdrop-blur-2xl text-white font-bold opacity-0 duration-500 group-hover:opacity-100 group-hover:duration-300">{name}</div>
                    <i className="ri-play-circle-fill text-white text-4xl absolute bottom-12 left-7"></i>
                    <div className='absolute backdrop-blur-sm w-max  bottom-2 left-3 flex gap-1 items-baseline'>
                        {rate ? (<div className="bg-green-400 p-1 rounded-md text-white font-bold text-xs duration-500 group-hover:backdrop-blur-2xl">
                            {rate}</div>
                        ) : null}
                        {episode ? (<div className=" m-1 flex items-baseline"> <span><i class="ri-mic-fill text-white text-xs"></i></span><div className="w-max rounded-lg text-white font-semibold text-xs duration-500 group-hover:backdrop-blur-2xl">
                            {episode}</div> </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default SideCard;
