import React from 'react';

const Hero = () => {
  return (
    <div className="flex items-center justify-between bg-yellow-400 border border-y-black py-10 lg:py-0 mt-16">
      <div className="px-8 space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{' '}
          is a place to write, read, and connect
        </h1>
        <h2 className="text-xl">
          It&apos;s easy and free to post your thinking on any topic and connect
          with millions of readers.
        </h2>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="hidden md:inline-flex h-32 lg:h-full"
        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        alt="Medium Logo"
      />
    </div>
  );
};

export default Hero;
