import { useEffect, useState } from 'react';
import * as d3 from 'd3';

export default function TopologyDiagram() {
  const [scenario, setScenario] = useState<'success' | 'fail'>('success');

  useEffect(() => {
    const svg = d3.select('#topology')
      .attr('width', 800)
      .attr('height', 400)
      .style('background', '#ffffff')
      .style('border-radius', '8px')
      .style('box-shadow', '0 2px 10px rgba(0,0,0,0.1)');

    svg.selectAll('*').remove();

    const nodes = [
      { id: 'Client A', x: 100, y: 100 },
      { id: 'Client B', x: 100, y: 300 },
      { id: 'Call Server', x: 400, y: 200 },
      { id: 'Media Gateway', x: 700, y: 200 },
    ];

    const links = scenario === 'success' ? [
      { source: 'Client A', target: 'Call Server', type: 'SIP' },
      { source: 'Client B', target: 'Call Server', type: 'SIP' },
      { source: 'Client A', target: 'Media Gateway', type: 'RTP' },
      { source: 'Client B', target: 'Media Gateway', type: 'RTP' },
    ] : [
      { source: 'Client A', target: 'Call Server', type: 'SIP' },
      { source: 'Client B', target: 'Call Server', type: 'SIP' },
      { source: 'Call Server', target: 'Media Gateway', type: 'FAIL' },
    ];

    svg.selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('x1', d => nodes.find(n => n.id === d.source)!.x)
      .attr('y1', d => nodes.find(n => n.id === d.source)!.y)
      .attr('x2', d => nodes.find(n => n.id === d.target)!.x)
      .attr('y2', d => nodes.find(n => n.id === d.target)!.y)
      .attr('stroke', d => d.type === 'FAIL' ? 'red' : (d.type === 'SIP' ? 'blue' : 'green'))
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', d => d.type === 'SIP' ? '4 2' : d.type === 'FAIL' ? '2 2' : null);

    svg.selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', 30)
      .attr('fill', (_, i) => d3.schemeTableau10[i]);

    svg.selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('x', d => d.x)
      .attr('y', d => d.y + 45)
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .attr('fill', '#333')
      .text(d => d.id);

    // animation paquets RTP
    if (scenario === 'success') {
      const rtpPath = svg.append('circle')
        .attr('r', 5)
        .attr('fill', 'green');

      let t = 0;
      d3.timer(() => {
        const ax = 100, ay = 100, bx = 700, by = 200;
        const x = ax + (bx - ax) * Math.abs(Math.sin(t));
        const y = ay + (by - ay) * Math.abs(Math.sin(t));
        rtpPath.attr('cx', x).attr('cy', y);
        t += 0.02;
      });
    }
  }, [scenario]);

  return (
    <div className="text-center mb-8">
      <div className="mb-4">
        <button onClick={() => setScenario('success')} className="bg-green-600 text-white px-4 py-2 mx-2 rounded shadow">Appel Réussi</button>
        <button onClick={() => setScenario('fail')} className="bg-red-600 text-white px-4 py-2 mx-2 rounded shadow">Appel Échoué</button>
      </div>
      <svg id="topology" className="mx-auto" />
    </div>
  );
}