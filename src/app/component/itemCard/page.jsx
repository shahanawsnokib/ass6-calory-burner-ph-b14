import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import ItemDetails from '../../itemDetails/page'
const ItemCard = ({ item }) => {
    const {
        id,
        name,
        image,
        muscleGroups,
        equipment,
        duration,
        caloriesBurned,
        rating,
    } = item || {};

    return (
       
 <Link href={`/item/${id}`}> 
        
        <div className="group   w-full max-w-sm overflow-hidden rounded-2xl border border-gray-800/70 bg-[#12151a] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#a6ff00]/40 hover:shadow-xl">

            {/* Exercise Image */}
            <div className="relative h-52 w-full overflow-hidden bg-gray-900">
                <Image
                    src={image}
                    alt={name || 'Exercise'}
                    fill
                    sizes="(max-width: 640px) 100vw, 384px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Card Content */}
            <div className="flex flex-col gap-4 p-5">

                {/* Muscle Group Badges */}
                {muscleGroups?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {muscleGroups.map((group, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-[#a6ff00] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-black"
                            >
                                {group}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title & Equipment */}
                <div>
                    <h2 className="line-clamp-1 text-xl font-black uppercase leading-tight tracking-tight text-white">
                        {name}
                    </h2>

                    <p className="mt-1 text-sm font-medium text-gray-400">
                        {equipment}
                    </p>
                </div>

                {/* Separator */}
                <div className="h-px w-full bg-gray-800/80" />

                {/* Stats */}
                <div className="flex items-center justify-between text-xs font-semibold text-gray-400">

                    {/* Duration */}
                    <div className="flex items-center gap-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>

                        <span>{duration} min</span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.431.67-.629 1.48-.629 2.222 0 2.234 1.83 4.05 4.09 4.05.518 0 1.026-.1 1.503-.284.14-.055.286-.092.433-.108a8.001 8.001 0 01-10.03 11.554A8.001 8.001 0 013.8 13.987c0-4.088 3.12-7.518 7.195-7.934.3-.03.602-.086.883-.186a1 1 0 00.517-3.314z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <span>{caloriesBurned} kcal</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                        </svg>

                        <span>{rating}</span>
                    </div>
                </div>
            </div>
        </div>

 </Link>
        
          /* <ItemDetails key={item.id} item ={item}></ItemDetails> */
    );
};

export default ItemCard;