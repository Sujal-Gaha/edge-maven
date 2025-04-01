import type React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircleIcon, Plus, ArrowRight, ArrowLeftRight, Trash2, Save, ChevronDown, Settings } from 'lucide-react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@libs/components';

export const GraphControls = () => {
  const [nodeName, setNodeName] = useState('');
  const [sourceNode, setSourceNode] = useState('');
  const [targetNode, setTargetNode] = useState('');
  const [isBidirectional, setIsBidirectional] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);

  const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const toggleMinimized = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <AnimatePresence initial={false}>
      {isMinimized ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="absolute top-4 left-4 z-10"
        >
          <Button onClick={toggleMinimized} size="icon" className="h-10 w-10 rounded-full shadow-lg">
            <Settings className="h-5 w-5" />
          </Button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          <Card className="w-[300px]">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Graph Controls</CardTitle>
                <Button variant="ghost" size="icon" onClick={toggleMinimized} className="h-8 w-8">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>Add nodes and edges to your graph</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="nodes">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="nodes">Nodes</TabsTrigger>
                  <TabsTrigger value="edges">Edges</TabsTrigger>
                </TabsList>
                <TabsContent value="nodes" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="node-name">Node Label</Label>
                    <div className="flex gap-2">
                      <Input
                        id="node-name"
                        value={nodeName}
                        onChange={(e) => setNodeName(e.target.value)}
                        placeholder="Enter node label"
                      />
                      <Button variant="outline" size="icon">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 cursor-grab items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-white"
                    draggable
                    onDragStart={(event) => onDragStart(event, 'custom')}
                  >
                    <CircleIcon className="h-6 w-6 text-gray-400" />
                  </motion.div>
                  <div className="text-xs text-muted-foreground">Drag to add a new node to the canvas</div>
                </TabsContent>
                <TabsContent value="edges" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="source-node">Source Node</Label>
                    <Input
                      id="source-node"
                      value={sourceNode}
                      onChange={(e) => setSourceNode(e.target.value)}
                      placeholder="Source node ID"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="target-node">Target Node</Label>
                    <Input
                      id="target-node"
                      value={targetNode}
                      onChange={(e) => setTargetNode(e.target.value)}
                      placeholder="Target node ID"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setIsBidirectional(!isBidirectional)}
                      className={isBidirectional ? 'bg-primary text-primary-foreground' : ''}
                    >
                      {isBidirectional ? <ArrowLeftRight className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                    </Button>
                    <span className="text-sm">{isBidirectional ? 'Bidirectional' : 'Unidirectional'}</span>
                  </div>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button className="w-full">Add Connection</Button>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear
                </Button>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button size="sm">
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
