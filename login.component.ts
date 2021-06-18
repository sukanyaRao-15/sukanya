import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  submitted: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.submitted = true;
  }
  onSubmit() {
    this.router.navigate(['/orders']);
    console.log(this.model);

  }
}
