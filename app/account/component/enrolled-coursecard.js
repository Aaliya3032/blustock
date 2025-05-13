import { Badge } from '@/components/ui/badge'
import { getCategoryDetails } from '@/queries/categories'
import { BookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EnrolledCourseCard = async({enrollment}) => {
	console.log(enrollment,"klhefs");
	
	const courseCategory = await getCategoryDetails(enrollment?.course?.category?._id);
  return (
    <div
					className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full"
				>
					<div className="relative w-full aspect-video rounded-md overflow-hidden">
						<Image
							src={`/assets/${enrollment?.course?.thumbnail}`}
							alt={enrollment?.course?.title}
							className="object-cover"
							fill
						/>
					</div>
					<div className="flex flex-col pt-2">
						<Link href={`/courses/${enrollment?.course?._id}`} className="text-lg md:text-base font-medium group-hover:text-sky-700 line-clamp-2">
						{enrollment?.course?.title}
						</Link>
						<span className="text-xs text-muted-foreground">{courseCategory.title}</span>
						<div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
							<div className="flex items-center gap-x-1 text-slate-500">
								<BookOpen className="w-4" />
								<span>{enrollment?.course?.modules?.length} Chapters</span>
							</div>
						</div>
						<div className="border-b pb-2 mb-2">
							<div className="flex items-center justify-between">
								<span className="text-md md:text-sm font-medium text-slate-700">
									Total Modules: {enrollment?.course?.modules?.length}
								</span>
								<div className="text-md md:text-sm font-medium text-slate-700">
									Completed Modules <Badge variant="success">05</Badge>
								</div>
							</div>
							<div className="flex items-center justify-between mt-2">
								<span className="text-md md:text-sm font-medium text-slate-700">
									Total Quizzes: 10
								</span>
								<div className="text-md md:text-sm font-medium text-slate-700">
									Quiz taken <Badge variant="success">10</Badge>
								</div>
							</div>
							<div className="flex items-center justify-between mt-2">
								<span className="text-md md:text-sm font-medium text-slate-700">
									Mark from Quizzes
								</span>
								<span className="text-md md:text-sm font-medium text-slate-700">
									50
								</span>
							</div>
							<div className="flex items-center justify-between mt-2">
								<span className="text-md md:text-sm font-medium text-slate-700">
									Others
								</span>
								<span className="text-md md:text-sm font-medium text-slate-700">
									50
								</span>
							</div>
						</div>
						<div className="flex items-center justify-between mb-4">
							<span className="text-md md:text-sm font-medium text-slate-700">
								Total Marks
							</span>
							<span className="text-md md:text-sm font-medium text-slate-700">
								100
							</span>
						</div>
					</div>
				</div>
  )
}

export default EnrolledCourseCard