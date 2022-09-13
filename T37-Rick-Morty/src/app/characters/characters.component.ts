import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:any = null;

  constructor(private http:HttpClient) { }

  ngOnInit(){
    this.http.get("https://rickandmortyapi.com/api/character/1,183,3,4,6,7,8,32")
    .subscribe(
      result=>{
        this.characters = result;
      },
      error =>{
        console.log('Estamos teniendo problemas al cargar los personajes');
      }
    );
  }

}
