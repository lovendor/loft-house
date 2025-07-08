import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserInfoComponent } from '../user-info/user-info.component';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, UserInfoComponent, CommonModule],
  styleUrls: ['./login-form.component.scss'],
  template: `
    <form [formGroup]="form">
      <input formControlName="login" placeholder="Login" />
      <input type="password" formControlName="password" placeholder="Password" />
      <!-- <input formControlName="Objectforme" placeholder="Objectforme" /> -->
      <div class="form-buttons">
        <!-- <button type="button" (click)="showValues()">Показать данные</button> -->
        <button class="clear" style="width: 200px;" type="button" (click)="ClearForm()">Убрать</button>
        <!-- <button type="button" (click)="toggleLogin()">Заблокировать логин</button> -->
        <button class="inactive" type="button" (click)="disable()">Заблокировать логин и пароль</button>
        <button class="showData" type="button" (click)="checkUsers()">Показать данные</button>


      </div>
    </form>

    <app-user-info *ngIf="isFound" [username]="username"></app-user-info>
  `
})
export class LoginFormComponent implements OnInit {
  @Output() warning = new EventEmitter<string>();


  form = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
    // Objectforme: new FormControl(''),
    // disable: new FormControl('')
  });

  users = [
    { username: 'admin', login: 'admin', password: 'admin' },
    { username: 'Paul', login: 'Fisher', password: 'fisher' },

  ]
  username: string = '';
  isFound: boolean = false;


  checkUsers() {
    const login = this.form.get('login')?.value;
    const password = this.form.get('password')?.value;

    const user = this.users.find(
      user => user.login === login && user.password === password
    );

    if (user) {
      this.username = user.username;
      this.isFound = true;

      if (user.username !== 'admin') {
        this.warning.emit('Это не админ');
        // this.warningText = 'not admin';
      } else {
        this.warning.emit('');
      }
    } else {
      this.username = '';
      this.isFound = false;
      this.warning.emit('поьзователь не найден');
      alert('Пользователь не найден');
      // this.warningText = 'Пользователь не найден';
    }
  // ngOnInit() {}
  }


  // username = '';
  // isAdmin = false;

  // showValues() {
  //   console.log(this.form.value);

  //   const login = this.form.get('login')?.value;
  //   const password = this.form.get('password')?.value;

  //   if (login ==='admin' && password === 'admin'){
  //     this.username='admin';
  //     this.isAdmin = true;
  //   } else {
  //     this.username = '';
  //     this.isAdmin = false;
  //   }

  //   // if (login ==='Paul' && password === 'Fisher'){
  //   //   this.username='Fisher';
  //   //   this.isAdmin = true;
  //   // } else {
  //   //   this.username = '';
  //   //   this.isAdmin = false;
  //   // }
  // }





  ngOnInit() {
    const passwordControl = this.form.get('password');
    if (passwordControl) {
      passwordControl.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged()
    ).subscribe((newValue) => {
        console.log('Новое значение пароля:', newValue);
      });
    }
  
    const loginControl = this.form.get('login');
    if (loginControl) {
      loginControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
    ).subscribe((newValue) => {
        console.log('Значение логина:', newValue);
      });
    }
  }
  // showValues() {
  //   console.log(this.form.value);
  // }


  ClearForm() {
    this.form.reset()
  }

  disable() {
    const logControl = this.form.get('login');
    const passControl = this.form.get('password');
    if (logControl) {
      if(logControl.disabled) {
        logControl.enable();
      }
      else {
        logControl.disable();
      }
      }

      if (passControl) {
        if(passControl.disabled) {
          passControl.enable();
        }
        else {
          passControl.disable();
        }
        }
    }}
  

function subscribe(arg0: (newValue: any) => void) {
  throw new Error('Function not implemented.');
}

