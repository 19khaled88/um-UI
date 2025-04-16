"use client"
import Contents from '@/components/ui/Content';
import Sidebar from '@/components/ui/Sidebar';
import { isLoggedIn } from '@/service/auth.service';
import { authKey } from '@/types';
import { Layout } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  const loginStatus = isLoggedIn(authKey);
  const router = useRouter();
  const [isLoading,setIsLoading] = useState<boolean>(false);

  useEffect(()=>{
    if(!loginStatus){
      router.push('/login');
    }
    setIsLoading(true);
  },[router,isLoading,loginStatus]);


  if(!loginStatus){
    return <p>Loading....Page</p>
  }

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