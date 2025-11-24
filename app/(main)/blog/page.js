import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { getAllPosts } from "./_data/blogPosts";
import InstagramLink from "./_components/InstagramLink";

export const metadata = {
  title: "Stock Market Blog - Trading Tips, Guides & Insights | Blustock Consultants",
  description: "Learn stock trading, investment strategies, and market analysis with our comprehensive blog articles. Expert insights for beginners and advanced traders.",
  keywords: [
    "stock market blog",
    "trading tips",
    "investment guides",
    "stock market education",
    "trading strategies",
    "market analysis"
  ],
};

export default function BlogPage() {
  const blogPosts = getAllPosts();

  return (
    <div className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] min-h-screen">
      <div className="w-[85%] mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="md:text-5xl text-3xl font-bold text-primary mb-4">
            Stock Market Blog & Resources
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Expert insights, trading tips, and comprehensive guides to help you succeed in the stock market. 
            Whether you're a beginner or an experienced trader, find valuable content to enhance your trading journey.
          </p>
          <p className="text-sm text-gray-600 mt-4">
            Follow us on <Link href="https://www.instagram.com/blustockconsultants/" target="_blank" className="text-secondary font-semibold hover:underline inline-flex items-center gap-1">
              <Instagram className="w-4 h-4" /> Instagram
            </Link> for daily trading insights and tips!
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl mb-2 line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <InstagramLink instagramUrl={post.instagramUrl} />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-primary/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join our comprehensive stock market courses and learn from expert instructors. 
            Get hands-on experience with real market scenarios and build your trading skills.
          </p>
          <Link href="/courses">
            <Button className="bg-secondary text-white hover:bg-secondary/90">
              Explore Our Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

