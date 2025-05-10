interface ButtonAuthProps {
    type?: "submit" | "button";
    label: string;
    onClick?: () => void;
}

const ButtonAuth: React.FC<ButtonAuthProps> = ({ type = "submit", label, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            {label}
        </button>

    );
};

export default ButtonAuth;
