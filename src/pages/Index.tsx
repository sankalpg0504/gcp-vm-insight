import { Cpu, DollarSign, Network, Server } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { VMInstanceCard } from "@/components/dashboard/VMInstanceCard";
import { OptimizationSuggestions } from "@/components/dashboard/OptimizationSuggestions";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";

const Index = () => {
  // Mock data for demonstration
  const vmInstances = [
    {
      instance: "VM-Production-01",
      type: "e2-standard-4",
      vCPUs: 4,
      ram: 16,
      hourly: 0.268,
      daily: 6.43,
      monthly: 193.00,
      cpuUtil: 12,
      rxBytes: "1.2 GB",
      txBytes: "856 MB",
      created: "2024-01-15",
      createdBy: "admin@company.com"
    },
    {
      instance: "VM-Analytics-03",
      type: "n2-standard-4",
      vCPUs: 4,
      ram: 16,
      hourly: 0.389,
      daily: 9.34,
      monthly: 280.00,
      cpuUtil: 89,
      rxBytes: "3.4 GB",
      txBytes: "2.1 GB",
      created: "2024-02-08",
      createdBy: "devops@company.com"
    },
    {
      instance: "VM-Database-02",
      type: "n2-highmem-2",
      vCPUs: 2,
      ram: 16,
      hourly: 0.298,
      daily: 7.15,
      monthly: 214.50,
      cpuUtil: 45,
      rxBytes: "2.8 GB",
      txBytes: "1.5 GB",
      created: "2024-01-20",
      createdBy: "dba@company.com"
    }
  ];

  const totalMonthlyCost = vmInstances.reduce((sum, vm) => sum + vm.monthly, 0);
  const avgCpuUtil = vmInstances.reduce((sum, vm) => sum + vm.cpuUtil, 0) / vmInstances.length;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Instances"
            value={vmInstances.length}
            icon={<Server className="h-5 w-5 text-primary" />}
            change="+2 this week"
            changeType="positive"
          />
          <MetricCard
            title="Average CPU Usage"
            value={`${Math.round(avgCpuUtil)}%`}
            icon={<Cpu className="h-5 w-5 text-primary" />}
            change={avgCpuUtil > 70 ? "High" : avgCpuUtil > 40 ? "Medium" : "Low"}
            changeType={avgCpuUtil > 70 ? "negative" : avgCpuUtil > 40 ? "neutral" : "positive"}
          />
          <MetricCard
            title="Monthly Cost"
            value={`$${totalMonthlyCost.toFixed(0)}`}
            icon={<DollarSign className="h-5 w-5 text-primary" />}
            change="$245 saved"
            changeType="positive"
          />
          <MetricCard
            title="Network Traffic"
            value="7.4 GB"
            icon={<Network className="h-5 w-5 text-primary" />}
            change="+15% vs last week"
            changeType="neutral"
          />
        </div>

        {/* Performance Chart and Suggestions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <PerformanceChart />
          </div>
          <div>
            <OptimizationSuggestions />
          </div>
        </div>

        {/* VM Instances */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Virtual Machine Instances</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {vmInstances.map((vm, index) => (
              <VMInstanceCard key={index} data={vm} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
