import { useLocation, useNavigate } from 'react-router-dom';
import useTranslate from '@hooks/intl';

import { Button } from 'antd';
import { BreadCrumbItem, getBreadcrumbItems } from './BreadcrumbsConfig';
import { SideNavItems } from '../side-nav-bar/sideBarConfig';

const BreadCrumbs = () => {
  const { pathname: currentPath } = useLocation();
  const translate = useTranslate();
  const navigate = useNavigate();

  const breadCrumbItems: BreadCrumbItem[] = getBreadcrumbItems(
    currentPath,
    SideNavItems
  );

  const onClickBreadcrumbItem = (breadcrumbItem: BreadCrumbItem) => {
    if (breadcrumbItem.path) navigate(breadcrumbItem.path);
  };

  // TODO: Convert to a component and memoize for performance.
  const renderBreadcrumbItem = (
    breadcrumbItem: BreadCrumbItem,
    index: number
  ) => (
    <div className="breadcrumb-item flex flex-row items-center">
      {index !== 0 && <div className="mx-2">/</div>}
      <Button
        type="text"
        className="flex h-[30px] flex-row items-center justify-center p-2"
        onClick={() => onClickBreadcrumbItem(breadcrumbItem)}
        disabled={
          breadcrumbItem.disabled ||
          (index === 0 && breadCrumbItems.length === 1)
        }
      >
        {breadcrumbItem.icon && <div>{breadcrumbItem.icon}</div>}
        {breadcrumbItem.icon && breadcrumbItem.title && (
          <div className="mx-1" />
        )}
        {breadcrumbItem.title && <div>{translate(breadcrumbItem.title)}</div>}
      </Button>
    </div>
  );

  return (
    <div className="breadcrumbs-section flex flex-row items-center justify-start">
      {breadCrumbItems.map(renderBreadcrumbItem)}
    </div>
  );
};

export default BreadCrumbs;
