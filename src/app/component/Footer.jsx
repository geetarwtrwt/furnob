import React from "react";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="w-full border-t border-borderBg">
        <div className="containerBox ">
          <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
            <div className="w-full md:w-[50%]">
              <Link href="/" className="text-3xl font-bold text-primary">
                Furnob
              </Link>
              <p className="mt-6 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
              <div className="flex items-center gap-4 mt-4 text-2xl text-primary">
                <Link href="/" className="hover:-translate-y-1.5 duration-500">
                  <FaTwitter />
                </Link>
                <Link href="/" className="hover:-translate-y-1.5 duration-500">
                  <FaFacebook />
                </Link>
                <Link href="/" className="hover:-translate-y-1.5 duration-500">
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[50%] flex flex-wrap md:flex-nowrap justify-between">
              <div>
                <h2 className="font-semibold text-primary mb-5">RESOURCES</h2>
                <ul className="text-sm space-y-2 list-none">
                  <li>
                    <Link href="/">Documentation</Link>
                  </li>
                  <li>
                    <Link href="/">Tutorials</Link>
                  </li>
                  <li>
                    <Link href="/">Blog</Link>
                  </li>
                  <li>
                    <Link href="/">Community</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-primary mb-5">COMPANY</h2>
                <div className="text-sm space-y-2 list-none">
                  <li>
                    <Link href="/">About</Link>
                  </li>
                  <li>
                    <Link href="/">Careers</Link>
                  </li>
                  <li>
                    <Link href="/">Privacy</Link>
                  </li>
                  <li>
                    <Link href="/">Terms</Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <p className="py-4 text-center text-xs md:text-sm text-text/80">
            Copyright 2025 © <Link href="/">Furnob</Link>. All Right Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
