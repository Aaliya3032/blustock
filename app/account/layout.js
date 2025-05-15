import React from "react";
import AccountSidebar from "./component/account-sidebar";
import bg from '../../assets/profile_bg.jpg'

function Layout({ tabs }) {
	return (
		<div className="w-full relative "
		style={{
								backgroundImage: `url(${bg.src})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							  }}
		>
			<div className="absolute inset-0 bg-primary opacity-50"></div>
		<section className="relative py-16 w-[85%] mx-auto z-10">
			{/*end container*/}
			<div className="container relative">
				<div className="lg:flex">
					<AccountSidebar/>
					<div className="lg:w-3/4 md:px-3 mt-[30px] lg:mt-0">
						{tabs}
						 
					</div>
				</div>
				{/*end grid*/}
			</div>
			{/*end container*/}
		</section>
		</div>
	);
}

export default Layout;