
document.getElementById('downloadForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const url = document.getElementById('urlInput').value;
    
    try {
        const response = await fetch(`https://ssstik.io/abc?url=${encodeURIComponent(url)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        document.getElementById('result').innerHTML = JSON.stringify(data);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = 'Terjadi kesalahan saat mengambil data.';
    }
});
