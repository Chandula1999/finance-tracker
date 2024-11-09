import { useUser } from "@clerk/clerk-react";
export const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="dashboard-contaner">
      <h1>Welcome {user?.firstName}! Here Are Your Finance</h1>
    </div>
  );
};
