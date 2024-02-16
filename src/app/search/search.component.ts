import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  @Output() searchedText = new EventEmitter<string>();
  searchForm = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
    this.searchForm.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      this.onValueChange(value);
    });
  }

  onValueChange(input: string | null) {
    this.searchedText.emit(input ?? '');
  }
}
