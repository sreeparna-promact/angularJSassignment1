import { Component, OnInit } from '@angular/core';
import { Employee } from './model/employee.model';
 
@Component({
  selector: 'app-employee',
  templateUrl: './employee.html',
  

})

export class EmployeeComponent implements OnInit{
    exp: string[];
    qual: string[];
    lang: string[];

    
    
  
    ob= new Employee('','','',null,'','','','','','',[]);
  

    ngOnInit():void{
    this.lang=['C/C++','Java','C#','PHP','Python'] ;   
    this.qual=['--Select--','10+2','Graduate','PG'];
    this.exp=['--Select--','2 year','3 year','4 year'];
    
    
    }





    
       
    /*if ((isEnabled(this.obj.C))==true)
    {
        this.obj.language[this.i]=this.obj.C;
        this.i=this.i+1;
    }*/

   
    toSend(){
        console.log(this.obj);
    }

}
