import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  current: any = {};

  desayunos = [
    {
      id: '1',
      name: 'Tostadas francesas con frutas frescas y miel',
      price: '$ 3.0000',
      img: '/assets/img/desayunos/1.jfif',
      active: false,
      type: '1',
    },
  ];

  almuerzos = [
    {
      id: '1',
      name: 'Tostadas francesas con frutas frescas y miel',
      price: '$ 3.0000',
      img: '/assets/img/desayunos/1.jfif',
      active: false,
      type: '2',
    },
  ];

  cenas = [
    {
      id: '1',
      name: 'Tostadas francesas con frutas frescas y miel',
      price: '$ 3.0000',
      img: '/assets/img/desayunos/1.jfif',
      active: false,
      type: '3',
    },
  ];

  clearFood() {
    this.desayunos.forEach((item) => {
      item.active = false;
    }
    );
  }

  selected: string = '0';

  myDate: String = new Date().toISOString();

  handleChangeFood(event:any) {
    this.selected = event.detail.value;
  }

  handleClick(item:any) {
    this.clearFood();

    switch (item.type) {
      case '1':
        this.desayunos.forEach((item2) => {
          if (item2.id === item.id) {
            item2.active = true;
          }

          this.current = item2;
        }
        );
        break;
    }
  }

}
