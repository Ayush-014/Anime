import HeartIcon from "./Heart"
import './Card.css'
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
            <div className="glove-effect h-68 w-80 px-4 hover:scale-110 hover:text-sky-500 duration-200">
                <img src={logo} className="rounded-lg h-48 w-80 hover:shadow-lg hover:shadow-sky-500" />
                <div className="flex justify-between pt-2">
                    <p className="truncate w-56">{name}</p>
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