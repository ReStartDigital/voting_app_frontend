import React from "react";

interface ProfileProps {
    image: string;
    name: string;
    manifesto: string;
    position: string;

}

const Profile:React.FunctionComponent<ProfileProps> = ({ image , name , manifesto , position })=>{
    return(
        <div className='max-w-64  flex justify-center items-center flex-col'>
            <img
                src={`data:image/jpeg;base64,${image}`}
                alt={name || "Candidate"}
                className="w-full h-40 object-cover rounded-md"
            />
            <span className="font-kanit">{position}</span>
            <h2 className="text-lg font-kanit mt-2">{name}</h2>
            <p className="text-gray-600 font-kanit">{manifesto}</p>
        </div>
    )
}

export default Profile;