import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorites[];
}

interface Favorites {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent implements OnInit {
  // @ViewChild('myFormDynamic') myForm!: NgForm;

  newGame: string = '';

  person: Person = {
    name: 'John',
    favorites: [
      { id: 1, name: 'Metal Gear' },
      { id: 2, name: 'Death Stranding' },
      { id: 3, name: 'Metal Gear Solid V' },
      { id: 4, name: 'Metal Gear Solid V: The Phantom Pain' },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  save() {
    console.log('saving...');
    // console.log(this.myForm);
  }

  removeGame(index: number): void {
    console.log('removing game...', index);
    this.person.favorites.splice(index, 1);
    // this.person.favorites = this.person.favorites.filter(
    //   (game) => game.id !== id
    // );
  }

  addGame() {
    if (!this.newGame) return;

    console.log('adding game...');

    const newGame: Favorites = {
      id: this.person.favorites.length + 1,
      name: this.newGame,
    };

    this.person.favorites.push({ ...newGame });
    this.newGame = '';
  }

  // validators

  // nameIsInValid(): boolean {
  //   return (
  //     this.myForm?.controls['name']?.invalid &&
  //     this.myForm?.controls['name']?.touched
  //   );
  // }
}
