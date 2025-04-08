
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface KpiCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  description?: string;
  className?: string;
  trend?: {
    direction: "up" | "down" | "neutral";
    value: string;
  };
}

const KpiCard = ({
  title,
  value,
  icon,
  description,
  className,
  trend,
}: KpiCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p
            className={cn(
              "text-xs text-muted-foreground",
              trend.direction === "up" && "text-green-600 dark:text-green-500",
              trend.direction === "down" && "text-red-600 dark:text-red-500"
            )}
          >
            {trend.direction === "up" && "↑ "}
            {trend.direction === "down" && "↓ "}
            {trend.value}
          </p>
        )}
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default KpiCard;
