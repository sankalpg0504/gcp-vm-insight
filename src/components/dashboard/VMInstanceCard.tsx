import { Calendar, Cpu, HardDrive, Network, User, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface VMInstanceData {
  instance: string;
  type: string;
  vCPUs: number;
  ram: number;
  hourly: number;
  daily: number;
  monthly: number;
  cpuUtil: number;
  rxBytes: string;
  txBytes: string;
  created: string;
  createdBy: string;
}

interface VMInstanceCardProps {
  data: VMInstanceData;
}

export const VMInstanceCard = ({ data }: VMInstanceCardProps) => {
  const getUtilizationColor = (util: number) => {
    if (util > 80) return "text-destructive";
    if (util > 60) return "text-warning";
    return "text-success";
  };

  const getUtilizationBadge = (util: number) => {
    if (util > 80) return "High";
    if (util > 60) return "Medium";
    return "Low";
  };

  return (
    <Card className="bg-gradient-card border-border/50 shadow-lg hover:shadow-glow transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <HardDrive className="h-5 w-5 text-primary" />
            </div>
            {data.instance}
          </CardTitle>
          <Badge variant="secondary">{data.type}</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Specs */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              <span className="font-medium">{data.vCPUs}</span> vCPUs
            </span>
          </div>
          <div className="flex items-center gap-2">
            <HardDrive className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              <span className="font-medium">{data.ram}</span> GB RAM
            </span>
          </div>
        </div>

        {/* CPU Utilization */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">CPU Utilization (24h)</span>
            <Badge variant={data.cpuUtil > 80 ? "destructive" : data.cpuUtil > 60 ? "secondary" : "outline"}>
              {getUtilizationBadge(data.cpuUtil)}
            </Badge>
          </div>
          <Progress value={data.cpuUtil} className="h-2" />
          <span className={`text-sm font-semibold ${getUtilizationColor(data.cpuUtil)}`}>
            {data.cpuUtil}%
          </span>
        </div>

        {/* Network Traffic */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Network className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">RX Bytes</span>
            </div>
            <p className="text-sm font-medium">{data.rxBytes}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Network className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">TX Bytes</span>
            </div>
            <p className="text-sm font-medium">{data.txBytes}</p>
          </div>
        </div>

        {/* Cost Information */}
        <div className="bg-muted/30 rounded-lg p-4 space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Cost Breakdown</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div>
              <span className="text-muted-foreground">Hourly:</span>
              <p className="font-medium">${data.hourly}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Daily:</span>
              <p className="font-medium">${data.daily}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Monthly:</span>
              <p className="font-medium text-primary">${data.monthly}</p>
            </div>
          </div>
        </div>

        {/* Instance Details */}
        <div className="pt-4 border-t border-border/50 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Created:</span>
            <span className="font-medium">{data.created}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Created by:</span>
            <span className="font-medium">{data.createdBy}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};