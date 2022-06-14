import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <nav className="flex items-center flex-row py-4">
      <div className="flex items-center gap-5">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://links.papareact.com/yvf"
            className="w-44 object-contain cursor-pointer"
            alt="Medium Logo"
          />
        </Link>
        <div className="hidden md:inline-flex items-center justify-center gap-5 cursor-pointer">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-5 ml-auto text-green-600">
        <h3 className="">Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-green-600">
          Get Started
        </h3>
      </div>
    </nav>
  );
};

export default Header;
