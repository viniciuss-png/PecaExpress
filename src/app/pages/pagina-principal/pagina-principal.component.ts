import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {
constructor(private router:Router){} 
carrinho(){
  this.router.navigate([''])
}
}
