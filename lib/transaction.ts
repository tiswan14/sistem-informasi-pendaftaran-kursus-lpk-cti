// lib/transaction.ts
import snap from "./init";

const createTransaction = async (params: any): Promise<{ token: string; redirect_url: string }> => {
    try {
        const transaction = await snap.createTransaction(params);
        return transaction;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

export default createTransaction;
