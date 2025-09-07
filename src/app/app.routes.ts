
import { Routes } from '@angular/router';
import { Chat } from './chat/chat';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'chat' },
    { path: 'chat', component: Chat }
];
