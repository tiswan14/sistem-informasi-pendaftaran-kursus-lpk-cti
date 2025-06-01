import snap from "./init";

interface TransactionParams {
    transaction_details: {
        order_id: string;
        gross_amount: number;
    };
    customer_details: {
        first_name: string;
        email: string;
        phone: string;
    };
}


const createTransaction = async (params: TransactionParams): Promise<{ token: string; redirect_url: string }> => {
    try {
        const transaction = await snap.createTransaction(params);
        return transaction;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

export default createTransaction;
