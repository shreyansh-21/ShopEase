import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div className=''>
          <img className='mb-5 w-32' src={assets.logo} alt='logo' />
          <p className='w-full md:w-2/3 text-gray-600'>
            Stay connected with ShopEase Clothes for the latest trends, exclusive
            offers, and style inspiration. Follow us on social media and
            subscribe to our newsletter for updates and special promotions.
          </p>
        </div>
        <div>
          <p className='font-medium text-xl mb-5'>COMPANY</p>

          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className='font-medium text-xl mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>8005XXXXXX</li>
            <li>Shreyansh21xx@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className=''>
        <hr />
        <p className='py-5 text-sm text-center'>
          {" "}
          Copyright {new Date().getFullYear()} Shopease - All Right Reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
