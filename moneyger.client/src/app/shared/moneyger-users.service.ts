import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment.development';
import { MoneygerUsers } from './moneyger-users.model';

@Injectable({
  providedIn: 'root'
})

export class MoneygerUsersService {

  url: string = environment.apiBaseUrl + '/moneyger_users'
  list: MoneygerUsers[] = [];
  formData: MoneygerUsers = new MoneygerUsers()
  constructor(private http: HttpClient) {}
  
  /*async refreshlist() {
    await this.http.get(this.url)
      .subscribe({
        next: res => {
          this.list = res as MoneygerUsers[];
        },
        error: err => { console.log(err)}
      })
      return this.list.length + 1;
  }*/
    
  postMoneyger_users(){
    return this.http.post(this.url,this.formData);
  }

  /*loginMoneyger_users(account: string, password: string) {
    this.formData.workEmail = account;
    return this.http.post(this.url + '/Login',
    {
      workEmail: account, userPassword: password
    },
    {
      responseType: 'text',
    }
    );
  }*/

  loggedin_user(){
    return this.http.get<any>(this.url+"/" + this.formData.workEmail);    
  }

  toPascalCase(str: string): string {
    if (!str) return '';
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
}
