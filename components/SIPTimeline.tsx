export default function SIPTimeline() {
  const messages = ['INVITE', '180 RINGING', '200 OK', 'ACK', 'RTP Flow'];
  return (
    <div className="bg-white shadow rounded p-4 max-w-2xl mx-auto mb-10">
      <h2 className="text-xl font-semibold mb-3 text-blue-700">Messages SIP simulés</h2>
      <ul className="list-disc list-inside text-gray-700">
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}