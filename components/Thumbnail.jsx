import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

import Image from "next/image";
const BASE_URL = "https://image.tmdb.org/t/p/original/";

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ result }, ref) => {
	return (
		<div
			ref={ref}
			className="relative group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 min-w-[28rem]"
		>
			<Image
				layout="responsive"
				className="rounded-sm object-cover md:rounded"
				src={
					`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
					`${BASE_URL}${result.poster_path}`
				}
				height={1080}
				width={1920}
				alt=""
			/>
			<div className="p-2">
				{/* <p className="truncate max-w-md">{result.overview}</p> */}
				<div className="flex justify-between">
					<p className="min-w-md">
						<span className="text-[gray]">Original Language: </span>
						{result.original_language}{" "}
					</p>
					<p>
						<span className="text-[gray]">Popularity: </span>
						{result.popularity}
					</p>
				</div>

				<h2 className="absolute top-2 left-4 text-2xl md:text-xl font-semibold group-hover:text-white transition-all duration-100 ease-in-out group-hover:font-bold">
					{result.title || result.original_name}
				</h2>
				<p className="flex item-center opacity-0 group-hover:opacity-100 text-[#7c3aed]">
					{result.media_type && `${result.media_type} .`}{" "}
					{result.release_date || result.first_air_date} .{" "}
					<ThumbUpIcon className="h-5 w-5 mx-2 group-hover:animate-pulse" />{" "}
					{result.vote_count}
				</p>
			</div>
		</div>
	);
});

export default Thumbnail;
