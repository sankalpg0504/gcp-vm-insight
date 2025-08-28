import { Activity, Cloud, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardHeader = () => {
  return (
    <header className="bg-gradient-primary text-primary-foreground py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
            <Cloud className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">GCP VM Insight</h1>
            <p className="text-xl opacity-90 mt-2">
              Intelligent monitoring and optimization for Google Cloud virtual machines
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="h-6 w-6" />
              <h3 className="text-lg font-semibold">Real-time Monitoring</h3>
            </div>
            <p className="opacity-90">
              Monitor CPU utilization, network traffic, and performance metrics in real-time
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-6 w-6" />
              <h3 className="text-lg font-semibold">Cost Optimization</h3>
            </div>
            <p className="opacity-90">
              Analyze costs and get AI-powered suggestions to optimize your cloud spending
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <Cloud className="h-6 w-6" />
              <h3 className="text-lg font-semibold">Multi-Instance</h3>
            </div>
            <p className="opacity-90">
              Manage and compare performance across multiple VM instances
            </p>
          </div>
        </div>
        
        <div className="flex gap-4 mt-8">
          <Button size="lg" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
            View Dashboard
          </Button>
          <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
            Connect VM
          </Button>
        </div>
      </div>
    </header>
  );
};