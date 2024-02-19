import { RouteObject } from 'react-router-dom';

import { INCOME } from '@constants/routes';

export const IncomeRoutes: RouteObject = {
  path: INCOME.INCOMES,
  children: [
    { path: '', element: <div>Income List</div> },
    { path: INCOME.CREATE_INCOME, element: <div>Income Create</div> },
    { path: INCOME.EDIT_INCOME, element: <div>Income Edit</div> }
  ]
};

export default IncomeRoutes;
