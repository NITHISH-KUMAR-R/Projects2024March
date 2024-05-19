
export const renderNOtes=( notes ) => {

    let newNote=notes.map( ( { id, note, title, isPinned, isArchived } ) => {
        return (
            `
            <div class ="min-boxcontainer shadow " style="--note-id: ${ id };"> 
            <div class ="titleNotes"> 
            <span class="titleHead">${ title }</span>
            <button data-type ="del" data-id=${ id }><i data-type ="del"  data-id=${ id } class="bi bi-trash"></i></button>
            </div> 
            <p class="note">${ note }</p>
            <div class="noteSection ">
          
            <button data-type ="pin" data-id=${ id }><i data-id=${ id } data-type ="pin" class="bi bi-pin"></i></button>
            <button data-type ="archive" data-id=${ id }><i data-type ="archive" data-id=${ id } class="bi bi-archive"></i></button></div>
        
            </div>`
        )


    } )

    return newNote.join( "" )


}

