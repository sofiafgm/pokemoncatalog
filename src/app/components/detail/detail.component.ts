import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  pokemon: any;
  id: number = 0;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.pokemonService.getData(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(data => {
        this.pokemon = data;
        },
        (error: any) => {
          console.error('Error fetching data', error);
        }
      );
    });
  }

}
