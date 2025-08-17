import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-page',
  imports: [],
  templateUrl: './single-page.html',
  styleUrl: './single-page.css'
})
export class SinglePage {
  districts=[
  {
    "id": 1,
    "title": "THIRUVANANTHAPURAM",
    "description": "Capital city of Kerala, known for beaches like Kovalam and heritage sites like Padmanabhaswamy Temple.",
    "image": "https://images.unsplash.com/photo-1725680968792-c8dce6d6cf18?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
  },
  {
    "id": 4,
    "title": "ALAPPUZHA",
    "description": "Often called the 'Venice of the East', known for backwaters and houseboats.",
    "image": "https://images.unsplash.com/photo-1661174607003-d9d36388c916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 5,
    "title": "KOTTAYAM",
    "description": "Known for lakes, rubber plantations, and literacy heritage.",
    "image": "https://images.unsplash.com/photo-1589394103700-94755abf1f93?q=80&w=743&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 6,
    "title": "IDUKKI",
    "description": "A high-range district famous for hill stations like Munnar and the Idukki dam.",
    "image": "https://images.unsplash.com/photo-1663597676642-6a3d7afdbff3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 7,
    "title": "ERNAKULAM",
    "description": "Home to Kochi city, a hub of culture, trade, and colonial history.",
    "image": "https://images.unsplash.com/photo-1694188578812-6646b75f8e2b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 8,
    "title": "THRISSUR",
    "description": "Cultural capital of Kerala, known for Thrissur Pooram and temples.",
    "image": "https://images.unsplash.com/photo-1689610118132-96bde7f87e6e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 9,
    "title": "PALAKKAD",
    "description": "Famous for Palakkad Fort, Silent Valley National Park, and paddy fields.",
    "image": "https://images.unsplash.com/photo-1576558850397-3e9c553dcc1e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 10,
    "title": "MALAPPURAM",
    "description": "Rich in history, Islamic culture, and hilly terrain.",
    "image": "https://images.unsplash.com/photo-1629803099414-ef4eebf1f9fc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 11,
    "title": "KOZHIKODE",
    "description": "Historic spice trade center and beach city once known as Calicut.",
    "image": "https://plus.unsplash.com/premium_photo-1697729683472-5e39cf4471ed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 12,
    "title": "WAYANAD",
    "description": "A scenic hill district known for wildlife, waterfalls, and tribal culture.",
    "image": "https://images.unsplash.com/photo-1607054931379-95e37fc6684b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 13,
    "title": "KANNUR",
    "description": "Known for Theyyam rituals, forts, and pristine beaches.",
    "image": "https://images.unsplash.com/photo-1660994114727-46bf892dac93?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 14,
    "title": "KASARAGOD",
    "description": "Northernmost district with Bekal Fort, rivers, and multilingual heritage.",
    "image": "https://northkeralatourpackages.com/wp-content/uploads/2017/10/bekal.jpg"
  }

];
district = {
    id: 0,
    title: '',
    description: '',
    image: ''
  };

  constructor(private route: ActivatedRoute) { }

  
   ngOnInit() {
    const id = Number(this.route.snapshot.params['id']);
    const found = this.districts.find(d => d.id === id);
    if(found){
      this.district = found;
    }
  }

}
