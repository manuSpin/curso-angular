import { Injectable } from '@angular/core';
import { Character } from '../interface/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  public addCharacter(event: Character): void {
    console.log('event', event);

    const newCharacter: Character = {...event, id: uuid()}

    this.characters.push(newCharacter);

    console.log('characters', this.characters);
  }


  public deleteCharacterById(id: string): void {
    console.log('event i:', id );

    const characterIndex = this.characters.findIndex((chara: Character) => chara.id === id);

    this.characters.splice(characterIndex, 1);
  }
}
