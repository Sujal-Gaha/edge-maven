import { useCallback, useRef, useState } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap,
  Background,
  type Node,
  type Edge,
  type Connection,
  ReactFlowProvider,
  Panel,
  ConnectionLineType,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import { AlgorithmSelector } from '../components/algorithm-selector';
import { GraphControls } from '../components/graph-controls';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    data: { label: 'A' },
    position: { x: 250, y: 100 },
  },
  {
    id: '2',
    type: 'custom',
    data: { label: 'B' },
    position: { x: 100, y: 200 },
  },
  {
    id: '3',
    type: 'custom',
    data: { label: 'C' },
    position: { x: 400, y: 200 },
  },
];
const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
];
export const GraphPage = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>('dfs');
  const [traversalNodes, setTraversalNodes] = useState<{ start: string; end: string | null }>({
    start: '',
    end: null,
  });

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div className="w-[100vw] h-[100vh]">
      <ReactFlowProvider>
        <div className="h-full w-full" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            connectionLineType={ConnectionLineType.SmoothStep}
          >
            <Controls />
            <MiniMap />
            <Background />
            <Panel position="top-right" className="flex gap-2">
              <AlgorithmSelector
                selectedAlgorithm={selectedAlgorithm}
                setSelectedAlgorithm={setSelectedAlgorithm}
                onRun={() => null}
                traversalNodes={traversalNodes}
                nodes={nodes}
              />
            </Panel>
            <Panel position="top-left">
              <GraphControls />
            </Panel>
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};
