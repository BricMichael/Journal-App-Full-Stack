import JournalEntries from "./JournalEntries";

const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar_navbar">
                <h3><i className="far fa-moon mt-5"></i> <span>MichaelBric</span></h3>

                <button className="btn">Logout</button>
            </div>

            <div className="journal__new_entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-1">New entry</p>     
            </div>

            <JournalEntries />
        </aside>
    )
}

export default Sidebar;
