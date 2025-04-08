
import { users, analyticsData, User } from "../data/users";

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const MockApi = {
  getUsers: async (): Promise<User[]> => {
    await delay(500); // Simulate network latency
    return [...users];
  },
  
  getAnalytics: async () => {
    await delay(700);
    return { ...analyticsData };
  },
  
  searchUsers: async (query: string): Promise<User[]> => {
    await delay(300);
    const normalizedQuery = query.toLowerCase();
    
    return users.filter(user => 
      user.name.toLowerCase().includes(normalizedQuery) || 
      user.email.toLowerCase().includes(normalizedQuery)
    );
  }
};
