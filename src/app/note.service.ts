import { Injectable } from '@angular/core';
import { Note } from './note-form/note.interface';

@Injectable({
  providedIn: 'root'
})

export class NoteService {
  private id : number = 1;
  public selected: number | null = null;
  private notes : Note[];
  constructor() { 
    this.notes = [];
  }

  
  addNote(note: Note) {
    this.notes.push({...note, id: this.id});
    this.id += 1;
    console.log('New note added:', note);
  }

  getById (id: number | null) : Note | undefined {
    return this.notes.find((n) => n.id === id);
  }

  getAllNotes(): Note[] {
    return this.notes;
  }

  editNote(note: Note) {
    let newNote =  this.notes.find((n) => n.id === note.id);
    if(!newNote) return;
 
    newNote.title = note.title;
    newNote.content = note.content;
   }

  deleteNote(id: number) {
    const newNotes = this.notes.filter((n) => n.id !== id);
    this.notes = newNotes;
    this.selected = null;
  }

  setSelected(id: number | null) {
    this.selected = id;
  }
}
