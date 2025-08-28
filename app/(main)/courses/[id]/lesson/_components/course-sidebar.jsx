import { CourseProgress } from "@/components/course-progress";
import { DownloadCertificate } from "./download-certificate";
import { GiveReview } from "./give-review";
import { SidebarModules } from "./sidebar-modules";
import { getCourseDetails } from "@/queries/courses";
import { getLoggedInUser } from "@/lib/loggedin-user";
import { Watch } from "@/models/watch";
import { ObjectId } from "mongoose";
import { getReport } from "@/queries/reports";

export const CourseSidebar = async({courseId}) => {

  const course = await getCourseDetails(courseId)
  const loggedInUser = await getLoggedInUser()

  const report = await getReport({course:courseId,  student:loggedInUser.id})

  const totalCompletedModules = report?.totalCompletedModeules ? report.totalCompletedModeules.length : 0;

  const totalModules = course?.modules ? course.modules.length : 0;

  const totalProgress = (totalModules > 0) ? (totalCompletedModules/totalModules) * 100 : 0;
 
  const updatedModules = await Promise.all(course?.modules.map
    (async(module) => {
      const moduleId = module._id.toString()
      const lessons = module?.lessonIds

      const updatedLessons = await Promise.all(lessons.map
        (async(lesson) => {
          const lessonId = lesson._id.toString()
          const watch = await Watch.findOne({lesson: lessonId,module: moduleId,user: loggedInUser.id}).lean()
          if(watch?.state === 'completed'){
            lesson.state = 'completed'
          }
            return lesson;
        }))
        return module;
    }))

    const updatedAllModules = sanitizeData(updatedModules)

    function sanitizeData(data) {
  return JSON.parse(
    JSON.stringify(data, (key, value) => {
      if (value instanceof ObjectId) {
          return value.toString();
      }
      if (Buffer.isBuffer(value)) {
        return value.toString("base64")
      }
      return value;
    })
  );
}

  return (
    <>
      <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
        <div className="p-8 flex flex-col border-b">
          <h1 className="font-semibold">{course.title}</h1>
          {/* Check purchase */}
          {
            <div className="mt-10">
              <CourseProgress variant="success" value={totalProgress} />
            </div>
          }
        </div>
        <SidebarModules courseId={courseId} modules={updatedAllModules}/>
        <div className="w-full px-6">
            <GiveReview courseId={courseId} loginid={loggedInUser.id}/>
            <DownloadCertificate courseId={courseId} totalProgress={totalProgress}/>
          </div>
      </div>
      
    </>
  );
};
