import { Component } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note-form/note.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent {
  selected: number | null = null;
  constructor(private noteService: NoteService) {}
  getNotes() : Note[] {
    return this.noteService.getAllNotes();
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id);
  }

  editNote (id: number) {
    this.noteService.setSelected(id);
  }

  setSelected(id: number) {
    this.selected = id;
  }
}
