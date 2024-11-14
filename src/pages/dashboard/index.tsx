import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinacialRecordList } from "./financial-record-list";
export const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="dashboard-contaner">
      <h1>Welcome {user?.firstName}! Here Are Your Finance</h1>
      <FinancialRecordForm />
      <FinacialRecordList />
    </div>
  );
};
