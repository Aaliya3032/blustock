// CODE FOR BACKGROUND BLUR WITH AN IMAGE 

//  <div
//               className="sm:w-1/2 w-full relative flex items-center justify-center text-white p-4 rounded-xl overflow-hidden"
//               style={{
//                 backgroundImage: `url(${longterm.src})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-primary opacity-60"></div>
//               <div className="relative z-10">
//                 <div className="flex flex-row gap-2 justify-center">
//                   <MdMoreTime className="text-xl mt-1" />
//                   <h2 className="text-xl font-bold">
//                     Long Term Investment Guidance
//                   </h2>
//                 </div>
//                 <p className="mt-2 text-sm items-start">
//                   We help you build a strong and diverse investment portfolio
//                   for long-term growth. Our advice ensures your investments
//                   match your financial goals.
//                 </p>
//               </div>
//             </div>



// CODE FOR BACKGROUND BLUR WITH AN IMAGE ON HOVER

//  <div className="relative sm:w-1/2 w-full flex items-center justify-center p-4 rounded-xl hover:text-white text-primary overflow-hidden transition-all duration-500 group">
//               {/* Background Image - Initially Hidden, Appears on Hover */}
//               <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
//                 <Image
//                   src={portfolio}
//                   alt="Portfolio"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-xl"
//                 />
//               </div>

//               {/* Dark Overlay - Always Present, Becomes Lighter on Hover */}
//               <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

//               {/* Content */}
//               <div className="relative z-10 text-center">
//                 <div className="flex flex-row gap-2 justify-center">
//                   <FaPenFancy className="text-xl mt-1" />
//                   <h2 className="text-xl font-bold ">Portfolio Corrections</h2>
//                 </div>
//                 <p className="mt-2 text-sm">
//                   We optimize your current investments by analyzing your
//                   portfolio and suggesting changes to better align with your
//                   financial goals, ensuring top performance.
//                 </p>
//               </div>
//             </div>


// #cecece