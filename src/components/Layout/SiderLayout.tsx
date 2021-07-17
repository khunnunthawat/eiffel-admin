import React from 'react';
import { SiderProps } from 'antd/lib/layout';
import Sider from 'antd/lib/layout/Sider';
import { Menu } from 'antd';
import Link from 'next/link';

const { SubMenu } = Menu;
interface SidebarProps extends SiderProps {
  isMobile?: boolean;
}

const SiderLayout: React.FC<any> = (props: SidebarProps) => {
  const { isMobile, collapsed, onCollapse } = props;

  return (
    <Sider
      width={256}
      collapsible
      trigger={null}
      breakpoint='xl'
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <div className='flex flex-col h-screen'>
        <div className='h-16  text-white flex items-center justify-center font-semibold'>
          CoBank
        </div>

        <div className='flex-1 py-6 overflow-y-auto overflow-x-hidden app-sider-menu'>
          <Menu
            theme='dark'
            mode='inline'
            onClick={() =>
              onCollapse &&
              isMobile &&
              onCollapse(props.collapsed ? false : true, 'clickTrigger')
            }
          >
            <SubMenu key='1' title='member-menu'>
              <Menu.Item key='member'>
                <Link href='/'>member-list</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>

        {!collapsed && (
          <div className='text-gray-500	h-16 flex items-center justify-center truncate'>
            khunnunthawat @ 2021
          </div>
        )}
      </div>
    </Sider>
  );
};

export default SiderLayout;
