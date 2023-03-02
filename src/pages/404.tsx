import { HeadFC, Link, PageProps } from 'gatsby';
import React from 'react';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen mx-auto space-y-6 bg-slate-900">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-6xl lg:text-9xl font-extrabold text-amber-500 select-none animate-pulse">
          404
        </h1>
        <p className="text-2xl font-medium capitalize text-amber-500 select-none">
          page not found
        </p>
      </div>
      <Link
        to="/"
        className="px-4 py-1.5 text-sm font-extrabold capitalize text-slate-900 border border-slate-700 transition-all duration-300 rounded-md bg-amber-500 hover:bg-amber-600"
      >
        Go home
      </Link>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
