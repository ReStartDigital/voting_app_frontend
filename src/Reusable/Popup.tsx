import React , { useState , useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import {Spinner} from "flowbite-react";


interface PopupProps {
    status: boolean;
    setShow: (value: boolean) => void;
}


export default function Popup({ status , setShow , updatedUser , loading }: { status: boolean ,  setShow: (value: boolean) => void
    , updatedUser: () => Promise<void> , loading: boolean}) {
    const [isOpen, setIsOpen] = useState(status);

    useEffect(() => {
        setIsOpen(status);
    }, [status]);

    if (!status) return null;

    // @ts-ignore
    return (
        <div className="fixed flex items-center justify-center min-h-screen bg-gray-100">
            {/*<Toaster position={"top-right"}/>*/}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-end justify-start p-4 bg-black bg-opacity-50">
            <Dialog.Panel className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
            <Dialog.Title className="text-lg font-kanit capitalize">Administrative access</Dialog.Title>
            <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800">
            <X className="w-5 h-5" />
                </button>
                </div>
                <Dialog.Description className="mt-2 text-gray-600 font-kanit">
                    Would you like to setup an election process for your organization.
            </Dialog.Description>
            <div className="mt-4 flex justify-between">
                <button
                    className="px-4 py-2 bg-black text-white font-kanit rounded-lg hover:bg-gray-400"
                    onClick={updatedUser}
                >
                    {
                        loading ? (<Spinner/>) : "Yes"
                    }

                </button>
            <button
                onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                >
                No
                </button>
                </div>
                </Dialog.Panel>
                </Dialog>
        </div>
);
}
