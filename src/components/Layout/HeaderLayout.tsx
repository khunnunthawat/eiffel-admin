import React from 'react';
import { Layout, Menu, Typography, Avatar } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
// const { Text } = Typography;
const { Header } = Layout;

// const header =
//   'p-0 shadow-lg relative flex justify-between h-20 z-10 items-center bg-white';
// const fixed = 'fixed top-0 right-0 md:w-full z-30 bg-white';
// const collapsed = 'w-20';
// const button =
//   'w-16 h-12 text-center text-2xl cursor-pointer hover:text-blue-500 ease-out';
// const rightContainer = 'flex items-center';

interface HeaderLayoutProps {
  collapsed: boolean;
  toggleCollapse: () => void;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ collapsed, toggleCollapse }) => {
  
  const handleClickMenu = () => {
    console.warn('Empty handleClickMenu');
  };

  // const rightContent = [
  //   <Menu
  //     key='user'
  //     mode='horizontal'
  //     className='border-none hover:border-white'
  //   >
  //     <SubMenu
  //       className='border-none hover:border-white'
  //       title={
  //         <>
  //           <span className='mr-1'>
  //             <Text type='secondary'>Hi,</Text>
  //           </span>
  //           <span>Username</span>
  //           <Avatar
  //             className='ml-2'
  //             icon={<UserOutlined />}
  //             draggable={false}
  //           />
  //         </>
  //       }
  //     >
  //       <Menu.Item key='SignOut'>
  //         <Text>Sign out</Text>
  //       </Menu.Item>
  //     </SubMenu>
  //   </Menu>,
  // ];

  return (
    <>
      {/* <Layout.Header className={`${header}+${fixed}`} id='layoutHeader'>
        <div className={`${button}`}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <div className={rightContainer}>{rightContent}</div>
      </Layout.Header> */}
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
                  <span>Soleil</span>
                  <Avatar style={{ marginLeft: 8 }} icon={<UserOutlined />} />
                </>
              }
            >
              <Menu.Item key='SignOut'>Sign out</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </Header>
    </>
  );
};

export default HeaderLayout;
