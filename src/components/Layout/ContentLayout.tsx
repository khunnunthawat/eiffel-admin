import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import Link from 'next/link';

const { Content } = Layout;

const ContentLayout: React.FC<any> = () => {
  return (
    <div className='p-4 overflow-auto'>
      <Breadcrumb className='mb-4' separator='>'>
        <Breadcrumb.Item key='1'>
          <Link href='/'>
            <span>home</span>
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Content className='bg-white min-h-screen'>Nunthawat Rakyard</Content>
    </div>
  );
};

export default ContentLayout;
