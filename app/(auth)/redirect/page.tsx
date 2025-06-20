import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectByRole() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return;

        if (!session) {
            router.replace("/login");
            return;
        }

        const role = session.user.role;

        if (role === "admin") {
            router.replace("/dashboard");
        } else {
            router.replace("/");
        }
    }, [status, session, router]);

    return <p className="text-center mt-10">Mengarahkan...</p>;
}
