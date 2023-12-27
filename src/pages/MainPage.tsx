import { useAuth } from '../authentication/AuthContext';
import CommonButton from "../components/CommonButton"

const MainPage = () => {

    const { logout } = useAuth();

    const handelLogout = () => {
        logout();
    };

    const userImage = localStorage.getItem('image');
    return (
        <div style={{ fontFamily: 'SoraVariable' }} className="w-full h-screen">
            <div className='bg-[#077b8a] w-full h-[10%] p-4 flex justify-between text-white'>
                <p className="text-[26px] font-[600]">User Information</p>
                <CommonButton btnText="Logout" btnClasses="bg-[#d72631] text-white p-2 rounded-md hover:bg-red-500" btnClick={handelLogout} />
            </div>
            <div className="w-full h-[90%] flex flex-col justify-center items-center bg-[#a2d5c6]">
                <p className="text-[#5c3c92] text-[64px]">Welcome back</p>
                <div className="flex justify-center items-center border border-3 gap-4 p-4 bg-[#077b8a] rounded-md text-white">
                    <div className="border rounded-md">
                        <img src={userImage || undefined} alt="userImage" />
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
                            <p>{localStorage.getItem('userName')}</p>
                            <p>{localStorage.getItem('firstName')}</p>
                            <p>{localStorage.getItem('lastName')}</p>
                            <p>{localStorage.getItem('email')}</p>
                            <p>{localStorage.getItem('gender')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage