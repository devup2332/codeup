import { ProfileSidebar } from "../../components/organisms";

const ProfileContainer = () => {
	return (
		<div className="py-10 max-w-md max-w-11/12 m-auto lg:flex lg:max-w-4xl gap-28 items-center justify-between xl:max-w-6xl 2xl:max-w-7xl">
			<ProfileSidebar />
			<div>Content</div>
		</div>
	);
};

export default ProfileContainer;
