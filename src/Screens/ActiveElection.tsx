import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Skeleton } from "../components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { AlertCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Toaster, toast } from "react-hot-toast";

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
    setError("");
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:6060/protected/router/get/election/candidate/by/${searchParams.get(
          "id"
        )}`,
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
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="space-y-6 w-full max-w-2xl">
          <Skeleton className="h-48 w-full rounded-xl bg-gray-200" />
          <Skeleton className="h-8 w-3/4 mx-auto rounded-lg bg-gray-200" />
          <Skeleton className="h-6 w-1/2 mx-auto rounded-lg bg-gray-200" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Alert
          variant="destructive"
          className="max-w-md bg-white shadow-lg rounded-xl border border-red-200"
        >
          <AlertCircle className="h-6 w-6 text-red-600" />
          <AlertTitle className="text-lg font-semibold text-red-600">
            Error
          </AlertTitle>
          <AlertDescription className="text-red-500">{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Toaster position={"top-right"} />
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 font-kanit tracking-tight">
        Active Elections
      </h1>

      {elections.length === 0 ? (
        <p className="text-center text-gray-500 text-lg font-kanit bg-white py-6 px-8 rounded-xl shadow-md max-w-md mx-auto">
          No active elections at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {elections.map((election) => (
            <Card
              key={election.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <CardHeader className="p-0">
                <img
                  src={
                    election.image
                      ? `data:image/jpeg;base64,${election.image}`
                      : "/placeholder.png"
                  }
                  alt={election.name}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-800 font-kanit mb-2">
                  {election.name}
                </CardTitle>
                <p className="text-sm text-gray-500 font-kanit mb-3">
                  {election.position}
                </p>
                <p className="text-sm text-gray-600 font-kanit line-clamp-3">
                  {election.manifesto}
                </p>
                <Button
                  className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white font-kanit py-2 rounded-lg transition-all duration-200"
                  onClick={() =>
                    handleClick(
                      election.id,
                      election.electionId.id,
                      election.uploadedBy.id
                    )
                  }
                >
                  Vote Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
