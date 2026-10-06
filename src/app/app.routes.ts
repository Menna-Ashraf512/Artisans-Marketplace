import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./features/auth/auth.routes').then((module) => module.AUTH_ROUTES),
	},
	{
		path: '**',
		redirectTo: 'welcome',
	},
];
