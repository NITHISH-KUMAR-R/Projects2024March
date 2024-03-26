import { renderNOtes } from "./app.js";

let title=document.querySelector( ".title" );
let note=document.querySelector( ".note" );
let addButton=document.querySelector( ".add-btn" )
let noteDisplay=document.querySelector( '.notes-display' );
let showPinnedNotes=document.querySelector( '.pinned-notes-container' )
let showOtherNotes=document.querySelector( ".notes-container" )
let arrayOfNotes=JSON.parse( localStorage.getItem( "notes" ) )||[]



noteDisplay.addEventListener( "click", ( event ) => {
    let key=event.target.dataset.id;
    let type=event.target.dataset.type;
    switch ( type ) {
        case "del":
            // let con=arrayOfNotes.id;
            // console.log( con )
            arrayOfNotes=arrayOfNotes.filter( ( { id } ) => id.toString()!==key );
            showOtherNotes.innerHTML=renderNOtes( arrayOfNotes.filter( ( { isPinned } ) => !isPinned ) )
            localStorage.setItem( "notes", JSON.stringify( arrayOfNotes ) )
            break;

        case "pin":
            arrayOfNotes=arrayOfNotes.map( ( obj ) => obj.id.toString()===key? { ...obj, isPinned: !obj.isPinned }:obj )
            showOtherNotes.innerHTML=renderNOtes( arrayOfNotes.filter( ( { isPinned } ) => !isPinned ) )
            showPinnedNotes.innerHTML=renderNOtes( arrayOfNotes.filter( ( { isPinned } ) => isPinned ) )
            localStorage.setItem( "notes", JSON.stringify( arrayOfNotes ) )
    }

    console.log( arrayOfNotes )
    console.table( key, type )

} )

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
    showOtherNotes.innerHTML=renderNOtes( arrayOfNotes ) //apending into the container
    localStorage.setItem( "notes", JSON.stringify( arrayOfNotes ) ) // first paramter notes is key for storing the value
    title.value=""
    note.value=""


} )

showOtherNotes.innerHTML=renderNOtes( arrayOfNotes ) //apending into the container
