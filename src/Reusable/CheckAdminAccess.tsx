import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
import Cookie from "js-cookie";

interface Props {
    children: ReactNode;
}

const CheckAdminAccess: React.FC<Props> = ({ children }) => {
    const [status, setStatus] = useState<boolean | null>(null);

    const fetchData = async () => {
        try {

            const user_id = Cookie.get("UUID");
            const response = await axios.get(`http://localhost:6060/protected/router/protect/admin/${user_id}`, {
                withCredentials: true,

            });
            // console.log(response.data.states)
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
