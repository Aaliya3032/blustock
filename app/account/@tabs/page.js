
import { auth } from "@/auth";
import ChangePassword from "../component/change-password";
import ContactInfo from "../component/contact-info";
import PersonalDetails from "../component/personal-details";
import { getUserByEmail } from "@/queries/users";

async function Profile() {
	 const session = await auth()
	
		const loggedInUser = await getUserByEmail(session?.user?.email);
		// console.log("User--===",loggedInUser);
	return (
		<>
		<PersonalDetails userInfo={loggedInUser}/>	
		<div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
					<ContactInfo userInfo={loggedInUser}/>
					<ChangePassword email={loggedInUser?.email}/>
				</div>
				{/*end row*/}
			</div>
		</>
	);
}

export default Profile;