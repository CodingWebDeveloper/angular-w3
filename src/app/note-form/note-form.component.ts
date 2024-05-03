import { Component } from '@angular/core';
import { Note } from './note.interface';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteService } from '../note.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.scss'
})
export class NoteFormComponent {
  constructor(private noteService: NoteService) {}

  noteForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    content: new FormControl('', [Validators.required, Validators.minLength(7)])
  });

  get title() {
    return this.noteForm.get('title');
  }

  get content() {
    return this.noteForm.get('content');
  }

  submit() {
    const note : Note = {
      id: 0,
      title: this.noteForm.value.title ?? '',
      content: this.noteForm.value.content ?? ''
    };

    this.noteForm.reset();
    this.noteService.addNote(note);
  }
}
