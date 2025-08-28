import CourseCard from "./_components/CourseCard";
import { getCourseList } from "@/queries/courses";

export const metadata = {
  title: 'Our Courses - Blustock Consultants',
  description: 'Explore our professional training courses designed to help you excel in your career and business.',
};

const CoursesPage = async () => {
  const courses = await getCourseList();
  return (
    <section
      id="courses"
      className="w-[85%] mx-auto container dark:bg-transparent py-12"
    >
      <h2 className="text-xl md:text-2xl font-medium text-primary">All Courses</h2>
      {/* header */}
      <div className="flex items-baseline justify-between  border-gray-200 border-b pb-6 flex-col gap-4 lg:flex-row">
        {/* <SearchCourse /> */}
        <div className="flex items-center justify-end gap-2 max-lg:w-full">
          {/* <SortCourse />
          <FilterCourseMobile categories={categories}/> */}
        </div>
      </div>
      {/* header ends */}
      {/* active filters */}
      {/* <ActiveFilters
        filter={{
          categories: ["offline"],
          price: ["free"],
          sort: "",
        }}
      /> */}

      <section className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Filters */}
          {/* these component can be re use for mobile also */}
          {/* <FilterCourse categories={categories}/> */}
          {/* Course grid */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-4">
            {courses.map((course) => {
              return <CourseCard key={course.id} course={course} />;
            })}
          </div>
        </div>
      </section>
    </section>
  );
};
export default CoursesPage;
