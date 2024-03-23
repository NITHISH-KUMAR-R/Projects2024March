
export const renderNOtes=( notes ) => {

    let newNote=notes.map( ( { id, note, title, isPinned, isArchived } ) => {
        return (
            `<div class ="min-boxcontainer"> 
            <div class ="titleNotes"> 
            <span> ${ title }</span>
            <button><i class="bi bi-trash"></i></button>
            </div> 
            <p>${ note }</p>
            <div class="noteSection">
          
            <button><i class="bi bi-pin"></i></button>
            <button>\<i class="bi bi-archive"></i></button></div>
        
            </div>`
        )

    } )

    return newNote
}
