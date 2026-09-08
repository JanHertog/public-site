import { QRCodeSVG } from "qrcode.react";

export function generateStaticParams() {
    return Array.from({ length: 40 }, (_, i) => ({
        id: String(i + 1),
    }));
}
export default async function Index({ params }: { params: Promise<{ id: string }> }) {
    // Await the params Promise
    const { id } = await params;

    // Construct the exact URL on the server
    const currentUrl = `https://markvangelder.nl/scouting-hitster/${id}/`;

    return (
        <div style={{ padding: '20px', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

            <h1>Het audio bestand:</h1>
            <audio autoPlay controls style={{ width: '100%', maxWidth: '400px', marginBottom: '30px' }}>
                <source src="soundfile.opus" type="audio/ogg; codecs=opus" />
                Your browser does not support the audio element.
            </audio>

            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <hr style={{ width: '80%', borderColor: '#eaeaea', marginBottom: '30px' }} />

                {/* 3. Render as an SVG directly into the HTML at build time */}
                <QRCodeSVG
                    value={currentUrl}
                    size={160}
                    level={'M'}
                    style={{ marginBottom: '10px' }}
                />

                <p style={{ marginTop: '10px', fontSize: '1rem', color: '#555' }}>
                    De link naar deze pagina:
                </p>
                <a
                    href={currentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '1.2rem', color: '#0070f3', textDecoration: 'none', wordWrap: 'break-word', maxWidth: '100%' }}
                >
                    {currentUrl}
                </a>
            </div>
        </div>
    );
}
