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
            toast.error("Failed to cast vote. Please try again.");
        }
    };

    useEffect(() => {
        fetchElections();
    }, [searchParams]); // Re-fetch when URL query changes

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8 min-h-screen bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-xl shadow-md p-4 space-y-4">
                            <Skeleton className="w-full h-48 rounded-lg" />
                            <Skeleton className="w-2/3 h-6" />
                            <Skeleton className="w-1/2 h-4" />
                            <Skeleton className="w-full h-20" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <Alert variant="destructive" className="max-w-lg shadow-lg">
                    <AlertCircle className="h-6 w-6" />
                    <AlertTitle className="text-lg font-semibold">Error</AlertTitle>
                    <AlertDescription className="mt-2">{error}</AlertDescription>
                </Alert>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Toaster position="top-right" />
            
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold font-kanit text-center mb-8 text-gray-800">
                    Active Elections
                </h1>

                {elections.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16">
                        <div className="text-gray-500 text-xl font-kanit">
                            No active elections at the moment
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {elections.map((election) => (
                            <Card 
                                key={election.id} 
                                className="group hover:shadow-xl transition-shadow duration-300 bg-white rounded-xl overflow-hidden"
                            >
                                <CardHeader className="p-0 relative">
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={election.image ? `data:image/jpeg;base64,${election.image}` : "/placeholder.png"}
                                            alt={election.name}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                            onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6 space-y-4">
                                    <div>
                                        <CardTitle className="text-xl font-kanit text-gray-800 mb-2">
                                            {election.name}
                                        </CardTitle>
                                        <p className="text-sm font-kanit text-blue-600 font-medium">
                                            {election.position}
                                        </p>
                                    </div>
                                    <p className="text-gray-600 font-kanit text-sm line-clamp-3">
                                        {election.manifesto}
                                    </p>
                                    <Button
                                        className="w-full py-3 bg-black hover:bg-gray-800 text-white font-kanit 
                                                 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                                        onClick={() => handleClick(election.id, election.electionId.id, election.uploadedBy.id)}
                                    >
                                        Cast Vote
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}


