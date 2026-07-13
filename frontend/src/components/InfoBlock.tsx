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
                <text>Current Date is: {currentDate}</text>
            </div>
            <div>
                <text>Total users: {usersCount}</text>
            </div>
            <div>
                <text>Your name: {userName}</text>
            </div>
            <div>
                <text>Your total tasks: {issuesForUser}</text>
            </div>
        </>
    )
}

export default InfoBlock