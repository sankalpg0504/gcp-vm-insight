import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity } from "lucide-react";

const performanceData = [
  { time: "00:00", cpu: 12, memory: 34, network: 23 },
  { time: "04:00", cpu: 8, memory: 32, network: 18 },
  { time: "08:00", cpu: 45, memory: 56, network: 67 },
  { time: "12:00", cpu: 89, memory: 78, network: 89 },
  { time: "16:00", cpu: 67, memory: 65, network: 45 },
  { time: "20:00", cpu: 34, memory: 45, network: 34 },
  { time: "24:00", cpu: 15, memory: 28, network: 12 },
];

export const PerformanceChart = () => {
  return (
    <Card className="bg-gradient-card border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Activity className="h-5 w-5 text-primary" />
          </div>
          Performance Metrics (24h)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  boxShadow: "var(--shadow-lg)"
                }}
              />
              <Line
                type="monotone"
                dataKey="cpu"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                name="CPU %"
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="memory"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                name="Memory %"
                dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="network"
                stroke="hsl(var(--success))"
                strokeWidth={2}
                name="Network %"
                dot={{ fill: "hsl(var(--success))", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-sm text-muted-foreground">CPU Usage</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <span className="text-sm text-muted-foreground">Memory Usage</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-success"></div>
            <span className="text-sm text-muted-foreground">Network Usage</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};