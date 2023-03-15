import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeLength(event: any) {
    const parsedValue = parseInt(event.value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    console.log(this.includeLetters);
    console.log(this.includeNumbers);
    console.log(this.includeSymbols);
    console.log(this.length);
    this.password = 'Password changed';
  }
}
