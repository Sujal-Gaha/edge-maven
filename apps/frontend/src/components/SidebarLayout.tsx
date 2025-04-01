import { PropsWithChildren, useState } from 'react';

import { Clock, Search } from 'lucide-react';
import { format } from 'date-fns';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
  Input,
} from '@libs/components';

interface HistoryItem {
  id: string;
  name: string;
  timestamp: Date;
}

interface HistorySidebarProps {
  history: HistoryItem[];
}

export function HistorySidebar({ history }: HistorySidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-bold">Edge Maven</h2>
        </div>
        <div className="px-4 pb-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search history..." className="pl-8" />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>History</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {history.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton>
                    <div className="flex flex-col">
                      <span>{item.name}</span>
                      <span className="flex items-center text-xs text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        {format(item.timestamp, 'MMM d, yyyy')}
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

export const SidebarLayout = (props: PropsWithChildren) => {
  const [history, setHistory] = useState<Array<{ id: string; name: string; timestamp: Date }>>([
    { id: '1', name: 'BFS on Binary Tree', timestamp: new Date(2025, 0, 15) },
    { id: '2', name: 'DFS on Directed Graph', timestamp: new Date(2025, 0, 20) },
    { id: '3', name: "Dijkstra's Algorithm", timestamp: new Date(2025, 0, 25) },
  ]);

  return (
    <div className="flex h-screen w-full">
      <HistorySidebar history={history} />
      {props.children}
    </div>
  );
};
