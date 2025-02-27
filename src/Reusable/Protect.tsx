import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Spinner } from "flowbite-react";

interface Props {
    children: ReactNode;
}

const Protect: React.FC<Props> = ({ children }) => {
    const [status, setStatus] = useState<boolean | null>(null);

    const fetchData = async () => {
        try {
            const token = sessionStorage.getItem("token");

            if (!token) {
        
                setStatus(false);
                return;
            }

            const response = await axios.get("http://localhost:6060/protected/router/protect", {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if(response.data){
                setStatus(true)
            }
            console.log(response.data);
            
            // setStatus(response.data.states === true);
        } catch (e) {
            console.error("Error fetching protected route:", e);
            setStatus(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (status === null) {
        return <div className="w-full h-screen flex justify-center items-center"><Spinner/></div>; // Ensure a valid ReactNode is returned
    }

    return status ? <>{children}</> : <Navigate to="/login/user" replace />;
};

export default Protect;
