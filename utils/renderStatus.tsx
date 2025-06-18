const renderStatus = (status: string) => {
    switch (status) {
        case 'paid':
            return (
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    Belum Dibayar
                </span>
            );
        case 'unpaid':
            return (
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Sudah Dibayar
                </span>
            );
        default:
            return (
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                    {status}
                </span>
            );
    }
};

export default renderStatus;