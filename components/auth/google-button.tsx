import { signIn } from "@/auth";
import { IoLogoGoogle } from "react-icons/io5";

const GoogleButton = () => {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("google", { redirectTo: "/" });
            }}
        >
            <button
                type="submit"
                className="cursor-pointer mx-auto flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
            >
                <IoLogoGoogle size={20} />
                <span>Sign In with Google</span>
            </button>
        </form>
    );
};

export default GoogleButton;
