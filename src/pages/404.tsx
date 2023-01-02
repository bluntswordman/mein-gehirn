import { HeadFC, Link, PageProps } from "gatsby";
import React from "react";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="min-h-screen w-full container mx-auto flex flex-col justify-center items-center space-y-6">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-catalina-blue-900">404</h1>
        <p className="text-xl font-medium text-catalina-blue-700 capitalize">page not found</p>
      </div>
      <Link to="/" className="px-5 py-2 bg-catalina-blue-900 text-white rounded-lg hover:bg-catalina-blue-700 transition-all duration-300 font-semibold">Go home</Link>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
