import { useNavigate } from 'react-router-dom';
function RepoList({ repos, setSelected, selected }) {

    const navigate = useNavigate();
    return (
        <ul>
            {repos.map((repo) => {
                const isSelected = selected === repo.id

                return (

                    <li key={repo.id}
                        onClick={() => setSelected(repo.id)}
                        onDoubleClick={()=> navigate('/repo/${repo.id}')}
                        style={{
                            cursor: "pointer",
                            backgroundColor: isSelected ? "#dbeafe" : "transparent",
                            fontWeight: isSelected ? "bold" : "normal",
                            padding: "6px",

                        }}>{repo.title}</li>
                );
            })}
        </ul>
    );
}

export default RepoList;