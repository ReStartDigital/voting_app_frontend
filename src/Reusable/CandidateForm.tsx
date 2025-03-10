import React, { useState } from "react";
import { Spinner } from "flowbite-react";
import imageCompression from "browser-image-compression"; // Import the compression library

interface CandidateFormProps {
    users: { id: string | null; name: string | null }[];
    elections: { id: string; title: string }[];
    onSubmit: (formData: FormData) => void;
    Cancel: (e: any) => void;
    state: (e: any) => void;
}

const CandidateForm: React.FC<CandidateFormProps> = ({ users, elections, onSubmit, Cancel, state }) => {
    const [formData, setFormData] = useState({
        userId: "",
        electionId: "",
        manifesto: "",
        imageFile: null as File | null,
        name: "",
        position: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];

            // Compression options
            const options = {
                maxSizeMB: 1, // Max size in MB
                maxWidthOrHeight: 1024, // Max width/height in pixels
                useWebWorker: true, // Use web worker for better performance
            };

            try {
                const compressedFile = await imageCompression(file, options);
                setFormData({ ...formData, imageFile: compressedFile });
            } catch (error) {
                console.error("Error compressing image:", error);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const data = new FormData();
        data.append("name", formData.name);
        data.append("userId", formData.userId);
        data.append("electionId", formData.electionId);
        data.append("manifesto", formData.manifesto);
        data.append("position", formData.position);
        if (formData.imageFile) data.append("imageFile", formData.imageFile);
        console.log(formData);

        try {
            await onSubmit(data);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="fixed z-50 h-screen w-full inset-0 flex items-center justify-center min-h-screen bg-gray-100 flex-col">
            <div className="bg-white rounded-lg p-6 2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-full sm:w-full xs:w-full">
                <h2 className="text-xl text-center font-kanit mb-4 text-gray-700">Create Candidate Profile</h2>
                <form onSubmit={handleSubmit} className="space-y-4 w-full">
                    <div>
                        <label className="block text-sm font-kanit text-gray-600">Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border font-kanit rounded-md bg-gray-100"
                            placeholder="Enter candidate name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-kanit text-gray-600">Position</label>
                        <input
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            className="w-full p-2 border font-kanit rounded-md bg-gray-100"
                            placeholder="Enter candidate position"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Election Name</label>
                        <select
                            name="electionId"
                            value={formData.electionId}
                            onChange={handleChange}
                            className="w-full p-2 border font-kanit rounded-md bg-gray-100"
                            required
                        >
                            <option value="">Select Election</option>
                            {elections.map((election) => (
                                <option key={election.id} value={election.id}>
                                    {election.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Manifesto */}
                    <div>
                        <label className="block text-sm font-kanit text-gray-600">Slogan</label>
                        <textarea
                            name="manifesto"
                            value={formData.manifesto}
                            onChange={handleChange}
                            className="w-full p-2 border font-kanit rounded-md bg-gray-100"
                            rows={4}
                            placeholder="Enter candidate slogan..."
                            required
                        />
                    </div>

                    {/* Candidate Image */}
                    <div>
                        <label className="block text-sm font-kanit text-gray-600" htmlFor="imageFile">Candidate Image</label>
                        <input
                            type="file"
                            id="imageFile"
                            name="imageFile"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full p-2 border font-kanit rounded-md bg-gray-100"
                        />
                    </div>
                    <div className="flex justify-between items-center gap-5">
                        <button className="w-full bg-red-500 font-kanit text-white py-2 rounded-md transition hover:bg-red-600"
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    Cancel(e);
                                }}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full sm:w-1/2 font-kanit text-white py-2 rounded-md transition ${
                                loading ? "bg-gray-400 cursor-not-allowed" : "bg-bluerry"
                            }`}
                        >
                            {loading ? <Spinner /> : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CandidateForm;
