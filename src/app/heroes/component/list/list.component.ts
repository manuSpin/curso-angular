import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesNames: string[] = ['Doctor Strange', 'Scarlet Witch', 'Captain America', 'Spiderman', 'Shang-Chi', 'She-Hulk', 'Mighty Thor'];
  public deletedHeroName?: string;

  public removeLastHero(): void {
    this.deletedHeroName = this.heroesNames.pop();
  }

}
