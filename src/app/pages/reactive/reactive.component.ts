import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;


  constructor( private fb: FormBuilder) { 

    this.crearFomulario();

  }

  ngOnInit(): void {
  }

  crearFomulario(){

    this.forma= this.fb.group({
      nombre  : ['Dulce'],
      apellido: ['Soledad'],
      correo  : ['juarez.dulce@gmail.com']
    });


  }



  guardar(){
    console.log(this.forma);
  }

}
