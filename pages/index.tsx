import TopologyDiagram from '../components/TopologyDiagram';
import SIPTimeline from '../components/SIPTimeline';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">Dashboard NGN - Visualisation VoIP</h1>
      <p className="text-center text-gray-600 mb-8">
        Simulation d’un appel VoIP dans une architecture NGN (Next Generation Network)
      </p>
      <TopologyDiagram />
      <SIPTimeline />
    </div>
  );
}