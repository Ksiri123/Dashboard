
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  joinedAt: string;
}

export const users: User[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    joinedAt: "2024-01-05"
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
    role: "User",
    joinedAt: "2024-01-12"
  },
  {
    id: "3",
    name: "Charlie Davis",
    email: "charlie@example.com",
    role: "Editor",
    joinedAt: "2024-01-18"
  },
  {
    id: "4",
    name: "Diana Miller",
    email: "diana@example.com",
    role: "User",
    joinedAt: "2024-01-20"
  },
  {
    id: "5",
    name: "Ethan Wilson",
    email: "ethan@example.com",
    role: "Manager",
    joinedAt: "2024-01-23"
  },
  {
    id: "6",
    name: "Fiona Garcia",
    email: "fiona@example.com",
    role: "User",
    joinedAt: "2024-01-27"
  },
  {
    id: "7",
    name: "George Martinez",
    email: "george@example.com",
    role: "Editor",
    joinedAt: "2024-02-03"
  },
  {
    id: "8",
    name: "Hannah Brown",
    email: "hannah@example.com",
    role: "User",
    joinedAt: "2024-02-10"
  },
  {
    id: "9",
    name: "Ian Taylor",
    email: "ian@example.com",
    role: "Admin",
    joinedAt: "2024-02-15"
  },
  {
    id: "10",
    name: "Julia Adams",
    email: "julia@example.com",
    role: "User",
    joinedAt: "2024-02-21"
  },
  {
    id: "11",
    name: "Kevin Young",
    email: "kevin@example.com",
    role: "Manager",
    joinedAt: "2024-02-27"
  },
  {
    id: "12",
    name: "Laura Evans",
    email: "laura@example.com",
    role: "User",
    joinedAt: "2024-03-05"
  }
];

export const analyticsData = {
  totalUsers: 1253,
  newSignups: 48,
  activeSessions: 326,
  weeklySignups: [
    { week: "Week 1", signups: 12 },
    { week: "Week 2", signups: 19 },
    { week: "Week 3", signups: 15 },
    { week: "Week 4", signups: 27 },
    { week: "Week 5", signups: 23 },
    { week: "Week 6", signups: 39 },
    { week: "Week 7", signups: 48 }
  ]
};
