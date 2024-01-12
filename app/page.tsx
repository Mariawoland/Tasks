"use client";
import Start from '@/components/start';
import { getTheme, setTheme } from '@/utils/theme';
import React, { useEffect, useRef, useState } from 'react';
import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";
import Board from '@/components/board';
import Cookies from 'js-cookie';

const Home = () => {

  const [currentTheme, setCurrentTheme] = useState<string>(getTheme());

  useEffect(() => {
    const theme = getTheme();
    setTheme(theme);
  }, []);

  const toggleTheme = () => {
    window.location.reload();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  const loggedin = useRef<HTMLInputElement>(null);

  const getLoggedIn = Cookies.get("loggedIn");

  return (
    <>
      <div className={`${currentTheme === 'dark' ? "bg-dark" : "bg-light"} h-screen w-full text-one transition-all duration-300 p-6`}>

        <div className='flex justify-between h-14 absolute inset-0 w-full px-5 pt-3'>

          <img src='logo.png' className='w-32' />

          <button className={`text-4xl transition-all duration-300`} onClick={toggleTheme}>{currentTheme === 'light' ? <IoSunnyOutline /> : <GoMoon />}</button>

        </div>

        {
          getLoggedIn === "true" ?

            <Board />

            :

            <Start />

        }

        <p className='absolute bottom-1 left-1 text-xs'>© Developed by Mariam Ekizashvili</p>

      </div>
    </>
  );
};

export default Home;