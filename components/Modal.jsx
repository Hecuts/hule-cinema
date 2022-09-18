import { useState, useEffect } from "react";
import {
	PlusIcon,
	ThumbUpIcon,
	VolumeOffIcon,
	VolumeUpIcon,
	XIcon,
} from "@heroicons/react/solid";
import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { modalState, MovieState } from "../atoms/modalAtom";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";

//Styles
const modalClose = `modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]`;
const modalScreen = `fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide`;
const playerController = `absolute bottom-10 flex w-full items-center justify-between px-10`;
const playButton = `flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]`;
const playQuality = `item-center flex h-4 justify-center rounded border border-white/40 px-1.5 text-xs`;

const Modal = () => {
	const [showModal, setShowModal] = useRecoilState(modalState);
	const [movie, setMovie] = useRecoilState(MovieState);
	const [trailer, setTrailer] = useState("");
	const [genres, setGenres] = useState([]);
	const [muted, setMuted] = useState(true);

	useEffect(() => {
		if (!movie) return;

		const fetchMovie = async () => {
			const data = await fetch(
				`https://api.themoviedb.org/3/${
					movie?.media_type === "tv" ? "tv" : "movie"
				}/${movie?.id}?api_key=${
					process.env.NEXT_PUBLIC_API_KEY
				}&language=en-US&append_to_response=videos`
			)
				.then((response) => response.json())
				.catch((error) => console.log(error.message));

			if (data?.videos) {
				const index = data.videos?.results.findIndex(
					(element) => element.type === "Trailer"
				);

				setTrailer(data.videos?.results[index]?.key);
			}

			if (data?.genres) {
				setGenres(data.genres);
			}
		};
		fetchMovie();
	}, [movie]);

	const handleClose = () => {
		setShowModal(false);
	};

	return (
		<MuiModal open={showModal} onClose={handleClose} className={modalScreen}>
			<>
				<button className={modalClose} onClick={handleClose}>
					<XIcon className="h-6 w-6" />
				</button>

				<div className="relative pt-[56.25%]">
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${trailer}`}
						width="100%"
						height="100%"
						style={{ position: "absolute", top: "0", left: "0" }}
						playing
						muted={muted}
					/>
					<div className={playerController}>
						<div className="flex space-x-2">
							<button className={playButton}>
								<FaPlay className="h-7 w-7 text-black" />
								Play
							</button>

							<button className="modalButton">
								<PlusIcon className="h-6 w-6" />
							</button>

							<button className="modalButton">
								<ThumbUpIcon className="h-6 w-6" />
							</button>
						</div>
						<button className="modalButton" onClick={() => setMuted(!muted)}>
							{muted ? (
								<VolumeOffIcon className="h-6 w-6" />
							) : (
								<VolumeUpIcon className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
				<div className="flex space-x-16 rounded-b-md bg-[#181818] px-8 py-8">
					<div className="space-y-6 text-lg">
						<div className="item-center flex space-x-2 text-sm">
							<p className="font-semibold text-green-400">
								{movie?.vote_average * 10} % Match
							</p>
							<p className="font-light">
								{movie?.release_date || movie?.first_air_date}
							</p>
							<div className={playQuality}>HD</div>
						</div>

						<div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
							<p className="w-5/6">{movie?.overview}</p>
							<div className="flex flex-col space-y-3 text-sm">
								<div className="">
									<span className="text-[gray]">Genres: </span>
									{genres.map((genre) => genre.name).join(", ")}
								</div>
								<div>
									<span className="text-[gray]">Original Language: </span>
									{movie?.original_language}
								</div>
								<div>
									<span className="text-[gray]">Total Votes: </span>
									{movie?.vote_count}
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		</MuiModal>
	);
};

export default Modal;
