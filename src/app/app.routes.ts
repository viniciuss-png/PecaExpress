import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { PaginaProdutoComponent } from './pages/pagina-produto/pagina-produto.component';
import { PaginaCarrinhoComponent } from './pages/pagina-carrinho/pagina-carrinho.component';
import { DadosPessoaisComponent } from './pages/dados-pessoais/dados-pessoais.component';
import { PagamentosComponent } from './pages/pagamentos/pagamentos.component';

export const routes: Routes = [{
    path:"",component:PaginaPrincipalComponent
},
{path:"carrinho",component:PaginaCarrinhoComponent    
},
{path:"produto",component:PaginaProdutoComponent    
},
{path:"dados-pessoais",component:DadosPessoaisComponent
},
{path:"pagamentos",component:PagamentosComponent
}
];
