import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header } = Layout;
interface HeaderLayoutProps {
  collapsed: boolean;
  toggleCollapse: () => void;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({
  collapsed,
  toggleCollapse,
}) => {
  const handleClickMenu = () => {
    console.warn('Empty handleClickMenu');
  };

  return (
    <Header className='sticky top-0 shadow-md bg-white px-0 flex justify-between'>
      <div
        role='button'
        className='w-16 text-center cursor-pointer hover:bg-gray-200 text-blue-500 duration-300'
        onClick={toggleCollapse}
      >
        {collapsed ? (
          <MenuUnfoldOutlined className='text-lg' />
        ) : (
          <MenuFoldOutlined className='text-lg' />
        )}
      </div>
      <div className='overflow-hidden'>
        <Menu key='user' mode='horizontal' onClick={handleClickMenu}>
          <SubMenu
            key='user1'
            title={
              <>
                <span style={{ color: '#999', marginRight: 4 }}>Hi,</span>
                <span>Khunnunthawat</span>
                <Avatar style={{ marginLeft: 8 }} icon={<UserOutlined />} />
              </>
            }
          >
            <Menu.Item key='SignOut'>Sign out</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Header>
  );
};

export default HeaderLayout;
