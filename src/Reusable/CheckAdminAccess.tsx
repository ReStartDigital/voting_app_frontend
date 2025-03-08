import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Spinner } from "flowbite-react";

interface Props {
    children: ReactNode;
}

const CheckAdminAccess: React.FC<Props> = ({ children }) => {
    const [status, setStatus] = useState<boolean | null>(null);

    const fetchData = async () => {
        try {
            const token = sessionStorage.getItem("token");
            const user_id = sessionStorage.getItem("user_id");

            if (!token) {
                setStatus(false);
                return;
            }

            const response = await axios.get(`http://localhost:6060/protected/router/protect/admin/${user_id}`, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data.states)
            if(response.data.states === false) {
                setStatus(false)
            }else{
                setStatus(true);

            }
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

    return status ? <>{children}</> : <Navigate to="/user/default/page" replace />;
};

export default CheckAdminAccess;
