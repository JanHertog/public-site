import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>One</h1>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
      
      <audio autoplay controls>
        <source src="your-audio-file.opus" type="audio/ogg; codecs=opus">
        Your browser does not support the audio element.
    </audio>
    </>
  );
}
