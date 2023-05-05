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

  selected: string = '';
  document: string = '';
  name: string = '';
  role: string = '';

  isModalOpen = false;
  error: string = '';

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
          }

          this.current = item2;
        }
        );
        break;
    }
  }

}
