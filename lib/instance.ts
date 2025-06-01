import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.sandbox.midtrans.com",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(
            process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY + ":"
        ).toString("base64")}`,
    },
});

export default instance;
