/* eslint-disable @next/next/link-passhref */
import React from "react";
import Link from "next/link";
import { FaGlassMartiniAlt } from "react-icons/fa";
import {
    backgroundColor,
    text,
    textSecondary,
    accent,
    grayColor,
} from "../styles/colors";

function HomePage({ ...props }) {
    return (
        <div className="navbar bg-slate-900 w-screen h-screen flex justify-between items-center">
            <div className="flex flex-row justify-center items-center w-full h-full">
                <h1 className="text-9xl text-amber-500">The Scene.</h1>
            </div>
        </div>
    );
}

export default HomePage;
