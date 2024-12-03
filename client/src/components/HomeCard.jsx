import React from 'react';

function Card({ name, date, logo, rate, link }) {
  return (
    <a
      href={link}
      className="p-4 m-4 bg-[#8990D4] rounded-sm flex items-center gap-7 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 ease-in-out group overflow-hidden w-full md:w-[420px]"
    >
      <figure className="w-[50%] h-40 flex justify-center items-center rounded-2xl group-hover:rounded-full border-4 border-orange-400 bg-gray-100 overflow-hidden transition-all duration-500 group-hover:scale-150 group-hover:translate-x-[130%]">
        <img className=" w-full h-full mx-auto cover" src={logo} alt={name} />
      </figure>

      <div className="text-white text-left group-hover:text-[#65738B] group-hover:translate-x-[-140%] transition-all duration-300 ease-in-out">
        <h2 className="text-xl font-bold w-28">{name}</h2>
        <p className="text-lg font-semibold group-hover:hidden">
          {rate}
        </p>
        <p className="text-lg font-semibold group-hover:hidden">
          {date}
        </p>
      </div>
    </a>
  );
}

export default Card;