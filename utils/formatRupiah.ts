export function formatRupiah(angka: number): string {
    if (typeof angka !== 'number' || isNaN(angka)) return '';
    return 'Rp ' + angka.toLocaleString('id-ID');
}
