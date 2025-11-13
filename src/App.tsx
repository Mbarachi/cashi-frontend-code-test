import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/LoginPage";
import TransactionDetail from "./pages/TransactionDetail";
import { Dashboard } from "./pages/dasbhboard/Dashboard";
import { TransactionsPage } from "./pages/transaction/Transactions";
import { AppLayout } from "@components/layout/AppLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Public page */}
        <Route path="/login" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/transactions/:id" element={<TransactionDetail />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
