import React from "react";

export interface ProfileProps {
    image: string;
    name: string;
    manifesto: string;
    position: string;
    title: string;
}

const Profile: React.FC<ProfileProps> = ({ image, name, manifesto, position, title }) => {
    const imageSrc = image.startsWith("data:image") ? image : `data:image/jpeg;base64,${image}`;

    return (
        <div className="w-72 p-5 bg-white shadow-lg rounded-2xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
            <img
                src={imageSrc}
                alt={name}
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow-sm"
            />
            <h2 className="text-xl font-kanit mt-4 text-gray-800">{name}</h2>
            <span className="text-sm font-kanit text-gray-600">Title: {title}</span>
            <span className="text-sm text-gray-500 font-kanit">{position}</span>
            <p className="text-sm text-gray-700 mt-3 px-3 italic font-kanit">{manifesto}</p>
        </div>
    );
};

export default Profile;
