import './styles/Header.css'

interface HeaderProps {
    totalIssues : number;
}

function Header({totalIssues} : HeaderProps) {
    return (
        <p>Issue Tracker V0.1. Total issues: {totalIssues}</p>
    );
}

export default Header