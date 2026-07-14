import './styles/InfoBlock.css'

interface InfoBlockProps {
    currentDate : string;
    usersCount : number;
    userName : string;
    issuesForUser : number;
}

function InfoBlock ( { currentDate, usersCount, userName, issuesForUser } : InfoBlockProps ) {
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