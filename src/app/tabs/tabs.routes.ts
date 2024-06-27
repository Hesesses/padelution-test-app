import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {sharedRoutes} from "../shared.routes";

function getChildren(firstItem: any) {
  // console.log(sharedRoutes);
  return [firstItem,...sharedRoutes];
}

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: getChildren(
  {
            path: '',
            loadComponent: () => import('../home/home.page').then((m) => m.HomePage),
          }
        )
      },
      {
        path: 'play',
        children: getChildren(
          {
            path: '',
            loadComponent: () =>
              import('../play/play.page').then((m) => m.PlayPage),
          }
        )
      },
      {
        path: 'chats',
        children: getChildren(
          {
            path: '',
            loadComponent: () =>
              import('../chats/chats.page').then((m) => m.ChatsPage),
          }
        )
      },
      {
        path: 'discover',
        children: getChildren(
          {
            path: '',
            loadComponent: () =>
              import('../discover/discover.page').then((m) => m.DiscoverPage),
          }
        )
      },
      {
        path: 'profile',
        children: getChildren(
          {
            path: '',
            loadComponent: () =>
              import('../profile/profile.page').then((m) => m.ProfilePage),
          }
        )
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
