import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    // const [text, setText] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [repo, setRepo] = useState([]);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(null);

    const navigate = useNavigate();



    useEffect(() => {
        const getText = async () => {
            try {
                const data = await fetch("https://jsonplaceholder.typicode.com/posts");
                const parseData = await data.json();
                setRepo(parseData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getText();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error occured</h1>;
    }

    const filteredRepos = repo.filter((r) =>
        r.title.toLowerCase().includes(search.trim().toLowerCase()),
    );



    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {search.trim() === "" && (
                <p>Start typing to search</p>
            )}

            {search.trim() !== "" && filteredRepos.length === 0 && (
                <p>No repositories found</p>
            )}

            {search.trim() !== "" &&
                filteredRepos.map((repo) => {
                    const isSelected = selected === repo.id;

                    return (
                        <li key={repo.id} onClick={() => setSelected(repo.id)}
                            style={{
                                cursor: "pointer",
                                backgroundColor: isSelected ? "#dbeafe" : "transparent",
                                fontWeight: isSelected ? "bold" : "normal",
                                padding: "6px",
                            }}>
                            {repo.title}
                        </li>
                    );
                })}

        </div>
    );
}

export default Dashboard;










