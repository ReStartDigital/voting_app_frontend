import React from "react";
import { Fade } from "react-awesome-reveal";
import Popup from "../Reusable/Popup";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
const pic1 = require("../assets/videos/mockup.mp4");
const pic2 = require("../assets/images/Frame30.png");
const pic3 = require("../assets/images/Frame31.png");
const pic4 = require("../assets/images/Frame32.png");
const pic5 = require("../assets/images/security.png");
const pic6 = require("../assets/images/website.png");
const pic7 = require("../assets/images/privacypolicy.png");
const pic8 = require("../assets/images/comments.png");
const pic9 = require("../assets/images/Frames31.png");

const AfterLogin: React.FC = () => {
    const [show, setShow] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setShow(true);
    }, []);

    const handleAdminRegistration = async () => {
        try {
            const token = sessionStorage.getItem("token");
            const user_id = sessionStorage.getItem("user_id");
            if (!token || !user_id) {
                toast.error("Unauthorized action");
                return;
            }

            setLoading(true);
            const response = await axios
                .put(`http://localhost:6060/protected/router/change/role/${user_id}`, {}, {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            if (response.data) {
                toast.success("Updated status", {
                    style: {
                        backgroundColor: 'black',
                        fontFamily: "kanit",
                        color: "white",
                    },
                });

                setTimeout(() => {
                    setShow(false);
                }, 3000);
                window.location.href = "/admin/dashboard/election";
            }
            setLoading(false);
        } catch (error: any) {
            console.error(error);
            setLoading(false);
        }
    };

    return (
        <section className="w-full h-screen flex justify-start items-center flex-col overflow-x-hidden">
            <Toaster position={"top-right"} />
            <div className="w-full h-full mt-8">
                {show &&
                    <Fade triggerOnce>
                        <Popup status={show} loading={loading} setShow={setShow} updatedUser={handleAdminRegistration} />
                    </Fade>
                }
                <div className="w-full h-[60vh] relative">
                    <img src={pic4} alt="background-image" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 flex justify-center items-center z-40 p-4">
                        <span className="text-white text-center font-kanit text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
                            Online Voting, Made simple
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-full h-full mt-8 px-4">
                <div className="w-full h-15vh flex justify-center items-center">
                    <div className="w-[88%]">
                        <span className="capitalize font-kanit text-bluerry">why choose evote Restart</span><br />
                        <span className="uppercase text-need font-kanit text-2xl sm:text-3xl md:text-4xl lg:text-5xl">transform your approach to voting</span>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                        {/* Security System */}
                        <div className="bg-subject rounded-lg p-4 flex flex-col lg:flex-row justify-between items-center">
                            <div className="flex flex-col justify-between items-start lg:mr-6 flex-grow">
                                <span className="text-bluerry text-2xl sm:text-3xl font-kanit">Security System</span>
                                <span className="font-need font-kanit mb-4">
                                    We offer a service that allows people to make their decisions in a 100% secure way.
                                </span>
                                <div className="w-full flex justify-start items-center">
                                    <span className="underline text-bluerry font-kanit text-xl hover:cursor-pointer">
                                        Read more
                                    </span>
                                </div>
                            </div>
                            <div className="w-full mt-4 lg:mt-0">
                                <img src={pic5} alt="security" className="w-full h-32 object-contain sm:h-48 lg:h-64" />
                            </div>
                        </div>

                        {/* Efficient Platform */}
                        <div className="bg-subject rounded-lg p-4 flex flex-col lg:flex-row justify-between items-center">
                            <div className="flex flex-col justify-between items-start lg:mr-6 flex-grow">
                                <span className="text-bluerry text-2xl sm:text-3xl font-kanit">EFFICIENT PLATFORM</span>
                                <span className="font-need font-kanit mb-4">
                                    Our services simplify the process, facilitate access, increase participation, and reduce costs.
                                </span>
                                <div className="w-full flex justify-start items-center">
                                    <span className="underline text-bluerry font-kanit text-xl hover:cursor-pointer">
                                        Read more
                                    </span>
                                </div>
                            </div>
                            <div className="w-full mt-4 lg:mt-0">
                                <img src={pic6} alt="platform" className="w-full h-32 object-cover sm:h-48 lg:h-64" />
                            </div>
                        </div>

                        {/* Assistance */}
                        <div className="bg-subject rounded-lg p-4 flex flex-col lg:flex-row justify-between items-center">
                            <div className="flex flex-col justify-between items-start lg:mr-6 flex-grow">
                                <span className="text-bluerry text-2xl sm:text-3xl font-kanit">Assistance</span>
                                <span className="font-need font-kanit mb-4">
                                    In addition to the product, there is a team of specialists, consultants of voting processes, and election technology.
                                </span>
                                <div className="w-full flex justify-start items-center">
                                    <span className="underline text-bluerry font-kanit text-xl hover:cursor-pointer">
                                        Read more
                                    </span>
                                </div>
                            </div>
                            <div className="w-full mt-4 lg:mt-0">
                                <img src={pic8} alt="assistance" className="w-full h-32 object-cover sm:h-48 lg:h-64" />
                            </div>
                        </div>

                        {/* Privacy */}
                        <div className="bg-subject rounded-lg p-4 flex flex-col lg:flex-row justify-between items-center">
                            <div className="flex flex-col justify-between items-start lg:mr-6 flex-grow">
                                <span className="text-bluerry text-2xl sm:text-3xl font-kanit">Privacy</span>
                                <span className="font-need font-kanit mb-4">
                                    Our voting process is ruled by strict rules on the use, safekeeping, retention, and deletion of information, and standardized and public procedures.
                                </span>
                                <div className="w-full flex justify-start items-center">
                                    <span className="underline text-bluerry font-kanit text-xl hover:cursor-pointer">
                                        Read more
                                    </span>
                                </div>
                            </div>
                            <div className="w-full mt-4 lg:mt-0">
                                <img src={pic7} alt="privacy" className="w-full h-32 object-cover sm:h-48 lg:h-64" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-gradient-to-t from-darkerblue to-darkenblue py-12">
                    <div className="w-full flex justify-center items-center">
                        <span className="uppercase font-kanit text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">How It Works</span>
                    </div>
                    <div className="w-full flex justify-center items-center my-8">
                        <span className="capitalize font-kanit text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                            Online Voting Made Faster
                        </span>
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/* Video */}
                        <div className="w-full">
                            <Fade direction="up" triggerOnce>
                                <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-blue-500 rounded-lg">
                                    <video src={pic1} muted autoPlay loop className="w-full h-full object-cover" />
                                </div>
                            </Fade>
                        </div>

                        {/* Steps */}
                        <div className="w-full flex flex-col gap-6 p-4">
                            {['01', '02', '03', '04'].map((step, index) => (
                                <div key={index} className="w-full flex justify-start items-center hover:cursor-pointer border-y-2 border-blueblue py-4">
                                    <span className="text-blueblue text-xl sm:text-2xl font-kanit">{step}</span>
                                    <span className="text-white font-kanit text-xl sm:text-2xl ml-4">
                                        {step === '01' ? 'Delivery of credentials' :
                                            step === '02' ? 'Voting area access' :
                                                step === '03' ? 'Confirmation of votes' :
                                                    'Automatic results'}
                                    </span>
                                </div>
                            ))}
                            <div className="w-full flex justify-end items-center mt-6">
                                <span className="font-kanit text-white">Want to learn more?</span>
                                <button className="ml-2 font-kanit bg-white p-2 text-bluerry rounded-lg flex justify-center items-center">
                                    Product overview
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center py-12 bg-gray-100">
                    <div className="w-full flex justify-center items-center">
                        <span className="uppercase font-kanit text-blueblue text-lg sm:text-xl">What our customers are saying</span>
                    </div>
                    <div className="w-full flex justify-center items-center mt-6">
                        <div className="w-[80%] sm:w-[60%] text-center">
                            <span className="font-kanit text-black italic">
                                "We had a good impression of the system because it resulted in high voter turnout. Due to the fact that it is simpler and more at hand, it allows us to work more comfortably."
                            </span>
                            <div className="mt-4 flex justify-center items-center">
                                <img src={pic9} alt="customer" className="rounded-full w-16 h-16 object-cover" />
                                <span className="ml-4 font-kanit text-black">John Doe, CEO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AfterLogin;
