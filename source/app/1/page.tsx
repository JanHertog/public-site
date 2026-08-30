import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>One</h1>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
      
      <audio autoPlay controls>
        <source src="/1/PTT-20260830-WA0000.opus" type="audio/ogg; codecs=opus" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
