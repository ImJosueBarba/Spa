import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  constructor(
    private HeroesService:HeroesService, 
    private router:Router,
    private route: ActivatedRoute){
  
  }
  heroes:Heroe[] = [];
  terminoBusqueda:string = "";


ngOnInit(): void {
this.route.queryParams.subscribe(params => {
  this.terminoBusqueda = params['terminoBusqueda'] || '';
  this.actualizarListaVehiculos();
});
}

private actualizarListaVehiculos() {
  if (this.terminoBusqueda === "") {
    this.heroes = this.HeroesService.getHeroe2();
  } else {
    this.heroes = this.HeroesService.buscarHeroes(this.terminoBusqueda);
  }
}

verHeroe(index:number){
  console.log(index);
this.router.navigate(['/heroe',index]);
}
}
