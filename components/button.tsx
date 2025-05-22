
interface ButtonAuthProps {
    type?: "submit" | "button";
    label: string;
    onClick?: () => void;
    isLoading?: boolean;
}

const ButtonAuth: React.FC<ButtonAuthProps> = ({
    type = "submit",
    label,
    onClick,
    isLoading = false
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isLoading}
            className={`cursor-pointer w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
            {isLoading ? (
                <span className="flex items-center justify-center space-x-2">
                    <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                    </svg>
                    <span>Loading...</span>
                </span>
            ) : (
                label
            )}
        </button>
    );
};

export default ButtonAuth;
