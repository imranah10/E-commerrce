import React from "react";

function Cards({ item }) {
  return (
    <div>
      <div className="card h-[350px] sm:w-[300px] sm:h-[400px] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border flex flex-col justify-between">
        <figure className="h-[380px] overflow-hidden flex items-center justify-center">
          <img
            className="object-cover w-full h-full"
            src={item.image}
            alt={item.name}
          />
        </figure>
        <div className="card-body p-4 flex flex-col justify-between">
          <div>
            <h2 className="card-title text-lg font-semibold">
              {item.name}
              <div className="badge badge-secondary ml-2">{item.category}</div>
            </h2>
            <p className="text-sm mt-2">{item.title}</p>
          </div>
          <div className="card-actions justify-between items-center mt-4">
            <div className="badge badge-outline text-base">${item.price}</div>
            <div className="cursor-pointer px-3 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200 text-sm">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
