import './styles/Header.css'

interface HeaderProps {
    totalIssues : number;
}

function Header({totalIssues} : HeaderProps) {
    return (
        <h1>Issue Tracker V0.1. Total issues: {totalIssues}</h1>
    );
}

export default Header
