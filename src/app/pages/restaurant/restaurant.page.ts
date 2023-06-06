import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  constructor(private router: Router) { }

  API_URL = 'http://localhost:8000/api/';


  onSubmit() {
  }

  handleClickView() {
    // Navegar a la vista de la orden
    this.setOpen(false);
    setTimeout(() => {
      this.router.navigate(['/restaurant-tab/orders'], { state: {...this.order, document: this.idToSend} });
    }, 100);

  }


  async getFood() {
    const data = await fetch(this.API_URL + 'foods');
    const response = await data.json();
    this.desayunos = response.filter((item:any) => item.type === 'desayuno').map((item:any) => {
      item.active = false;
      item.img = '/assets/img/desayunos/1.jfif';
      return item;
    });
    this.almuerzos = response.filter((item:any) => item.type === 'almuerzo').map((item:any) => {
      item.active = false;
      return item;
    });
    this.cenas = response.filter((item:any) => item.type === 'cena').map((item:any) => {
      item.active = false;
      return item;
    });

    console.log(this.almuerzos);
  }


  ngOnInit() {
    this.getFood();
  }

  current: any = [];

  clientFound: boolean = false;

  isPayLoading: boolean = false;

//   desayunos = [
//     {
//       id: '1',
//       name: 'Tostadas francesas con frutas frescas y miel',
//       price: '$ 3.000',
//       img: '/assets/img/desayunos/1.jfif',
//       active: false,
//       type: '1',
//     },
//     {
//       id: '2',
//     name: 'Yogur griego con granola y frutas mixtas',
//     price: '$ 4.000',
//     img: '/assets/img/desayunos/2.jpg',
//     active: false,
//     type: '1',
//     },
//     {
//       id: '3',
//     name: 'Huevos revueltos con espinacas y queso cheddar rallado',
//     price: '$ 8.000',
//     img: '/assets/img/desayunos/3.jpg',
//     active: false,
//     type: '1',
//     },
//     {
//       id: '4',
//     name: 'Omelet de jamón y queso con tostadas de pan integral',
//     price: '$ 8.000',
//     img: '/assets/img/desayunos/4.jpg',
//     active: false,
//     type: '1',
//     },
//     {
//     id: '5',
//   name: 'Empanadas rellenas de carne y acompañadas de suero costeño',
//   price: '$ 2.000',
//   img: '/assets/img/desayunos/5.jpg',
//   active: false,
//   type: '1',
// },
//   ];

//   almuerzos = [
//     {
//       id: '6',
//       name: 'Ensalada César con pollo a la parrilla',
//       price: '$ 5.000',
//       img: '/assets/img/almuerzos/1-1.jpg',
//       active: false,
//       type: '2',
//     },
//     {
//       id: '7',
//       name: 'Bandeja paisa',
//       price: '$ 9.000',
//       img: '/assets/img/almuerzos/1-2.gif',
//       active: false,
//       type: '2',
//     },
//     {
//       id: '8',
//       name: 'Pollo sudado',
//       price: '$ 8.000',
//       img: '/assets/img/almuerzos/1-3.jpg',
//       active: false,
//       type: '2',
//     },
//     {
//       id: '9',
//       name: 'Sopa de mondongo',
//       price: '$ 4.000',
//       img: '/assets/img/almuerzos/1-4.jpg',
//       active: false,
//       type: '2',
//     },
//   ];

//   cenas = [
//     {
//       id: '10',
//       name: 'Arepa de huevo',
//       price: '$ 2.000',
//       img: '/assets/img/cenas/2-1.jpg',
//       active: false,
//       type: '3',
//     },
//     {
//       id: '11',
//       name: 'Tamal',
//       price: '$ 2.500',
//       img: '/assets/img/cenas/2-2.jpeg',
//       active: false,
//       type: '3',
//     },
//     {
//       id: '12',
//       name: 'Carimañolas',
//       price: '$ 2.000',
//       img: '/assets/img/cenas/2-3.jpg',
//       active: false,
//       type: '3',
//     },
//     {
//       id: '13',
//       name: 'Chorizo con arepa',
//       price: '$ 2.500',
//       img: '/assets/img/cenas/2-4.jpg',
//       active: false,
//       type: '3',
//     },
//   ];

  desayunos: any = [];
  almuerzos: any = [];
  cenas: any = [];
  clearFood() {
    this.desayunos.forEach((item:any) => {
      item.active = false;
    }
    );
    this.almuerzos.forEach((item:any) => {
      item.active = false;
    }
    );
    this.cenas.forEach((item:any) => {
      item.active = false;
    }
    );
  }

  ionViewWillEnter() {
    this.clearFood();
    this.order = [];
  }

  selected: string = '';
  document: string = '';
  idToSend: string = '';
  name: string = '';
  role: string = '';

  isModalOpen = false;
  error: string = '';
  carrera: string = '';

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  myDate: String = new Date().toISOString().slice(0, 10);

  handleChangeFood(event:any) {
    this.selected = event.detail.value;
  }

  handleChangeDocument(event:any) {
    this.document = event.detail.value;
    
    fetch(this.API_URL + 'findClient/', {
      method: 'POST',
      body: JSON.stringify({
        identification: this.document
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async (response) => {
      console.log(response);
      const data =await response.json();
      console.log(data);
      this.name = data.student.name;
      this.role = (data.student.type === 'estudiante') ? '1' : (data.student.type === 'profesor') ? '2' : '3';
      this.clientFound = true;
    }).catch((error) => {
      console.log(error);
      this.clientFound = false;
      this.name = '';
      this.role = '';
    }
    );

  }

  handleChangeName(event:any) {
    this.name = event.detail.value;
  }

  handleChangeRole(event:any) {
    this.role = event.detail.value;
  }

  handleChangeDate(event:any) {
    this.myDate = event.detail.value;

    // let date = new Date(this.myDate.trim());
    // let day = date.getDate();
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear();

    // this.myDate = `${day}/${month}/${year}`;

    // console.log(day, month, year);
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

  checkRole() {
    if (this.role === '1') {
      return 'estudiante';
    } else if (this.role === '2') {
      return 'profesor';
    } else {
      return 'administrativo';
    }
  }

  order: any = [];

  async sendOrder(datas:object) {
    this.isPayLoading = true;
    const data = await fetch(this.API_URL + 'createOrder', {
      method: 'POST',
      body: JSON.stringify(datas),
      headers: {
        'Content-Type': 'application/json'
      }
    });


    const response = await data.json();
    this.isPayLoading = false;
    this.order = response.order;
  }


  handleClickPay() {
    console.log(this.myDate);
    if (this.selected === '' || this.document === '' || this.name === '' || this.role === '' || this.myDate === '') {
      this.error = 'Todos los campos son obligatorios';
      return;
    } else if (this.current.length === 0) {
      this.error = 'Debe seleccionar una comida';
      return;
    }else {
      const data = {
        client_id: this.document,
        food: this.current.id,
        date: this.myDate,
        type: this.checkRole(),
        price: this.current.price,
        isPaid: false,
        name: this.name,
        amount: 1,
        is_paid: false,
      }

      this.isPayLoading = true;

      this.sendOrder(data);
      

      this.error = '';
      this.idToSend = this.document;
      this.resetForm();
      this.isModalOpen = true;
    }
  }


  handleClick(item:any) {
    this.clearFood();

    switch (item.type) {
      case 'desayuno':
        this.desayunos.forEach((item2:any) => {
          if (item2.id == item.id) {
            item2.active = true;
            this.current = item2;
          }
        }
        );
        break;
        case 'almuerzo':
          this.almuerzos.forEach((item2:any) => {
            if (item2.id == item.id) {
              item2.active = true;
              this.current = item2;
            }
          }
          );
        break;
        case 'cena':
          this.cenas.forEach((item2:any) => {
            if (item2.id == item.id) {
              item2.active = true;
              this.current = item2;
            }
          }
          );
          break;
    }
  }



}
