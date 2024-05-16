import { Character } from './../../interface/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0
  };

  public emitCharacter(): void {
    if (this.character.name.length !== 0) {
      this.onNewCharacter.emit(this.character);

      this.character = { id: uuid(),  name: '', power: 0 };
    }
  }

}
