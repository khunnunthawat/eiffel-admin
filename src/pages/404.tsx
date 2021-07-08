import React from 'react';
import { Button, Result } from 'antd';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <div className='bg-white px-12 py-6 relative'>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Link href='/'>
            <Button type='primary'>back</Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFoundPage;
