import React, { useState } from 'react';
import { Package, Menu as MenuIcon, X, CircleUserRound } from 'lucide-react';
import UserBar from './utility/UserBar';
import {NavLink} from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='col-lg-8 col-md-8 col-sm-12 px-[2rem] py-[2rem] border-l-1 border-[#c9c9c9ca] border-b-[1px] border-r-1'>
      <div className='flex justify-between items-center'>
        {/* Left Icon */}
        <span className='text-red-400'>
          <Package size={20} strokeWidth={1.75} />
        </span>

        {/* Desktop Nav */}
        <ul className='hidden sm:flex gap-[3rem] text-[1.1rem] text-gray-600'>
          <NavLink to="/" className="hover:text-red-400" style={(e) => {return {color: e.isActive? "red": ""}}}>
            Dashboard
          </NavLink>
          <NavLink to="/orders" className="hover:text-red-400" style={(e) => {return {color: e.isActive? "red": ""}}}>
            Orders
          </NavLink>
          <NavLink to="/holdings" className="hover:text-red-400" style={(e) => {return {color: e.isActive? "red": ""}}}>
            Holdings
          </NavLink>
          <NavLink to="/positions" className="hover:text-red-400" style={(e) => {return {color: e.isActive? "red": ""}}}>
            Positions
          </NavLink>
          <NavLink to="/funds" className="hover:text-red-400" style={(e) => {return {color: e.isActive? "red": ""}}}>
            Funds
          </NavLink>
          <NavLink to="/apps" className="hover:text-red-400" style={(e) => {return {color: e.isActive? "red": ""}}}>
            Apps
          </NavLink>
          <UserBar/>
        </ul>

        {/* Hamburger Icon */}
        <div className='sm:hidden cursor-pointer flex gap-[3rem]' onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : (
            <div className='flex gap-[2rem] items-center'>
               <MenuIcon size={24} />
          </div>
          )}
          <UserBar/>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className='sm:hidden mt-4'>
          <ul className='flex flex-col gap-[2rem] text-[1.3rem] pt-[3rem] text-gray-600'>
            <NavLink to="/" className="hover:text-red-400" style={(e) => {return {color: e.isActive? "red": ""}}}>
            Dashboard
          </NavLink>
          <NavLink to="/orders" className="hover:text-red-400" style={(e) => {return {color: e.isActive? "red": ""}}}>
            Orders
          </NavLink>
          <NavLink to="/holdings" className="hover:text-red-400" style={(e) => {return {color: e.isActive? "red": ""}}}>
            Holdings
          </NavLink>
          <NavLink to="/positions" className="hover:text-red-400" style={(e) => {return {color: e.isActive? "red": ""}}}>
            Positions
          </NavLink>
          <NavLink to="/funds" className="hover:text-red-400" style={(e) => {return {color: e.isActive? "red": ""}}}>
            Funds
          </NavLink>
          <NavLink to="/apps" className="hover:text-red-400" style={(e) => {return {color: e.isActive? "red": ""}}}>
            Apps
          </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
