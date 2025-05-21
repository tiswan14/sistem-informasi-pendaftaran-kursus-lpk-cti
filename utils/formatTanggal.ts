export function formatTanggalIndonesia(tanggal: Date | string): string {
    if (!tanggal) return '-';
    const dateObj = new Date(tanggal);
    return dateObj.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}
