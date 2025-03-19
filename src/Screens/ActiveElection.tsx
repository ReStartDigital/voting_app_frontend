import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Skeleton } from "../components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Toaster , toast } from "react-hot-toast";

interface Election {
    id: string;
    title: string;
    manifesto: string;
    image: string;
    position: string;
    name: string;
    electionId: { id: string };
    uploadedBy: { id: string };
}

export default function ActiveElections() {
    const [elections, setElections] = useState<Election[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchParams] = useSearchParams();

    async function fetchElections() {
        setError(""); // Reset error before fetching
        setLoading(true);
        try {
            const response = await axios.get(
                `http://localhost:6060/protected/router/get/election/candidate/by/${searchParams.get("id")}`,
                { withCredentials: true }
            );
            setElections(Array.isArray(response.data) ? response.data : []);
        } catch (e: any) {
            console.error("Error fetching elections:", e);
            setError("Failed to load elections. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const handleClick = async (id: string, electionId: string, voter: string) => {
        try {
            const response = await axios.post(
                `http://localhost:6060/protected/router/cast/vote/per/candidate/${voter}?candidate=${id}&election=${electionId}`,
                {},
                { withCredentials: true }
            );
          console.log("Vote Response:", response.data);
            toast.success(response?.data?.message);
        } catch (error: any) {
            console.error("Vote Error:", error);
        }
    };

    useEffect(() => {
        fetchElections();
    }, [searchParams]); // Re-fetch when URL query changes

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
            <Toaster position={"top-right"}/>
            <h1 className="text-3xl font-bold font-kanit text-center mb-6">Active Elections</h1>

            {elections.length === 0 ? (
                <p className="text-center font-kanit text-gray-600">No active elections at the moment.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {elections.map((election) => (
                        <Card key={election.id} className="overflow-hidden shadow-lg">
                            <CardHeader className="p-0">
                                <img
                                    src={election.image ? `data:image/jpeg;base64,${election.image}` : "/placeholder.png"}
                                    alt={election.name}
                                    className="w-full h-48 object-cover"
                                    onError={(e) => (e.currentTarget.src = "/placeholder.png")} // Fallback for broken images
                                />
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardTitle className="text-lg font-kanit">{election.name}</CardTitle>
                                <p className="text-gray-600 font-kanit text-sm">{election.position}</p>
                                <p className="mt-2 text-sm font-kanit text-gray-700">{election.manifesto}</p>
                                <Button
                                    className="mt-4 font-kanit p-3 text-white bg-black"
                                    onClick={() => handleClick(election.id, election.electionId.id, election.uploadedBy.id)}
                                >
                                    Vote
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
