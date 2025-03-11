import { useState , useEffect } from "react";
import {Label, TextInput, Textarea, Button, Spinner} from "flowbite-react";
import axios from "axios";
import {toast, Toaster} from "react-hot-toast";
import Usestore from "../store/UseStore";

export interface ElectionForm {
    adminId?: string | null;
    title: string;
    description: string;
    startTime: string;
    endTime: string;
}

export default function ElectionForm() {
    const [ loading , setLoading ] = useState<boolean>(false);
    const { initial , toggleState } = Usestore();
    // State to manage form fields
    const [formData, setFormData] = useState<ElectionForm>({
        adminId: "",
        title: "",
        description: "",
        startTime: "",
        endTime: "",
    });

    // State for validation errors
    const [errors, setErrors] = useState<{ [key: string]: string }>({});


    useEffect(() => {
        const userId = sessionStorage.getItem("user_id") || "";
        setFormData((prev) => ({ ...prev, adminId: userId }));
    }, []);

    const electionId = sessionStorage.getItem("user_id") || "";

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Form validation
    const validateForm = () => {
        let newErrors: { [key: string]: string } = {};
        if (!formData.title.trim()) newErrors.title = "Title is required";
        if (!formData.startTime) newErrors.startTime = "Start time is required";
        if (!formData.endTime) newErrors.endTime = "End time is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const userId = sessionStorage.getItem("user_id");
        const token = sessionStorage.getItem("token")

        if(!token) {
            toast.error("Token is required");
            return;
        }

        if (!validateForm()) return;

        const electionData = {
            ...formData,
            adminId: userId || formData.adminId,
            startTime: new Date(formData.startTime).toISOString().slice(0, 19), // ✅ Ensure correct format
            endTime: new Date(formData.endTime).toISOString().slice(0, 19)      // ✅ Ensure correct format
        };

        console.log(electionData)
        try {

            setLoading(true);
            console.log(electionData);
            const response = await axios.post(
                "http://localhost:6060/protected/router/admin/add/election",
                electionData,
                {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            toast.success("Election created successfully!" , {
                style: {
                    backgroundColor: "black",
                    fontFamily: "kanit",
                    color: "white"
                }
            });
            sessionStorage.setItem("election", response.data.id)
            console.log(electionData);
            setLoading(false);
            toggleState();
            setFormData({ title: "", description: "", startTime: "", endTime: "" }); // Reset form
            setErrors({});
        } catch (error: any) {
            toast.error("Failed to create election. Please try again." , {
                style: {
                    backgroundColor:"black",
                    fontFamily: "kanit",
                    color: "white"
                }
            });
            console.log("Error:", error);
            setLoading(false)
        }
    };

    const handleCancel = ()=>{
        toggleState()
    }



    return (
        <section className="flex justify-center items-center fixed h-screen inset-0 z-50 w-full bg-white">
            <Toaster position="top-right" />
            <div className="w-[90%] max-w-lg bg-white p-6">
                <h2 className="text-2xl font-bold text-center mb-4 font-kanit">Create Election</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Title */}
                    <div>
                        <Label htmlFor="title" value="Title" className="font-kanit"/>
                        <TextInput
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Election Title"
                            className="font-kanit"
                        />
                        {errors.title && <p className="text-red-500 text-sm font-kanit">{errors.title}</p>}
                    </div>

                    {/* Description */}
                    <div>
                        <Label htmlFor="description" value="Description" className="font-kanit" />
                        <Textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Election Description"
                            rows={3}
                            className="font-kanit"
                        />
                    </div>

                    {/* Start Time */}
                    <div>
                        <Label htmlFor="startTime" value="Start Time"  className="font-kanit" />
                        <TextInput
                            id="startTime"
                            name="startTime"
                            type="datetime-local"
                            value={formData.startTime}
                            onChange={handleChange}
                            step="1"
                            className="font-kanit"
                        />
                        {errors.startTime && <p className="text-red-500 text-sm font-kanit">{errors.startTime}</p>}
                    </div>

                    {/* End Time */}
                    <div>
                        <Label htmlFor="endTime" value="End Time" className="font-kanit"/>
                        <TextInput
                            id="endTime"
                            name="endTime"
                            type="datetime-local"
                            value={formData.endTime}
                            onChange={handleChange}
                            step="1"
                            className="font-kanit"
                        />
                        {errors.endTime && <p className="text-red-500 text-sm font-kanit">{errors.endTime}</p>}
                    </div>
                    <div className="flex justify-between items-center gap-5">
                        <Button className="w-full bg-black text-white font-kanit" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button type="submit" className="w-full bg-black text-white font-kanit">
                            {
                                loading ? (<Spinner/>) : " Create Election"
                            }

                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
