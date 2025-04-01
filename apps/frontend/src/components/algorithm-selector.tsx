import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@libs/components';
import { Play } from 'lucide-react';

interface AlgorithmSelectorProps {
  selectedAlgorithm: string;
  setSelectedAlgorithm: (value: string) => void;
  onRun: () => void;
  traversalNodes: { start: string; end: string | null };
  nodes: any[];
}

export const AlgorithmSelector = ({
  selectedAlgorithm,
  setSelectedAlgorithm,
  onRun,
  traversalNodes,
  nodes,
}: AlgorithmSelectorProps) => {
  // Find the node labels for display
  const startNodeLabel = nodes.find((n) => n.id === traversalNodes.start)?.data.label || '';
  const endNodeLabel = traversalNodes.end ? nodes.find((n) => n.id === traversalNodes.end)?.data.label || '' : '';

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-sm">
        <Select value={selectedAlgorithm} onValueChange={setSelectedAlgorithm}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Algorithm" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dfs">Depth-First Search</SelectItem>
            <SelectItem value="bfs">Breadth-First Search</SelectItem>
            <SelectItem value="dijkstra">Dijkstra's Algorithm</SelectItem>
            <SelectItem value="astar">A* Search</SelectItem>
            <SelectItem value="kruskal">Kruskal's MST</SelectItem>
            <SelectItem value="prim">Prim's MST</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={onRun} size="sm">
          <Play className="mr-2 h-4 w-4" />
          Run
        </Button>
      </div>
      {traversalNodes.start && (
        <div className="bg-white p-2 rounded-md shadow-sm text-sm">
          <p className="font-medium">
            Traversal:
            <span className="text-green-600 ml-1">
              {startNodeLabel} {traversalNodes.start}
            </span>
            {traversalNodes.end && (
              <>
                <span className="mx-1">→</span>
                <span className="text-blue-600">
                  {endNodeLabel} {traversalNodes.end}
                </span>
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
};
