import './styles/Header.css'

interface HeaderProps {
    totalIssues : number;
}

function Header({totalIssues} : HeaderProps) {
    return (
        <>Issue Tracker V0.1. Total issues: {totalIssues}</>
    );
}

export default Header