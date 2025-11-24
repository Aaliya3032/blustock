import { notFound, redirect } from "next/navigation";
import { getPostById } from "../_data/blogPosts";
import { isValidInstagramUrl, getFallbackInstagramUrl } from "@/lib/instagram-utils";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = getPostById(id);
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }
  
  return {
    title: `${post.title} | Blustock Consultants Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const post = getPostById(id);
  
  if (!post) {
    notFound();
  }
  
  // Validate Instagram URL before redirecting
  const instagramUrl = post.instagramUrl;
  
  if (isValidInstagramUrl(instagramUrl)) {
    // Valid URL - redirect to Instagram post
    redirect(instagramUrl);
  } else {
    // Invalid URL - redirect to Instagram profile as fallback
    redirect(getFallbackInstagramUrl());
  }
}

