import { getTheme, setTheme } from "@/utils/theme";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Start = () => {

    const [currentTheme, setCurrentTheme] = useState<string>(getTheme());

    useEffect(() => {
        const theme = getTheme();
        setTheme(theme);
    }, []);

    const handleSubmit = () => {
        localStorage.setItem("loggedIn", "true");
        window.location.reload();
    };

    return (

        <div className="w-full h-[80vh] flex flex-col gap-2 justify-center items-center">
            <div className="w-[200px] flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-one p-5 font-bold">
                <img src='/user.png' className="w-16" />

                <p className="pb-2">User I</p>

                <button onClick={handleSubmit} className={`transition-all duration-300 border-2 text-center  border-one w-full py-3 rounded-2xl hover:bg-one ${currentTheme === 'dark' ? "hover:text-dark" : "hover:text-light"}`}>Log In</button>

            </div>
            <p className="font-semibold underline cursor-pointer">Another Account</p>
        </div>

    );
};

export default Start;