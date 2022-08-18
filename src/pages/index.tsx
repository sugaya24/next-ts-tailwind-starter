import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col text-center">
      <div className="flex flex-grow flex-col items-center">
        <div className="flex h-full items-center">
          <div className="flex flex-col gap-4">
            <h1 className="w-full text-3xl font-bold">Next.js Starter</h1>
            <ul>
              <li>🔥 TypeScript</li>
              <li>💎 tailwindcss</li>
              <li>📏 ESLint</li>
              <li>💖 prettier</li>
              <li>🐶 Husky</li>
              <li>🚫 Lint-staged</li>
              <li>🚓 commitlint</li>
            </ul>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="mx-auto my-4 inline-block rounded-lg border border-cyan-600 bg-transparent px-6 py-2 font-bold text-cyan-600 transition duration-150 ease-in-out hover:border-transparent hover:bg-cyan-600 hover:text-white"
      >
        <a href="#">GitHub</a>
      </button>
    </div>
  );
};

export default Home;
