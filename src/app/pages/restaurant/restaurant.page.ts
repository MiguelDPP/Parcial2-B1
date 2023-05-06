import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  constructor() { }



  onSubmit() {
  }


  ngOnInit() {
  }

  current: any = [];

  desayunos = [
    {
      id: '1',
      name: 'Tostadas francesas con frutas frescas y miel',
      price: '$ 3.000',
      img: '/assets/img/desayunos/1.jfif',
      active: false,
      type: '1',
    },
    {
      id: '2',
    name: 'Yogur griego con granola y frutas mixtas',
    price: '$ 4.000',
    img: '/assets/img/desayunos/2.jpg',
    active: false,
    type: '1',
    },
    {
      id: '3',
    name: 'Huevos revueltos con espinacas y queso cheddar rallado',
    price: '$ 8.000',
    img: '/assets/img/desayunos/3.jpg',
    active: false,
    type: '1',
    },
    {
      id: '4',
    name: 'Omelet de jamón y queso con tostadas de pan integral',
    price: '$ 8.000',
    img: '/assets/img/desayunos/4.jpg',
    active: false,
    type: '1',
    },
    {
    id: '5',
  name: 'Empanadas rellenas de carne y acompañadas de suero costeño',
  price: '$ 2.000',
  img: '/assets/img/desayunos/5.jpg',
  active: false,
  type: '1',
},
  ];

  almuerzos = [
    {
      id: '6',
      name: 'Ensalada César con pollo a la parrilla',
      price: '$ 5.000',
      img: '/assets/img/almuerzos/1-1.jpg',
      active: false,
      type: '2',
    },
    {
      id: '7',
      name: 'Bandeja paisa',
      price: '$ 9.000',
      img: '/assets/img/almuerzos/1-2.gif',
      active: false,
      type: '2',
    },
    {
      id: '8',
      name: 'Pollo sudado',
      price: '$ 8.000',
      img: '/assets/img/almuerzos/1-3.jpg',
      active: false,
      type: '2',
    },
    {
      id: '9',
      name: 'Sopa de mondongo',
      price: '$ 4.000',
      img: '/assets/img/almuerzos/1-4.jpg',
      active: false,
      type: '2',
    },
  ];

  cenas = [
    {
      id: '10',
      name: 'Arepa de huevo',
      price: '$ 2.000',
      img: '/assets/img/cenas/2-1.jpg',
      active: false,
      type: '3',
    },
    {
      id: '11',
      name: 'Tamal',
      price: '$ 2.500',
      img: '/assets/img/cenas/2-2.jpeg',
      active: false,
      type: '3',
    },
    {
      id: '12',
      name: 'Carimañolas',
      price: '$ 2.000',
      img: '/assets/img/cenas/2-3.jpg',
      active: false,
      type: '3',
    },
    {
      id: '13',
      name: 'Chorizo con arepa',
      price: '$ 2.500',
      img: '/assets/img/cenas/2-4.jpg',
      active: false,
      type: '3',
    },
  ];

  clearFood() {
    this.desayunos.forEach((item) => {
      item.active = false;
    }
    );
    this.almuerzos.forEach((item) => {
      item.active = false;
    }
    );
    this.cenas.forEach((item) => {
      item.active = false;
    }
    );
  }

  selected: string = '';
  document: string = '';
  name: string = '';
  role: string = '';

  isModalOpen = false;
  error: string = '';
  carrera: string = '';

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  myDate: String = new Date().toISOString();

  handleChangeFood(event:any) {
    this.selected = event.detail.value;
  }

  handleChangeDocument(event:any) {
    this.document = event.detail.value;
  }

  handleChangeName(event:any) {
    this.name = event.detail.value;
  }

  handleChangeRole(event:any) {
    this.role = event.detail.value;
  }

  handleChangeDate(event:any) {
    this.myDate = event.detail.value;
  }

  handleChangeCarrera(event:any) {
    this.carrera = event.detail.value;
  }

  resetForm() {
    this.selected = '';
    this.document = '';
    this.name = '';
    this.role = '';
    // this.myDate = '';
  }


  handleClickPay() {
    if (this.selected === '' || this.document === '' || this.name === '' || this.role === '' || this.myDate === '') {
      this.error = 'Todos los campos son obligatorios';
      return;
    } else if (this.current.length === 0) {
      this.error = 'Debe seleccionar una comida';
      return;
    }else {
      this.error = '';
      this.resetForm();
      this.isModalOpen = true;
    }
  }


  handleClick(item:any) {
    this.clearFood();

    switch (item.type) {
      case '1':
        this.desayunos.forEach((item2) => {
          if (item2.id === item.id) {
            item2.active = true;
            this.current = item2;
          }
        }
        );
        break;
        case '2':
          this.almuerzos.forEach((item2) => {
            if (item2.id === item.id) {
              item2.active = true;
              this.current = item2;
            }
          }
          );
        break;
        case '3':
          this.cenas.forEach((item2) => {
            if (item2.id === item.id) {
              item2.active = true;
              this.current = item2;
            }
          }
          );
          break;
    }
  }

}
