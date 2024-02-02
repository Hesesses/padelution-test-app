import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'matches',
        loadComponent: () =>
          import('../matches/matches.page').then((m) => m.MatchesPage),
      },
      {
        path: 'chats',
        loadComponent: () =>
          import('../chats/chats.page').then((m) => m.ChatsPage),
      },
      {
        path: 'discover',
        loadComponent: () =>
          import('../discover/discover.page').then((m) => m.DiscoverPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePage),
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
