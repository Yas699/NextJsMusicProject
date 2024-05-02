"use client";
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

function Featuredcourses()
{
    return (
        <div className="py-12 bg-gray-900 text-white">
            <div>
                <div className="text-center text-white">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn with the Best</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    <div className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-black dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">Div One</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quod vitae enim placeat, eaque vel eius. Accusantium commodi, omnis debitis architecto, atque porro, officia ex placeat ad fuga harum doloremque!</p>
                            </div>
                        </BackgroundGradient>
                    </div>
                    <div className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-black dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">Div Two</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quod vitae enim placeat, eaque vel eius. Accusantium commodi, omnis debitis architecto, atque porro, officia ex placeat ad fuga harum doloremque!</p>
                            </div>
                        </BackgroundGradient>
                    </div>
                    <div className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-black dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">Div Three</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quod vitae enim placeat, eaque vel eius. Accusantium commodi, omnis debitis architecto, atque porro, officia ex placeat ad fuga harum doloremque!</p>
                            </div>
                        </BackgroundGradient>
                    </div>
                    <div className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-black dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">Div Four</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quod vitae enim placeat, eaque vel eius. Accusantium commodi, omnis debitis architecto, atque porro, officia ex placeat ad fuga harum doloremque!</p>
                            </div>
                        </BackgroundGradient>
                    </div>
                    <div className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-black dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">Div Five</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quod vitae enim placeat, eaque vel eius. Accusantium commodi, omnis debitis architecto, atque porro, officia ex placeat ad fuga harum doloremque!</p>
                            </div>
                        </BackgroundGradient>
                    </div>
                    <div className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-black dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">Div Six</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quod vitae enim placeat, eaque vel eius. Accusantium commodi, omnis debitis architecto, atque porro, officia ex placeat ad fuga harum doloremque!</p>
                            </div>
                        </BackgroundGradient>
                    </div>
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={'/courses'} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                    View All Courses
                </Link>
            </div>
        </div>
    );
}

export default Featuredcourses;