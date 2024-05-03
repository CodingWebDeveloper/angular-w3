import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteFormComponent } from './note-form/note-form.component';
import { Note } from './note-form/note.interface';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteService } from './note.service';
import { EditNoteFormComponent } from './edit-note-form/edit-note-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoteFormComponent, EditNoteFormComponent, NoteListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private noteService: NoteService) {}

  getSelected() {
    return this.noteService.getById(this.noteService.selected);
  }
}
