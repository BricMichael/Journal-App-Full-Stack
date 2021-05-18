

const JournalEntry = () => {
    return (
        <div className="journal__entry container">
            <div 
            className="journal__entry_picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://m.media-amazon.com/images/I/81gQraBrBZL._SS500_.jpg)'
            }}
            ></div> {/* End row div */}
            
            <div className="journal__entry-body">
                <p className="journal__entry_parrafo">Birthday</p>
                <p className="journal__entry_content">Sofia's Birthday</p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>22</h4>
            </div>
          
        </div>
    )
}

export default JournalEntry;
