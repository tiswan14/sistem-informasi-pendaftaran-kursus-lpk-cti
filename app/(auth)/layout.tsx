
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-lg bg-white rounded-lg shadow">
                {children}
            </div>
        </div>

    )
}

export default AuthLayout
