// Blog posts data - Modular structure
// Each post links to an Instagram post instead of having full content
//
// IMPORTANT: Update Instagram URLs with actual post links
// To get Instagram post URL:
// 1. Open the Instagram post
// 2. Click the three dots (⋯) menu
// 3. Select "Copy Link"
// 4. Paste the URL in the instagramUrl field below
// Example: "https://www.instagram.com/p/ABC123xyz456/"

export const blogPosts = [
  {
    id: "how-to-start-stock-trading-india",
    title: "How to Start Stock Trading in India: Complete Beginner's Guide",
    description: "A comprehensive guide for beginners who want to start trading stocks in India. Learn about demat accounts, trading platforms, and essential first steps.",
    date: "2025-01-15",
    readTime: "12 min read",
    category: "Beginner's Guide",
    instagramUrl: "https://www.instagram.com/blustockconsultants/p/YOUR_POST_ID_1/"
  },
  {
    id: "technical-vs-fundamental-analysis",
    title: "Technical Analysis vs Fundamental Analysis: Which is Better?",
    description: "Understand the key differences between technical and fundamental analysis, and learn when to use each approach for better trading decisions.",
    date: "2025-01-10",
    readTime: "10 min read",
    category: "Trading Strategies",
    instagramUrl: "https://www.instagram.com/blustockconsultants/p/YOUR_POST_ID_2/"
  },
  {
    id: "top-10-stock-market-mistakes",
    title: "Top 10 Stock Market Mistakes Beginners Make (And How to Avoid Them)",
    description: "Learn from common mistakes that new traders make and discover how to avoid costly errors in your trading journey.",
    date: "2025-01-05",
    readTime: "15 min read",
    category: "Trading Tips",
    instagramUrl: "https://www.instagram.com/blustockconsultants/p/YOUR_POST_ID_3/"
  },
  {
    id: "understanding-candlestick-patterns",
    title: "Understanding Candlestick Patterns: A Visual Guide for Traders",
    description: "Master the art of reading candlestick patterns to identify market trends and make informed trading decisions.",
    date: "2024-12-28",
    readTime: "18 min read",
    category: "Technical Analysis",
    instagramUrl: "https://www.instagram.com/blustockconsultants/p/YOUR_POST_ID_4/"
  },
  {
    id: "build-diversified-portfolio",
    title: "How to Build a Diversified Portfolio in 2025",
    description: "Learn the principles of portfolio diversification and how to create a balanced investment portfolio that minimizes risk.",
    date: "2024-12-20",
    readTime: "14 min read",
    category: "Investment Strategy",
    instagramUrl: "https://www.instagram.com/blustockconsultants/p/YOUR_POST_ID_5/"
  },
  {
    id: "risk-management-trading",
    title: "Risk Management in Stock Trading: Essential Strategies",
    description: "Discover proven risk management techniques that professional traders use to protect their capital and maximize returns.",
    date: "2024-12-15",
    readTime: "16 min read",
    category: "Risk Management",
    instagramUrl: "https://www.instagram.com/blustockconsultants/p/YOUR_POST_ID_6/"
  },
  {
    id: "best-stock-market-books",
    title: "Best Stock Market Books Every Trader Should Read",
    description: "A curated list of must-read books for anyone serious about learning stock trading and investment strategies.",
    date: "2024-12-10",
    readTime: "8 min read",
    category: "Education",
    instagramUrl: "https://www.instagram.com/blustockconsultants/p/YOUR_POST_ID_7/"
  },
  {
    id: "day-trading-vs-swing-trading",
    title: "Day Trading vs Swing Trading: Which Suits You?",
    description: "Compare day trading and swing trading approaches to find the style that matches your personality, schedule, and financial goals.",
    date: "2024-12-05",
    readTime: "12 min read",
    category: "Trading Styles",
    instagramUrl: "https://www.instagram.com/blustockconsultants/p/YOUR_POST_ID_8/"
  },
  {
    id: "read-financial-statements",
    title: "How to Read Financial Statements: A Beginner's Guide",
    description: "Learn how to analyze balance sheets, income statements, and cash flow statements to evaluate company performance.",
    date: "2024-11-28",
    readTime: "20 min read",
    category: "Fundamental Analysis",
    instagramUrl: "https://www.instagram.com/blustockconsultants/p/YOUR_POST_ID_9/"
  },
  {
    id: "stock-market-psychology",
    title: "Stock Market Psychology: Controlling Emotions While Trading",
    description: "Understand the psychological aspects of trading and learn how to control emotions that can lead to poor trading decisions.",
    date: "2024-11-20",
    readTime: "14 min read",
    category: "Trading Psychology",
    instagramUrl: "https://www.instagram.com/blustockconsultants/p/YOUR_POST_ID_10/"
  },
  {
    id: "options-trading-basics",
    title: "Options Trading Basics: A Complete Guide for Beginners",
    description: "Get started with options trading by understanding calls, puts, strike prices, and how to use options in your trading strategy.",
    date: "2024-11-15",
    readTime: "22 min read",
    category: "Options Trading",
    instagramUrl: "https://www.instagram.com/blustockconsultants/p/YOUR_POST_ID_11/"
  },
  {
    id: "sector-analysis-guide",
    title: "Sector Analysis Guide: Identifying Winning Industries",
    description: "Learn how to analyze different market sectors and identify industries with the best growth potential for your investments.",
    date: "2024-11-10",
    readTime: "16 min read",
    category: "Market Analysis",
    instagramUrl: "https://www.instagram.com/blustockconsultants/p/YOUR_POST_ID_12/"
  }
];

// Helper function to get post by ID
export function getPostById(id) {
  return blogPosts.find(post => post.id === id);
}

// Helper function to get all posts
export function getAllPosts() {
  return blogPosts;
}

