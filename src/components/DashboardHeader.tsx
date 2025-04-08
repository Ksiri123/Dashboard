
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useStore, initializeTheme } from "@/store/useStore";

const DashboardHeader: React.FC = () => {
  const { theme, toggleTheme } = useStore();

  // Initialize theme on component mount
  useEffect(() => {
    const initialTheme = initializeTheme();
    // Apply theme to document
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  // Update document class and localStorage when theme changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 md:px-6">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="ml-auto flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
