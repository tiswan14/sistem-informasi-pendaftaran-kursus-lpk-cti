// components/ProfileField.tsx
import { ProfileFieldProps } from "@/types/profile-field-props";

const ProfileField = ({ icon, label, value, className }: ProfileFieldProps) => {
    return (
        <div className={`flex items-start gap-3 ${className}`}>
            {icon && (
                <div className="mt-0.5">
                    {icon}
                </div>
            )}
            <div>
                <p className="text-sm font-medium text-gray-500">{label}</p>
                <p className="mt-1 text-gray-800">
                    {value || <span className="text-gray-400">Belum diisi</span>}
                </p>
            </div>
        </div>
    );
};

export default ProfileField;