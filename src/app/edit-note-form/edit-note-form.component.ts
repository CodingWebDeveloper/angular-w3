import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NoteService } from '../note.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Note } from '../note-form/note.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-note-form.component.html',
  styleUrl: './edit-note-form.component.scss'
})
export class EditNoteFormComponent implements OnChanges {
  @Input() note? : Note;

  constructor(private noteService: NoteService) {}
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const change = changes[propName];
      this.loadForm(change.currentValue);
    }
  }

  noteForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    content: new FormControl('', [Validators.required, Validators.minLength(7)])
  });

  get title() {
    return this.noteForm.get('title');
  }

  get content() {
    return this.noteForm.get('content');
  }

  loadForm(note: Note) {
    if(!note) return;
    this.noteForm.setValue({
      id: note.id,
      title: note.title,
      content: note.content
    });
  }

  submit() {
    const note : Note = {
      id: this.noteForm.value.id ?? 0,
      title: this.noteForm.value.title ?? '',
      content: this.noteForm.value.content ?? ''
    };

    this.noteService.setSelected(null);
    this.noteService.editNote(note);
  }
}
