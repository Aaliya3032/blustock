import CourseCard from "./_components/CourseCard";

export const metadata = {
  title: 'Our Courses - Blustock Consultants',
  description: 'Explore our professional training courses designed to help you excel in your career and business.',
};

const CoursesPage = () => {
 
  return (
     <section className="w-[85%] mx-auto container dark:bg-transparent py-12">
      <h2 className="text-xl md:text-2xl mb-4 font-medium text-primary">
        All Courses
      </h2>
      <CourseCard />
    </section>
  );
};
export default CoursesPage;
