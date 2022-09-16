import Image from "next/image";
import HeaderItems from "./HeaderItems";
import {
	HomeIcon,
	LightningBoltIcon,
	BadgeCheckIcon,
	CollectionIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
	return (
		<header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
			<Image
				className="object-contain"
				src="https://links.papareact.com/ua6"
				height="100"
				width="200"
				alt=""
			/>
			<div className="flex flex-grow justify-evenly max-w-2xl">
				<HeaderItems title="HOME" Icon={HomeIcon} />
				<HeaderItems title="TRENDING" Icon={LightningBoltIcon} />
				<HeaderItems title="VERIFIED" Icon={BadgeCheckIcon} />
				<HeaderItems title="COLLECTIONS" Icon={CollectionIcon} />
				<HeaderItems title="SEARCH" Icon={SearchIcon} />
				<HeaderItems title="ACCOUNT" Icon={UserIcon} />
			</div>
		</header>
	);
};

export default Header;
