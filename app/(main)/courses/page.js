import CourseCard from "./_components/CourseCard";
import { getCourseList } from "@/queries/courses";

export const metadata = {
  title: 'Our Courses - Blustock Consultants',
  description: 'Explore our professional training courses designed to help you excel in your career and business.',
};

const CoursesPage = async () => {
  // ✅ Fetch courses server-side
  let preloadedCourses = [];
  try {
    preloadedCourses = await getCourseList();
  } catch (error) {
    console.error("Error preloading courses:", error);
  }
 
  return (
    <div className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] min-h-screen">
      <div className="w-[85%] mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="md:text-5xl text-3xl font-bold text-primary mb-4">
            Our Stock Market Courses
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive training programs designed to help you master stock trading and investment. 
            Learn from expert instructors and gain hands-on experience with real market scenarios.
          </p>
        </div>

        {/* Courses Grid */}
        <CourseCard preloadedData={preloadedCourses} />

        {/* Call to Action */}
        <div className="mt-12 text-center bg-primary/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Want to Learn More About Trading?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Explore our comprehensive blog articles with expert insights, trading tips, and detailed guides 
            to enhance your trading knowledge and skills.
          </p>
          <a href="/blog">
            <button className="bg-secondary text-white hover:bg-secondary/90 px-6 py-3 rounded-lg font-medium transition-colors">
              Visit Our Blog
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default CoursesPage;
