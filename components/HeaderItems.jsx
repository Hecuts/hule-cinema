const HeaderItems = ({ title, Icon, onClick }) => {
	return (
		<div
			onClick={onClick}
			className="group flex flex-col items-center w-12 cursor-pointer sm:w-20 hover:text-white"
		>
			<Icon className="h-8 mb-1 text-[#7c3aed] group-hover:animate-bounce group-hover:text-white group-hover:scale-105" />
			<p className="tracking-widest opacity-0 group-hover:opacity-100 group-hover:font-bold ">
				{title}
			</p>
		</div>
	);
};

export default HeaderItems;
