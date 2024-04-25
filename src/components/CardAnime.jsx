import { FaClock, FaStar } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { useState } from "react";

export default function CardAnime({ titulo, foto, sinopse, info }) {
  const [openCard, setOpenCard] = useState(false);

  const handleClick = () => {
    setOpenCard(!openCard);
  };

  return (
    <div className="max-w-xs h-fit bg-cor5 p-4 pt-2 my-5 rounded-xl border border-black dark:border-white dark:bg-red-900">
      <h1 className="h-24 grid place-content-center text-center text-2xl font-black my-2 p-5 bg-gray-100 text-black rounded-t-lg dark:bg-gray-700 dark:text-gray-100">
        {titulo}
      </h1>

      <div
        className="flex justify-center py-2 w-full"
        style={{ height: "300px" }}
      >
        <img src={foto} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="flex justify-evenly py-3 text-white">
        <span className="flex items-center gap-1">
          <FaClock /> {info.duracao ?? "erro"}
        </span>
        <span className="flex items-center gap-1">
          <BsCalendarDateFill /> {info.data ?? "erro"}
        </span>
        <span className="flex items-center gap-1">
          <FaStar /> {info.avaliacao == null ? "erro" : `${info.avaliacao}/10`}
        </span>
      </div>

      <div className="font-medium px-3 py-2 rounded-b-lg overflow-hidden bg-gray-100 text-black dark:bg-gray-700 dark:text-gray-100">
        <span
          className="flex items-center font-bold cursor-pointer"
          onClick={handleClick}
        >
          Ler a Sinopse {openCard ? <FiArrowUp /> : <FiArrowDown />}
        </span>
        <p
          className={`duration-150 text-justify ${
            openCard ? "h-auto pt-5" : "h-0 text-gray-100 dark:text-gray-700"
          }`}
        >
          {sinopse}
        </p>
      </div>
    </div>
  );
}
