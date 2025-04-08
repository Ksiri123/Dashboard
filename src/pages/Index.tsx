
import React, { useState, useEffect } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import KpiCard from "@/components/KpiCard";
import SignupChart from "@/components/SignupChart";
import UserTable from "@/components/UserTable";
import { MockApi } from "@/api/mockApi";
import { User } from "@/data/users";
import { Users, BarChart, Activity } from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [analytics, setAnalytics] = useState({
    totalUsers: 0,
    newSignups: 0,
    activeSessions: 0,
    weeklySignups: [] as { week: string; signups: number }[]
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [usersData, analyticsData] = await Promise.all([
          MockApi.getUsers(),
          MockApi.getAnalytics()
        ]);
        
        setUsers(usersData);
        setAnalytics(analyticsData);
        toast.success("Dashboard data loaded successfully");
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to load dashboard data");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background animate-in">
      <DashboardHeader />
      
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <KpiCard
            title="Total Users"
            value={analytics.totalUsers}
            icon={<Users className="h-4 w-4" />}
            trend={{ direction: "up", value: "+12.5% from last month" }}
          />
          <KpiCard
            title="New Signups"
            value={analytics.newSignups}
            icon={<BarChart className="h-4 w-4" />}
            trend={{ direction: "up", value: "+23.1% from last week" }}
          />
          <KpiCard
            title="Active Sessions"
            value={analytics.activeSessions}
            icon={<Activity className="h-4 w-4" />}
            trend={{ direction: "down", value: "-5.2% from yesterday" }}
          />
        </div>
        
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
          <SignupChart data={analytics.weeklySignups} />
        </div>
        
        <UserTable users={users} isLoading={isLoading} />
      </main>
    </div>
  );
};

export default Dashboard;
