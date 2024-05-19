import { renderNOtes } from "./app.js";

let title=document.querySelector( ".title" );
let note=document.querySelector( ".note" );
let addButton=document.querySelector( ".add-btn" );
let noteDisplay=document.querySelector( '.notes-display' );
let showPinnedNotes=document.querySelector( '.pinned-notes-container' );
let showOtherNotes=document.querySelector( ".notes-container" );
let pinTitle=document.querySelector( ".pin-title" );
let otherTitle=document.querySelector( ".other-title" );

let arrayOfNotes=JSON.parse( localStorage.getItem( "notes" ) )||[];



// Function to render notes based on pinned status
function renderNotesByPinnedStatus() {
    showOtherNotes.innerHTML=renderNOtes( arrayOfNotes.filter( ( { isPinned } ) => !isPinned ) );
    showPinnedNotes.innerHTML=renderNOtes( arrayOfNotes.filter( ( { isPinned } ) => isPinned ) );

    pinTitle.classList.toggle( "d-none", showPinnedNotes.children.length===0 );
    otherTitle.classList.toggle( "d-none", showOtherNotes.children.length===0 );
}

// Event listener for clicking on notes
noteDisplay.addEventListener( "click", ( event ) => {
    let key=event.target.dataset.id;
    let type=event.target.dataset.type;
    switch ( type ) {
        case "del":
            arrayOfNotes=arrayOfNotes.filter( ( { id } ) => id.toString()!==key );
            break;
        case "pin":
            arrayOfNotes=arrayOfNotes.map( ( obj ) => obj.id.toString()===key? { ...obj, isPinned: !obj.isPinned }:obj );
            break;
    }

    // Render notes based on pinned status after modification
    renderNotesByPinnedStatus();

    // Store updated notes in localStorage
    localStorage.setItem( "notes", JSON.stringify( arrayOfNotes ) );

    console.log( arrayOfNotes );
    console.table( key, type );
} );

// Event listener for adding a new note
addButton.addEventListener( "click", () => {
    if ( note.value.trim().length>0||title.value.trim().length>0 ) {
        arrayOfNotes=[...arrayOfNotes, {
            id: Date.now(),
            title: title.value.trim(),
            note: note.value.trim(),
            isPinned: false,
            isArchived: false
        }];
    }

    // Render notes based on pinned status after adding a new note
    renderNotesByPinnedStatus();

    // Store updated notes in localStorage
    localStorage.setItem( "notes", JSON.stringify( arrayOfNotes ) );

    title.value="";
    note.value="";
} );

// Initial rendering of notes based on pinned status after page load or refresh
renderNotesByPinnedStatus();
