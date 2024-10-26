import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MovieDatatableComponent } from './components/movie-datatable/movie-datatable.component';
import { ComponentOutputComponent } from './components/component-output/component-output.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

export const routes: Routes = [
    {path:'app-movie-datatable', component: MovieDatatableComponent},
    {path: 'app-component-output', component: ComponentOutputComponent},
    {path: 'app-reactive-forms', component: ReactiveFormsComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo: '/welcome', pathMatch: 'full' }

];
