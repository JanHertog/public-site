
export default function Index() {
  return (
    <>
      <h1>Het audio bestand:</h1>
      
      <audio autoPlay controls>
        <source src="PTT-20260830-WA0000.opus" type="audio/ogg; codecs=opus" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
