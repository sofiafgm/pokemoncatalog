import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div
      class="container-fluid py-5"
      style="background: linear-gradient(135deg, #CC0000 0%, #FF4444 100%);"
    >
      <div class="container">
        <div class="text-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            alt="Pikachu"
            class="img-fluid mb-4"
            style="max-height: 300px;"
          />
          <h1 class="display-4 text-white fw-bold mb-4">
            ¡Bienvenidos a PokeDex!
          </h1>
          <p class="lead text-white mb-5">
            Descubre un mundo lleno de criaturas extraordinarias. Aquí
            encontrarás información detallada sobre cada Pokémon: sus tipos,
            habilidades, evoluciones y mucho más. Explora por generaciones,
            tipos o regiones, y sumérgete en el universo Pokémon para
            convertirte en un verdadero Maestro Pokémon.
          </p>
          <p class="lead text-white mb-5">
            Busca tus favoritos: Encuentra fácilmente cualquier Pokémon por su
            nombre o número en la Pokédex. Explora por categorías: Descubre
            Pokémon según sus tipos, estadísticas o rarezas. Aprende más: Conoce
            curiosidades, estrategias de batalla y datos únicos de cada
            criatura.
          </p>

          <div class="row justify-content-center mb-5">
        <div class="col-lg-8">
          <div class="card shadow-lg">
            <div class="card-header bg-warning text-dark">
              <h3 class="mb-0">Nombre: Pikachu</h3>
            </div>
            <div class="card-body">
              <div class="row">

                <div class="col-md-6">
                  <img 
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                    class="img-fluid p-3" 
                    alt="Pikachu"
                  >
                </div>

                <div class="col-md-6 text-start">
                  <h4 class="mb-3">Detalles</h4>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <strong>Número:</strong> #25
                    </li>
                    <li class="list-group-item">
                      <strong>Tipo:</strong> 
                      <span class="badge bg-danger me-1">Electric</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Altura:</strong> 0.4 m
                    </li>
                    <li class="list-group-item">
                      <strong>Peso:</strong> 0.6 m
                    </li>
                    <li class="list-group-item">
                      <strong>Habilidades:</strong> Static, Lightning Rod
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

          <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <a
              class="btn btn-warning btn-lg px-5 py-3 fw-bold text-dark"
              routerLink="/catalog"
              routerLinkActive="active"
            >
              Ver todos
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent {}
