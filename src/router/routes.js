import {
  AssessDateManagePage,
  AssessPage,
  CriteriasDetailPage,
  CriteriasManagePage,
  DepartmentsManagePage,
  EmployeeManagePage,
  ProjectManagePage,
  UserDetailRatingPage
} from '@/pages'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: "/", redirect: '/employee-manage' },
  { path: "/employee-manage", component: EmployeeManagePage },
  { path: "/projects-manage", component: ProjectManagePage },
  { path: "/assess-page", component: AssessPage },
  { path: "/assess-date-manage", component: AssessDateManagePage },
  { path: "/departments-manage", component: DepartmentsManagePage },
  { path: "/criterias-manage", component: CriteriasManagePage },
  { path: "/detail-criterias/:id", component: CriteriasDetailPage },
  { path: "/detail-user-rating/:userId", component: UserDetailRatingPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
