import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Skeleton } from "../components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

interface Election {
    id: string;
    title: string;
    manifesto: string;
    image: string;
    position: string;
    name: string;
}

export default function ActiveElections() {
    const [elections, setElections] = useState<Election[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const token = sessionStorage.getItem("token");
    const [searchParams] = useSearchParams();

    async function fetchElections() {
        if (!token) {
            setError("Authentication required. Please log in.");
            setLoading(false);
            return;
        }
        try {
            const response = await axios.get(
                `http://localhost:6060/protected/router/get/election/candidate/by/${searchParams.get("id")}`,
                {
                    withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            console.log("API Response:", response.data);
            setElections(Array.isArray(response.data) ? response.data : []);
        } catch (e: any) {
            console.error("Error fetching elections:", e);
            setError("Failed to load elections. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const handleClick = (id: string)=>{
        console.log(id);
        return id;
    }
    useEffect(() => {
        fetchElections();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
                <Skeleton className="w-[90%] md:w-[60%] lg:w-[40%] h-32 rounded-lg" />
                <Skeleton className="w-[80%] md:w-[50%] h-8" />
                <Skeleton className="w-[70%] md:w-[40%] h-6" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-5">
                <Alert variant="destructive" className="max-w-md">
                    <AlertCircle className="h-5 w-5" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            </div>
        );
    }

    return (
        <div className="p-5 min-h-screen">
            <h1 className="text-3xl font-bold font-kanit text-center mb-6">Active Elections</h1>

            {elections.length === 0 ? (
                <p className="text-center font-kanit text-gray-600">No active elections at the moment.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {elections.map((election) => (
                        <Card key={election.id} className="overflow-hidden shadow-lg" onClick={() => handleClick(election.id)}>
                            <CardHeader className="p-0">
                                <img
                                    src={election.image ? `data:image/jpeg;base64,${election.image}` : "/placeholder.png"}
                                    alt={election.name}
                                    className="w-full h-48 object-cover"
                                />
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardTitle className="text-lg font-kanit">{election.name}</CardTitle>
                                <p className="text-gray-600 font-kanit text-sm">{election.position}</p>
                                <p className="mt-2 text-sm font-kanit text-gray-700">{election.manifesto}</p>
                                <Button className="mt-4 w-full font-kanit">View Details</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
