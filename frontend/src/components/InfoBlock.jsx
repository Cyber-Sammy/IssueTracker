import './styles/InfoBlock.css'

function InfoBlock ( { currentDate, usersCount, userName, issuesForUser } ) {
    return (
        <>
            <div>
                <p>Current Date is: {currentDate}</p>
            </div>
            <div>
                <p>Total users: {usersCount}</p>
            </div>
            <div>
                <p>Your name: {userName}</p>
            </div>
            <div>
                <p>Your total tasks: {issuesForUser}</p>
            </div>
        </>
    )
}

export default InfoBlock
