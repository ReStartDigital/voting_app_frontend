import React, { useState } from "react";
import {Spinner} from "flowbite-react";

interface CandidateFormProps {
    users: { id: string | null; name: string | null }[];
    elections: { id: string; title: string }[];
    onSubmit: (formData: FormData) => void;
    Cancel: (e: any) => void;
}

const CandidateForm: React.FC<CandidateFormProps> = ({ users, elections, onSubmit , Cancel }) => {
    const [formData, setFormData] = useState({
        userId: "",
        electionId: "",
        manifesto: "",
        uploadedBy: "",
        imageFile: null as File | null,
    });

    const [ loading , setLoading ] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({ ...formData, imageFile: e.target.files[0] });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = new FormData();
        data.append("userId", formData.userId);
        data.append("electionId", formData.electionId);
        data.append("manifesto", formData.manifesto);
        data.append("uploadedBy", formData.uploadedBy);
        if (formData.imageFile) data.append("imageFile", formData.imageFile);

        onSubmit(data);
    };

    return (
        <section className='fixed z-50 h-screen bg-white w-full flex items-center justify-center min-h-screen bg-gray-100 flex-col'>
        <div className="bg-white rounded-lg p-6 w-[30%]">
            <h2 className="text-xl text-center font-kanit mb-4 text-gray-700">Create Candidate Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    <label className="block text-sm font-kanit text-gray-600">Manifesto</label>
                    <textarea
                        name="manifesto"
                        value={formData.manifesto}
                        onChange={handleChange}
                        className="w-full p-2 border font-kanit rounded-md bg-gray-100"
                        rows={4}
                        placeholder="Enter candidate manifesto..."
                        required
                    />
                </div>

                {/* Candidate Image */}
                <div>
                    <label className="block text-sm font-kanit text-gray-600" htmlFor="imageFile">Candidate Image</label>
                    <input
                        type="file"
                        id='imageFile'
                        name="imageFile"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full p-2 border font-kanit rounded-md bg-gray-100"
                    />
                </div>
                <div className='flex justify-between items-center gap-5'>
                    <button className='w-full bg-red-500 font-kanit text-white py-2 rounded-md transition hover:bg-red-600'
                            type='button'
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent event bubbling
                                Cancel(e);
                            }}

                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="w-full bg-bluerry font-kanit text-white py-2 rounded-md transition"
                    >
                        {
                            loading ? (<Spinner/>) : "Submit"
                        }

                    </button>
                </div>

            </form>
        </div>
        </section>
    );
};

export default CandidateForm;
