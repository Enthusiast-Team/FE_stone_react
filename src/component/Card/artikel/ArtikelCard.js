import React from 'react'

export const ArtikelCard = (props) => {
    return (
        <div>
            <div>
                <div
                    className="group relative flex h-48 w-full flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
                >
                    <img
                        src={props.Image}
                        loading="lazy"
                        alt="Photo by Minh Pham"
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                    <div className="relative mt-auto p-4">
                        <span className="block text-sm text-gray-200">{props.tanggal}</span>
                        <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                            {props.judul}
                        </h2>

                        <span className="font-semibold text-indigo-300">{props.read}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
