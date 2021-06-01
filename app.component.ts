import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  reportForm: FormGroup;
  isFormSubmitted: boolean;
  users = [];
  data: any[] = [];

  constructor(private http: HttpClient, private apiService: ApiService) { }

  ngOnInit(): void {
    this.initializeDate();
    this.onSubmit();
  }

  initializeDate() {
    this.reportForm = new FormGroup({
      app_id: new FormControl(' ', Validators.required),
      app_key: new FormControl('', Validators.required),
      force: new FormControl(''),
    });
  }

  onSubmit() {
    this.apiService.getData().subscribe(resp => {
      console.log(JSON.stringify(resp));
      this.data = [resp];

    })
  }
}
