import { useState } from "react";
import RightSideImage from ".././assets/rightColumn.png";
import MainIcon from ".././assets/mainIcon.svg";
import EyeIcon from ".././assets/eyeIcon.svg";
import OpenEyeIcon from ".././assets/openEyeIcon.svg";
import GoogleIcon from ".././assets/googleLogoIcon.svg";

const LoginPage = () => {
    const [formData, setFormData] = useState({ userName: "", password: "" });
    const [show, setShow] = useState(false);

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center h-screen w-full">
            <div className="w-full lg:w-[43%] h-screen px-[74px]">
                <img className="mt-4" src={MainIcon} alt="MainIcon" />
                <p style={{ fontFamily: 'SoraVariable' }} className="lg:text-[64px] lg:font-[600] text-[38px] font-[550] mt-4">
                    Welcome
                </p>
                <p style={{ fontFamily: 'SoraVariable' }} className="lg:text-[64px] lg:font-[600] text-[38px] font-[550] mt-[-16px] lg:mt-[-30px]">
                    back
                </p>
                <p className="lg:text-[18px] lg:font-[300] text-[16px] font-[300]">
                    You need to be signed in to access the project dashboard.
                </p>
                <form>
                    <div className="flex flex-col gap-2 w-full mt-6 lg:text-[16px] lg:font-[500] text-[15px] font-[500]">
                        <label>Email or username</label>
                        <input
                            type="text"
                            placeholder="wesley.mendoza@example.com"
                            className="h-[40px] bg-[#F9FAFB] border border-[#CFD8E1] px-[10px] py-[12px] outline-none rounded-sm"
                            onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                            required
                        />
                        <label>Password</label>
                        <div className="h-[40px] bg-[#F9FAFB] border border-[#CFD8E1] flex justify-between rounded-sm">
                            <input
                                type={show ? "text" : "password"}
                                className="bg-[#F9FAFB] outline-none w-[90%] px-[10px] py-[12px]"
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                            <img
                                src={!show ? EyeIcon : OpenEyeIcon}
                                alt="eyeIcon"
                                onClick={() => setShow(!show)}
                                className="cursor-pointer w-[10%] md:p-2 p-1.5"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-3 mt-4">
                        <div className="flex justify-center item-center gap-2">
                            <input
                                type="checkbox"
                                className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px] cursor-pointer"
                            />
                            <label className="lg:text-[16px] text-[12px] font-[360]">
                                Keep me signed in
                            </label>
                        </div>
                        <div>
                            <p className="hover:underline cursor-pointer text-[12px] lg:text-[16px] lg:font-[500] font-[360]">
                                Forgot password?
                            </p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className='w-full bg-[#50F89A] border border-[#00E687] py-[14px] px-[12px] rounded-sm '>Sign in</button>
                        <div className="w-full flex justify-center border border-[#CFD8E1] py-[14px] px-[12px] mt-6 rounded-sm gap-2 cursor-pointer">
                            <img src={GoogleIcon} alt="GoogleIcon" />
                            <div>Sign in with Google</div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <p className="text-[16px] font-[360]">
                            Haven’t joined yet?{" "}
                            <span className="cursor-pointer hover:underline text-[16px] font-[500]">
                                Sign in
                            </span>
                        </p>
                    </div>
                </form>
            </div>
            <div className="w-full lg:w-[57%] h-screen lg:block hidden">
                <img className="w-full h-screen" src={RightSideImage} alt="RightSideImage" />
            </div>
        </div>
    );
};

export default LoginPage;