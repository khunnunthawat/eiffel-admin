import React from 'react';
import { Layout, Menu, Typography, Avatar } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Text } = Typography;

const header =
  'p-0 shadow-lg relative flex justify-between h-20 z-10 items-center bg-white';
const fixed = 'fixed top-0 right-0 md:w-full z-30 bg-white';
const collapsed = 'w-20';
const button =
  'w-16 h-16 text-center text-lg cursor-pointer hover:text-blue-500 hover:bg-gray-200 ease-out';
const rightContainer = 'flex items-center';

interface HeaderLayoutProps {
  collapsed: boolean;
  toggle: () => void;
}

const Header: React.FC = () => {
  const rightContent = [
    <Menu key='user' mode='horizontal'>
      <SubMenu
        title={
          <>
            <span className='mr-1'>
              <Text type='secondary'>Hi,</Text>
            </span>
            <span>Username</span>
            <Avatar className='ml-2' icon={<UserOutlined />} />
          </>
        }
      >
        <Menu.Item key='SignOut'>
          <Text type='secondary'>Sign out</Text>
        </Menu.Item>
      </SubMenu>
    </Menu>,
  ];

  return (
    <div>
      <Layout.Header className={`${header}+${fixed}`} id='layoutHeader'>
        <div className={`${button}`}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <div className={rightContainer}>{rightContent}</div>
      </Layout.Header>
    </div>
  );
};

export default Header;
