import { Typography } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";

interface HomeCardProps {
	title: string;
	description: string;
	image_url: string;
}

const HomeCard = ({ title, description, image_url }: HomeCardProps) => {
	return (
		<div className="rounded-xl overflow-hidden relative">
			<img src={image_url} alt="" />
			<div className="top-0 left-0 absolute bg-black bg-opacity-40 w-full h-full p-12 grid gap-3">
				<Typography className="text-white" fontWeight={800}>
					{title}
				</Typography>
				<Typography className="text-white" fontSize={14}>
					{description.length > 80
						? `${description.substring(0, 80)} ...`
						: description.length}
				</Typography>
				<CustomButton className="justify-self-start" variant="text">Read Post</CustomButton>
			</div>
		</div>
	);
};

export default HomeCard;
