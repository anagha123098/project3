import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './pages/contact/contact';
import { Location } from '@angular/common';
import { District } from './pages/district/district';
import { SinglePage } from './pages/single-page/single-page';

export const routes: Routes = [
{
    path:"",
    component:Home

},
{
    path:"district",
    component:District
},
{
    path:"contact",
    component:Contact
},
{
    path:'districts/:id',
    component:SinglePage
}

   
];