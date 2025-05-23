import { ReactNode } from "react";

export type ProfileFieldProps = {
    icon?: ReactNode;
    label: string;
    value: string;
    className?: string;
};