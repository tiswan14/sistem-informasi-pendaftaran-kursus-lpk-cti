export function formatTanggalIndonesia(tanggal: Date | string): string {
    if (!tanggal) return '-';

    const dateObj = new Date(tanggal);

    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = dateObj.toLocaleString('id-ID', { month: 'short' }); // "Feb"
    const year = dateObj.getFullYear();

    return `${day} ${month} ${year}`;
}
