import { useAuth } from '../authentication/AuthContext';
import LazyLoad from 'react-lazy-load';
import CommonButton from "../components/CommonButton"

const HomePage = () => {

    const { logout } = useAuth();
    const { userInfo: userInfo } = useAuth();
    console.log(userInfo);

    const handelLogout = () => {
        logout();
    };

    const userImage = userInfo?.image;
    return (
        <div style={{ fontFamily: 'SoraVariable' }} className="w-full h-screen">
            <div className='bg-[#077b8a] w-full h-[10%] p-4 flex justify-between text-white'>
                <p className="text-[26px] font-[600]">Home Page</p>
                <CommonButton btnText="Logout" btnClasses="bg-[#d72631] text-white py-2 px-4 rounded-md hover:bg-red-500" btnClick={handelLogout} />
            </div>
            <div className="w-full h-[90%] flex flex-col justify-center items-center bg-[#a2d5c6]">
                <p className="text-[#5c3c92] text-[64px]">Welcome back</p>
                <div className="flex justify-center items-center border border-3 gap-4 p-4 bg-[#077b8a] rounded-md text-white">
                    <div className="border rounded-md">
                        <LazyLoad>
                            <img src={userImage || undefined} alt="userImage" />
                        </LazyLoad>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <p>Username:</p>
                            <p>Firstname:</p>
                            <p>Lastname:</p>
                            <p>Email:</p>
                            <p>Gender:</p>
                        </div>
                        <div>
                            <p>{userInfo?.username}</p>
                            <p>{userInfo?.firstName}</p>
                            <p>{userInfo?.lastName}</p>
                            <p>{userInfo?.email}</p>
                            <p>{userInfo?.gender}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage