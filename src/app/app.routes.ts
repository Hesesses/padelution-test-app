import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'events',
    loadComponent: () => import('./events/events.page').then( m => m.EventsPage)
  },
  {
    path: 'event/:slug',
    loadComponent: () => import('./event/event.page').then( m => m.EventPage)
  },

  {
    path: 'chat/:id',
    loadComponent: () => import('./chat/chat.page').then( m => m.ChatPage)
  },
  {
    path: 'leagues',
    loadComponent: () => import('./leagues/leagues.page').then( m => m.LeaguesPage)
  },
  {
    path: 'leagues/:slug',
    loadComponent: () => import('./league/league.page').then( m => m.LeaguePage)
  },
  {
    path: 'pages',
    loadComponent: () => import('./pages/pages.page').then( m => m.PagesPage)
  },
  {
    path: 'pages/:slug',
    loadComponent: () => import('./page/page.page').then( m => m.PagePage)
  },
  {
    path: 'americano',
    loadComponent: () => import('./americano/americano.page').then( m => m.AmericanoPage)
  },
  {
    path: 'match/:id',
    loadComponent: () => import('./match/match.page').then( m => m.MatchPage)
  },

];
