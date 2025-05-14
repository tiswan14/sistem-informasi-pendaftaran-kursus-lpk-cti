import Link from "next/link";
import { IoAddOutline } from "react-icons/io5";

export const AddButton = () => {
    return (
        <Link
            href="/admin/room/create"
            className="flex items-center justify-between gap-1 px-3 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition duration-300 font-medium ease-in-out transform hover:scale-105"
        >
            Tambah Kamar
            <IoAddOutline className="w-5 h-5" />
        </Link>
    );
};