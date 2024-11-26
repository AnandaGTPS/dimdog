document.getElementById('downloadForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const url = document.getElementById('urlInput').value;
    
    try {
        const response = await fetch(`https://ssstik.io/abc?url=${encodeURIComponent(url)}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        document.getElementById('result').innerHTML = JSON.stringify(data);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = 'Terjadi kesalahan: ' + error.message;
    }
});
