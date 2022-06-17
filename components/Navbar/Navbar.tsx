import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <nav className="flex fixed items-center w-full inset-0 bg-white z-50 h-16 sm:px-2 md:px-28">
      <div className="flex items-center gap-5">
        <Link href="/">
          <div className="w-44">
            <Image
              src="https://links.papareact.com/yvf"
              className="cursor-pointer"
              layout="responsive"
              width="100%"
              height="25"
              objectFit="contain"
              alt="Medium Logo"
              priority
            />
          </div>
        </Link>
        <div className="hidden md:inline-flex items-center justify-center gap-5 cursor-pointer">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center ml-auto gap-5 text-green-600">
        <h3 className="">Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-green-600">
          Get Started
        </h3>
      </div>
    </nav>
  );
};

export default Header;
