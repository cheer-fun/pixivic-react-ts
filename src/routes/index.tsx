import React from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';

import Home from '../page/home/Home';
import Rank from '../page/rank/Rank';
import Find from '../page/find/Find';
import Me from '../page/me/Me';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => (
          <Redirect to={'/rank'} />
        )
      },
      {
        path: '/rank',
        component: Rank,
      },
      {
        path: '/find',
        component: Find
      },
      {
        path: '/me',
        component: Me
      }
    ]
  }
];

export default routes;
