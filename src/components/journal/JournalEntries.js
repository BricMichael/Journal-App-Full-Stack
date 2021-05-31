import { useSelector } from "react-redux";
import JournalEntry from "./JournalEntry";


const JournalEntries = () => {

    const { notes } = useSelector( (store) => store.notes )

    return (
        <div className="journal__entries">
            {
                notes.map( note => (
                    <JournalEntry  
                        key={note.id} 
                        {...note}
                    />       
                ))
            }
        </div>
    )
}

export default JournalEntries;
