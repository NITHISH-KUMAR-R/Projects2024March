import { renderNOtes } from "./app.js";

let title=document.querySelector( ".title" );
let note=document.querySelector( ".note" );
let addButton=document.querySelector( ".add-btn" )
let noteDisplay=document.querySelector( '.notes-display' );
let showPinnedNotes=document.querySelector( '.pinned-notes-container' )
let showOtherNotes=document.querySelector( ".notes-container" )
let arrayOfNotes=[{ title: "todo", note: "nithish", id: "121", isPinned: false, isArchived: false }]


addButton.addEventListener( "click", () => {
    console.log( title.value )
    console.log( note.value )
    if ( note.value.trim().length>0||title.value.trim().length>0 ) {
        arrayOfNotes=[...arrayOfNotes, {
            id: Date.now(), title: title.value.trim(), note: note.value.trim(),
            isPinned: false, isArchived: false
        }]
    }
    console.log( arrayOfNotes )
    showOtherNotes.innerHTML=renderNOtes( arrayOfNotes )

} )