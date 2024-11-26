import axios from 'axios';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { url, resolution, mediaType } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'TikTok URL is required' });
    }

    try {
        // Data dan headers untuk mengirimkan permintaan ke ssstik.io
        const data = { id: url };
        const headers = {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
        };

        // Mengirim permintaan ke API ssstik.io
        const response = await axios.post('https://ssstik.io/abc?url=dl', data, { headers });

        let downloadUrl = '';
        if (mediaType === 'audio') {
            downloadUrl = response.data.audioUrl;
        } else {
            // Pilih resolusi video
            downloadUrl = resolution === 'high' ? response.data.videoUrlHigh : response.data.videoUrlLow;
        }

        res.json({ downloadUrl });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch video download link' });
    }
}
