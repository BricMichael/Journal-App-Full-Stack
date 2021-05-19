import NotesAppBar from "./NotesAppBar"


const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">         
                <input type="text" placeholder="Some awesome title" className="notes__title_input" autoComplete="off"></input>
                <textarea placeholder="What happened today" className="notes__textarea"></textarea>
            </div>

            <div className="notes__image">
                <img src="https://ugc.kn3.net/i/760x/http://img8.uploadhouse.com/fileuploads/15294/15294438b5ab0dd6dda2d9c190f9d7de4fa165e9.jpg" alt="event image"></img>
            </div>
            
        </div>
    )
}

export default NoteScreen
