import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'stephen Strange';
  public age: number = 40;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero(): void {
    this.name = 'Spiderman';
  }

  public changeAge(): void {
    this.age = 20;
  }

}
