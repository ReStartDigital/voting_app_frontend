import React from "react";
import Profile, { ProfileProps } from "../Screens/Profile";
import {motion, MotionProps} from "framer-motion";
import {Alert, AlertDescription, AlertTitle} from "../components/ui/alert";
import {Terminal} from "lucide-react";

interface ShowCandidatesProps {
    candidates: ProfileProps[];  // Accept an array of candidates
    onClose: (e: any) => void;   // Close modal function
}

const ShowCandidates: React.FC<ShowCandidatesProps> = ({ candidates, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
            <motion.div
                {...{ className:"bg-white p-6 rounded-xl shadow-lg relative w-[90%] max-w-3xl overflow-y-auto max-h-[80vh]" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                {...({ onClick: (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation() } as MotionProps)}// Prevent modal close when clicking inside
            >
                {/* ✅ Close Button */}
                <button
                    className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm transition hover:bg-red-600"
                    onClick={onClose}
                >
                    ✖
                </button>

                {/* ✅ Candidates List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {candidates.length > 0 ? (
                        candidates.map((candidate) => (
                            <Profile
                                key={candidate.name} // Use a unique ID if available
                                image={candidate.image}
                                name={candidate.name}
                                manifesto={candidate.manifesto}
                                position={candidate.position}
                                title={candidate.title}
                            />
                        ))
                    ) : (
                        <Alert>
                            <Terminal className="h-4 w-4" />
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>
                                No Candidates available
                            </AlertDescription>
                        </Alert>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default ShowCandidates;
