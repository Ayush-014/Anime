import HeartIcon from "./Heart"
import StarIcon from "./Star";
import React, { useState } from 'react';
export default function Spotlight({ name, logo }) {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    const [isStarred, setIsStarred] = useState(false);

    const handleStarClick = () => {
        setIsStarred(!isStarred);
    };


    return (
        <>
            <div className="h-72 w-60 pt-4 px-6 hover:scale-110 hover:text-sky-500 duration-200">
                <img src={logo} className="rounded-lg h-60 w-56 hover:shadow-lg hover:shadow-sky-500" />
                <div className="flex justify-between">
                    <p className="truncate w-32">{name}</p>
                    <div>
                        <button className="pr-2" onClick={handleStarClick}>
                            <StarIcon filled={isStarred} />
                        </button>
                        <button onClick={handleLike}>
                            <HeartIcon filled={isLiked} />
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}