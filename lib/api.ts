export async function fetchSertifikat() {
    try {
        const response = await fetch('/api/sertifikat/session', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch sertifikat:', error);
        return [];
    }
}
