"use client";

import { getTheme, setTheme } from '@/utils/theme';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { FaRegDotCircle } from "react-icons/fa";
import '@/app/globals.css';


interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const Board = () => {

    const [loading, setLoading] = useState(true);

    const [todos, setTodos] = useState<Todo[]>([]);


    const [clicked1, setClicked1] = useState(true);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const [clicked4, setClicked4] = useState(false);

    const tab1 = () => {
        setClicked1(true);
        setClicked2(false);
        setClicked3(false);
        setClicked4(false);
    };

    const tab2 = () => {
        setClicked1(false);
        setClicked2(true);
        setClicked3(false);
        setClicked4(false);
    };

    const tab3 = () => {
        setClicked1(false);
        setClicked2(false);
        setClicked3(true);
        setClicked4(false);
    };

    const tab4 = () => {
        setClicked1(false);
        setClicked2(false);
        setClicked3(false);
        setClicked4(true);
    };

    useEffect(() => {
        axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setTodos(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const [currentTheme, setCurrentTheme] = useState<string>(getTheme());

    useEffect(() => {
        const theme = getTheme();
        setTheme(theme);
    }, []);

    const handleSubmit = () => {
        Cookies.remove("loggedIn");
        window.location.reload();
    };

    return (

        <div className='h-full pt-14 pb-3'>

            <div className='flex border-2 border-one rounded-3xl md:w-[600px] w-full h-full m-auto overflow-hidden'>

                <div className='w-[30%] font-bold sm:text-base text-xs text-center flex flex-col h-full justify-between'>
                    <div>
                        <p className={`cursor-pointer border-b-2 border-one py-3 sm:px-5 px-3  hover:bg-one transition-all duration-300 ${currentTheme === 'dark' ? "hover:text-dark" : "hover:text-light"}`} onClick={tab1}>Pending</p>
                        <p className={`cursor-pointer border-b-2 border-one py-3 sm:px-5 px-3  hover:bg-one transition-all duration-300 ${currentTheme === 'dark' ? "hover:text-dark" : "hover:text-light"}`} onClick={tab2}>Completed</p>
                        <p className={`cursor-pointer border-b-2 border-one py-3 sm:px-5 px-3  hover:bg-one transition-all duration-300 ${currentTheme === 'dark' ? "hover:text-dark" : "hover:text-light"}`} onClick={tab3}>All Tasks</p>
                    </div>

                    <p className={`cursor-pointer border-t-2 border-one py-3 sm:px-5 px-3  hover:bg-one transition-all duration-300 ${currentTheme === 'dark' ? "hover:text-dark" : "hover:text-light"}`} onClick={tab4}>Log Out</p>
                </div>

                <div className='w-[70%] border-s-2 border-one'>

                    <div className={`w-full h-full p-4 ${clicked1 === true ? 'block' : 'hidden'}`}>
                        <h2 className='font-bold text-center sm:text-3xl text-2xl'>Pending</h2>
                        <hr className='border-0 h-[2px] bg-one mt-5 mb-3' />
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div className={`sm:px-3 px-2 my-3 w-full h-[83%] overflow-auto editScroll`}>
                                {todos.map((item) => (
                                    <p key={item.id} className={`pb-2 font-semibold sm:text-sm text-xs`}>

                                        {item.completed === false ?
                                            <div className='flex gap-1 items-center'>
                                                <FaRegDotCircle />
                                                {item.title}
                                            </div> : ''}
                                    </p>
                                ))}
                            </div>

                        )}

                    </div>

                    <div className={`w-full h-full p-4 ${clicked2 === true ? 'block' : 'hidden'}`}>
                        <h2 className='font-bold text-center sm:text-3xl text-2xl'>Completed</h2>
                        <hr className='border-0 h-[2px] bg-one mt-5 mb-3' />

                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div className={`sm:px-3 px-2 my-3 w-full h-[83%] overflow-auto editScroll`}>
                                {todos.map((item) => (
                                    <p key={item.id} className={`pb-2 font-semibold sm:text-sm text-xs`}>

                                        {item.completed === true ?
                                            <div className='flex gap-1 items-center'>
                                                <FaRegDotCircle />
                                                {item.title}
                                            </div> : ''}
                                    </p>
                                ))}
                            </div>

                        )}

                    </div>

                    <div className={`w-full h-full p-4 ${clicked3 === true ? 'block' : 'hidden'}`}>
                        <h2 className='font-bold text-center sm:text-3xl text-2xl'>All  Tasks</h2>
                        <hr className='border-0 h-[2px] bg-one mt-5 mb-3' />
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div className={`sm:px-3 px-2 my-3 w-full h-[83%] overflow-auto editScroll`}>
                                {todos.map((item) => (
                                    <p key={item.id} className={`pb-2 font-semibold sm:text-sm text-xs`}>

                                        <div className='flex gap-1 items-center'>
                                            <FaRegDotCircle />
                                            {item.title}
                                        </div>
                                    </p>
                                ))}
                            </div>

                        )}

                    </div>

                    <div className={`w-full h-full p-4 ${clicked4 === true ? 'block' : 'hidden'}`}>
                        <h2 className='font-bold text-center sm:text-3xl text-2xl'>Log Out</h2>
                        <hr className='border-0 h-[2px] bg-one mt-5 mb-3' />

                        <div className={`sm:px-3 px-2 my-3 w-full h-[83%] flex items-center`}>
                            <button onClick={handleSubmit} className={`transition-all duration-300 m-auto border-2 text-center  border-one w-10/12 py-2 rounded-2xl hover:bg-one font-bold ${currentTheme === 'dark' ? "hover:text-dark" : "hover:text-light"}`}>Log Out</button>
                        </div>

                    </div>


                </div>

            </div>


        </div>



    )
}

export default Board
