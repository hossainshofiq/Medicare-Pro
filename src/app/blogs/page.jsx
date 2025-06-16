import React from 'react';
import Link from 'next/link';

const BlogsPage = () => {
    const blogPosts = [
        {
            id: 1,
            title: "5 Ways to Streamline Your Medical Practice with Medicare Pro",
            excerpt: "Discover how our platform can help you reduce administrative burdens and focus more on patient care.",
            date: "June 15, 2025",
            category: "Practice Management",
            readTime: "4 min read",
            image: "/images/blog1.jpg" // Replace with actual image path
        },
        {
            id: 2,
            title: "The Future of Healthcare Administration: Trends to Watch",
            excerpt: "Explore the emerging technologies transforming how medical practices operate and manage their workflows.",
            date: "May 28, 2025",
            category: "Healthcare Technology",
            readTime: "6 min read",
            image: "/images/blog2.jpg" // Replace with actual image path
        },
        {
            id: 3,
            title: "Maximizing Efficiency with Medicare Pro's Assistant Features",
            excerpt: "Learn how to effectively utilize our assistant management tools to boost your practice's productivity.",
            date: "April 10, 2025",
            category: "Product Features",
            readTime: "5 min read",
            image: "/images/blog3.jpg" // Replace with actual image path
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Medicare Pro Blog</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Insights, tips, and news about healthcare administration and practice management
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="h-48 bg-gray-200 flex items-center justify-center">
                            {/* Replace with actual image */}
                            <span className="text-gray-500">Featured Image</span>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-blue-600">{post.category}</span>
                                <span className="text-sm text-gray-500">{post.readTime}</span>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">{post.date}</span>
                                <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Want more healthcare insights?</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Subscribe to our newsletter to receive the latest articles and updates directly to your inbox.
                </p>
                <div className="max-w-md mx-auto flex">
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;