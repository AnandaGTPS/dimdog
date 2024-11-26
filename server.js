<div id="result"></div>
<script>
    async function downloadTikTok() {
        const url = document.getElementById('url').value;
        const resultDiv = document.getElementById('result');

        if (!url) {
            alert('Please enter a TikTok URL');
            return;
        }

        resultDiv.innerHTML = "Processing...";

        try {
            const response = await fetch('https://your-backend-url.com/download', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            const data = await response.json();

            if (data.error) {
                resultDiv.innerHTML = `<p style="color: red;">Error: ${data.error}</p>`;
            } else {
                resultDiv.innerHTML = `
                    <p>Download Links:</p>
                    <a href="${data.videoUrl}" target="_blank" download>Download Video</a><br>
                    <a href="${data.audioUrl}" target="_blank" download>Download Audio</a>
                `;
            }
        } catch (error) {
            console.error(error);
            resultDiv.innerHTML = `<p style="color: red;">An error occurred. Please try again later.</p>`;
        }
    }
</script>
