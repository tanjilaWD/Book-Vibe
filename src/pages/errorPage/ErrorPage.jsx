import React from 'react';
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-4">
            <div className="text-center max-w-md">
                
                {/* Big Error Code */}
                <h1 className="text-7xl font-extrabold text-red-500 drop-shadow-lg">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl font-semibold mt-4">
                    Oops! Page not found
                </h2>

                {/* Description */}
                <p className="text-gray-400 mt-2">
                    The page you're looking for doesn’t exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    <Link to="/">
                        <button className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-full transition duration-300">
                            Go Home
                        </button>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-2 border border-gray-500 hover:bg-gray-800 rounded-full transition duration-300"
                    >
                        Go Back
                    </button>
                </div>

                {/* Extra design element */}
                <div className="mt-10 text-sm text-gray-500">
                    Error code: 404 | Lost in the void 🌌
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;