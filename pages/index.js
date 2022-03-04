/* eslint-disable @next/next/link-passhref */
import React from "react";
import Link from "next/link";

function HomePage() {
    return (
        <section className="bg-red-600 text-gray-600 body-font">
            <div className="w-full h-full bg-red-400 px-5 py-24 mx-auto">
                <div className="bg-yellow-500 text-center mb-20 rounded-lg">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                        Raw Denim Heirloom Man Braid
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine, ramps
                        microdosing banh mi pug.
                    </p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-row sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 rounded-3xl m-2 space-x-2 bg-gray-900 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0"></div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                Shooting Stars
                            </h2>
                            <p className="leading-relaxed text-base">
                                Blue bottle crucifix vinyl post-ironic four
                                dollar toast vegan taxidermy. Gastropub indxgo
                                juice poutine, ramps microdosing banh mi pug VHS
                                try-hard.
                            </p>
                            <a className="mt-3 text-green-500 inline-flex items-center">
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="p-4 rounded-3xl m-2 bg-gray-900 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                            <h1>Hello</h1>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                The Catalyzer
                            </h2>
                            <p className="leading-relaxed text-base">
                                Blue bottle crucifix vinyl post-ironic four
                                dollar toast vegan taxidermy. Gastropub indxgo
                                juice poutine, ramps microdosing banh mi pug VHS
                                try-hard.
                            </p>
                            <a className="mt-3 text-green-500 inline-flex items-center">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <Link href="/news">
                    <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Button
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default HomePage;
