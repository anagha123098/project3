import { Component } from '@angular/core';
import { Card } from '../card/card';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

   
  featuredDistricts = [
    {
      id: 1,
      title: "THIRUVANANTHAPURAM",
      description: "Capital city of Kerala, known for beaches like Kovalam and heritage sites like Padmanabhaswamy Temple.",
      image: "https://images.unsplash.com/photo-1725680968792-c8dce6d6cf18?q=80&w=736&auto=format&fit=crop"
    },
    {
    "id": 2,
    "title": "KOLLAM",
    "description": "Known for Ashtamudi Lake, houseboat cruises, and the historic port of Quilon.",
    "image": "https://images.unsplash.com/photo-1592806631110-80ccea06d559?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 3,
    "title": "PATHANAMTHITTA",
    "description": "Famous for Sabarimala pilgrimage and scenic forest landscapes.",
    "image": "https://images.unsplash.com/photo-1710438443998-17815902ee86?q=80&w=716&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  ];



}
