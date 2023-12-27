const MainPage = () => {

    return (
        <div style={{ fontFamily: 'SoraVariable' }} className="w-full h-screen">
            <div className='bg-[#077b8a] w-full h-[10%] p-4 flex justify-between text-white'>
                <p className="text-[26px] font-[600]">Landing Page</p>
                <button className='bg-[#d72631] text-white p-2 rounded-md hover:bg-red-500'>Logout</button>
            </div>
            <div className="w-full h-[90%] flex justify-center items-center bg-[#a2d5c6]">
                <p className="text-[#5c3c92] text-[64px]">Welcome back</p>
            </div>
        </div>
    )
}

export default MainPage