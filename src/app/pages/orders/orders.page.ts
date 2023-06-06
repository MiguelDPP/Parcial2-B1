import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id: string = '';
  orders: any = [];
  isLoading: boolean = false;

  API_URL = 'http://localhost:8000/api/';

  ngOnInit() {
    // Para obtener el id de la orden
    // let data = history.state;
    // if (data?.id) {
    //   this.id = data.id;
    //   console.log(this.id);
    // }
    // console.log(history.state);
    this.getId();
  }

  private getId() {
    let data = history.state;
    console.log(data);
    if (data?.document) {
      this.id = data.document;
      console.log(this.id);

      this.handleClick();
    }
  }

  // Cuando se hace focus en la screen
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.getId();
  }

  handleChangeId(event: any) {
    this.id = event.target.value;
  }

  async handleClick() {
    try {
      this.isLoading = true;
      let response = await fetch(this.API_URL + 'getOrdersByClient', {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          identification: this.id
        })
      });
      let data = await response.json();
      this.orders = data.orders;
    } catch (error) {
      this.orders = [];
    }

    this.isLoading = false;
  }

}
