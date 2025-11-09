import type { ReactNode } from 'react';
import MainHeader from './MainHeader';

type LayoutProps = {
  children?: ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
