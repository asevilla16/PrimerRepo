import { MessageService } from './../message.service';
import { HeroService } from '../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }


  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
