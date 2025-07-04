import React from 'react'
import Image from "next/image";
import Menu from './account-menu';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getUserByEmail } from '@/queries/users';


const AccountSidebar = async() => {
    const session = await auth()
    if (!session?.user) {
        redirect("/login");
    }

    const loggedInUser = await getUserByEmail(session?.user?.email);
    // console.log("User--===",loggedInUser);

  return (
    <div className="lg:w-1/4 md:px-3">
						<div className="relative">
							<div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
								<div className="profile-pic text-center mb-5">
									<input
										id="pro-img"
										name="profile-image"
										type="file"
										className="hidden"
										 
									/>
									<div>
										<div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden">
											<Image
												src={loggedInUser?.profilePicture}
												className="w-full h-full object-cover rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
												id="profile-banner"
												alt={`${loggedInUser?.firstName}`}
												width={112}
												height={112}
											/>
											<label
												className="absolute inset-0 cursor-pointer"
												htmlFor="pro-img"
											/>
										</div>
										<div className="mt-4">
											<h5 className="text-lg font-semibold text-primary">
												{`${loggedInUser?.firstName} ${loggedInUser?.lastName}`}
											</h5>
											<p className="text-gray-600 text-sm">
												{loggedInUser?.email}
											</p>
											<p className="text-slate-700 text-sm font-bold">
												Role: {loggedInUser?.role}
											</p>
										</div>
									</div>
								</div>
								<div className="border-t border-gray-100 dark:border-gray-700">
									<Menu/>
								</div>
							</div>
						</div>
					</div>
  )
}

export default AccountSidebar