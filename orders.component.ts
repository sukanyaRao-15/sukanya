import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface RiskCategory {
  id: number;
  date: string;
  name: string;
  address: string;
  phone: number;
  total: number;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  index: any;
  amount: number;
  t = 0;
  eWayForm: FormGroup;
  updatedForm: FormGroup;
  orderForm: FormGroup;
  total: number;
  quantity: any;
  items: any = [];
  products = [
    { id: "123", date: "11/01/2021", name: "Rao", address: "ABCD", phone: 9090909090, total: 35000 },
    { id: "123", date: "11/01/2021", name: "Rao", address: "ABCD", phone: 9090909090, total: 35000 },
    { id: "123", date: "11/01/2021", name: "Rao", address: "ABCD", phone: 9090909090, total: 35000 },
    { id: "123", date: "11/01/2021", name: "Rao", address: "ABCD", phone: 9090909090, total: 35000 },
    { id: "123", date: "11/01/2021", name: "Rao", address: "ABCD", phone: 9090909090, total: 35000 },
    { id: "123", date: "11/01/2021", name: "Rao", address: "ABCD", phone: 9090909090, total: 35000 },
    { id: "123", date: "11/01/2021", name: "Rao", address: "ABCD", phone: 9090909090, total: 35000 },

  ];
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.initializeCancel();
    this.initializeEdit();
    this.products;
  }

  initializeEdit() {
    this.orderForm = this.formBuilder.group({
      id: ['', Validators.required],
      date: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      total: ['', Validators.required],
    });
  }
  initializeCancel() {
    this.eWayForm = this.formBuilder.group({
      id: ['', Validators.required],
      date: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],

    });
  }
  openEdit(product: any) {
    console.log("123", product);
    this.orderForm.setValue({
      id: product.id,
      date: product.date,
      name: product.name,
      address: product.address,
      phone: product.phone,
      total: product.total
    })
  }
  onSubmitNew() {
    console.log("Details", this.eWayForm.value);
  }
  onSubmitEdit() {
    console.log("Edited Details", this.orderForm.value);
  }

  deleteItem(i) {
    console.log(i);
    this.products = this.products.filter((element, index) => index !== i);
  }



}
