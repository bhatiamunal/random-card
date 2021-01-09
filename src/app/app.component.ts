import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-card';
  user:any;
  private url="https://randomuser.me/api"
  public constructor(private http:HttpClient){
    this.getuser().subscribe(
      (user:any)=>{
        console.log(user)
        this.user =  user.results[0]  
      },
      (err)=>{
        alert(err)
      }
    )
  }
  public getuser(){
    console.log("hello")
    return this.http.get(this.url)
  }
}
