import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';

const routes: Routes = [
    {
        path: ':lang',
        component: CvComponent
    },
    {
        path: '',
        component: CvComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
