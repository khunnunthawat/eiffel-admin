import React, { useState } from 'react';
import HeaderLayout from '@/components/Layout/HeaderLayout';
import { Layout } from 'antd';

const MainLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <div>
      <Layout className='h-screen'>
        <Layout>
          <HeaderLayout toggleCollapse={toggleCollapse} collapsed={collapsed} />
          <div>{children}</div>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
