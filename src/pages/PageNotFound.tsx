const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-[#a2d5c6]">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-2xl font-semibold text-gray-600">Page Not Found</p>
                <p className="text-gray-500 mt-4">The page you are looking for might be under construction or does not exist.</p>
                <button onClick={() => window.history.back()} className="mt-6 px-6 py-3 rounded-lg bg-[#077b8a] text-white">Go back</button>
            </div>
        </div>
    );
};

export default PageNotFound;
