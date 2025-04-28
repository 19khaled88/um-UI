"use client";

import "@ant-design/v5-patch-for-react-19";
import Contents from "@/components/ui/Content";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/service/auth.service";
import { authKey } from "@/types";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoadingComponent from "@/components/loading/LoadingPage";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const status = await isLoggedIn(authKey);
      if (!status) {
        router.push("/login");
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, [router]);

  if (isAuthenticated === null) {
    return <LoadingComponent />
  }

  return (
    <Layout hasSider>
      <Sidebar />

      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
