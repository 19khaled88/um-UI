"use client"
import Contents from '@/components/ui/Content';
import Sidebar from '@/components/ui/Sidebar';
import { Layout } from 'antd';
import React from 'react';

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
   <Layout hasSider>
    <Sidebar />
      
    <Contents>
      {children}
    </Contents>
    </Layout>
  );
};

export default DashboardLayout;