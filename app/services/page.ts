// file: /app/services/page.ts

const transactionServices = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    generateTransaction: async (payload: any) => {
        const res = await fetch("/api/transaction", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            throw new Error("Gagal membuat transaksi");
        }

        return res.json();
    },
};

export default transactionServices;
