import React from 'react';

function Card({ name, date, image, rate, episode, link }) {
  return (
    <a
      href={link}
      className="p-4 bg-[#8990D4] rounded-lg flex items-center gap-7 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 ease-in-out group overflow-hidden w-full md:w-[420px]"
    >
      <figure className="w-[50%] h-40 flex justify-center items-center rounded-2xl group-hover:rounded-full border-4 border-orange-400 bg-gray-100 overflow-hidden transition-all duration-500 group-hover:scale-150 group-hover:translate-x-[140%]">
        <img className=" w-full h-full mx-auto cover" src={image} alt={name} />
      </figure>

      <div className="text-white text-left w-max group-hover:text-[#65738B] backdrop-blur-3xl group-hover:translate-x-[-115%] transition-all duration-300 ease-in-out">
        <h2 className="text-xl font-bold max-w-44">{name}</h2>
        {rate ? (<p className="text-lg font-semibold italic group-hover:hidden">
          {rate ? `Rated: ${rate}` : "" }
        </p>
        ) : null}
        {episode ? (<p className="text-lg font-semibold italic group-hover:hidden">
          {episode ? `Episode: ${episode}` : "" }
        </p>
        ) : null}
        {date ? (<p className="text-md font-semibold group-hover:hidden">
          {date}
        </p>
        ) : null}
      </div>
    </a>
  );
}

export default Card;
