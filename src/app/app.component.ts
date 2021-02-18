import { Component, VERSION } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  li:any; 
  lis=[]; 
  outputArray = [];  
  constructor(private http : HttpClient){ 
      
} 
  
  ngOnInit(): void { 
    this.http.get('https://reqres.in/api/users?page=2') 
    .subscribe(Response => { 
  
      // If response comes hideloader() function is called 
      // to hide that loader  
    
      console.log(Response) 
      this.li=Response; 
       this.lis=this.li.data; 
            console.log(this.lis);


// for (let element in  this.li) {  
//     this.outputArray.push({  
//         id: element,  
//         name:  this.li[element]  
//     });  
// }  
// console.log(this.outputArray)  
    }); 

  }}
