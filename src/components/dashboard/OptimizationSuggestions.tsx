import { Lightbulb, TrendingDown, Zap, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Suggestion {
  id: string;
  type: "cost" | "performance" | "efficiency";
  priority: "high" | "medium" | "low";
  title: string;
  description: string;
  impact: string;
  instance?: string;
}

const suggestions: Suggestion[] = [
  {
    id: "1",
    type: "cost",
    priority: "high",
    title: "Downsize VM-Production-01",
    description: "CPU utilization averaging 12% over the past 7 days. Consider switching to e2-standard-2 to save costs.",
    impact: "Save $156/month",
    instance: "VM-Production-01"
  },
  {
    id: "2",
    type: "performance",
    priority: "medium",
    title: "Scale VM-Analytics-03",
    description: "Consistently high CPU usage (89%). Upgrade to n2-standard-8 for better performance.",
    impact: "Improve response time by 40%",
    instance: "VM-Analytics-03"
  },
  {
    id: "3",
    type: "efficiency",
    priority: "low",
    title: "Enable Auto-scaling",
    description: "Set up automatic scaling based on CPU metrics to handle traffic spikes efficiently.",
    impact: "Reduce manual intervention"
  },
  {
    id: "4",
    type: "cost",
    priority: "medium",
    title: "Optimize Network Usage",
    description: "High egress traffic detected. Consider using CDN for static content delivery.",
    impact: "Save $89/month on network costs"
  }
];

export const OptimizationSuggestions = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "cost":
        return <DollarSign className="h-5 w-5 text-success" />;
      case "performance":
        return <Zap className="h-5 w-5 text-warning" />;
      case "efficiency":
        return <TrendingDown className="h-5 w-5 text-primary" />;
      default:
        return <Lightbulb className="h-5 w-5 text-accent" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "secondary";
      case "low":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <Card className="bg-gradient-card border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="p-2 bg-accent/10 rounded-lg">
            <Lightbulb className="h-5 w-5 text-accent" />
          </div>
          AI-Powered Optimization Suggestions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="p-4 bg-background/50 rounded-lg border border-border/30 hover:bg-background/80 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                {getIcon(suggestion.type)}
                <div>
                  <h4 className="font-semibold text-foreground">{suggestion.title}</h4>
                  {suggestion.instance && (
                    <Badge variant="outline" className="mt-1 text-xs">
                      {suggestion.instance}
                    </Badge>
                  )}
                </div>
              </div>
              <Badge variant={getPriorityColor(suggestion.priority)}>
                {suggestion.priority.toUpperCase()}
              </Badge>
            </div>
            
            <p className="text-sm text-muted-foreground mb-2">
              {suggestion.description}
            </p>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Impact:</span>
              <span className="text-xs font-medium text-primary">
                {suggestion.impact}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};