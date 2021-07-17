import React, { useState } from 'react';
import { Layout, Drawer } from 'antd';
import { HeaderLayout, ContentLayout, SiderLayout } from '@/components/Layout';

const MainLayout: React.FC<any> = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMoblie, setisMoblie] = useState(false);

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <Layout className='h-screen'>
      {isMoblie ? (
        <Drawer
          maskClosable
          closable={false}
          onClose={toggleCollapse}
          visible={!collapsed}
          placement='left'
          bodyStyle={{ padding: 0 }}
        >
          <SiderLayout
            isMobile={isMoblie}
            collapsed={false}
            onCollapse={toggleCollapse}
          />
        </Drawer>
      ) : (
        <SiderLayout collapsed={collapsed} onCollapse={toggleCollapse} />
      )}

      <Layout>
        <HeaderLayout toggleCollapse={toggleCollapse} collapsed={collapsed} />
        <ContentLayout />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
