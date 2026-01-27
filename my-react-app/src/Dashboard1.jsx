import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard1 = () => {
    // data
    const [repos, setRepos] = useState([]);
    // UI states
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    const navigate = useNavigate();

    // fetch repos
    useEffect(() => {
        async function fetchRepos() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts",
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch repositories");
                }

                const data = await response.json();
                setRepos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchRepos();
    }, []);

    // debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 300);

        return () => clearTimeout(timer);
    }, [search]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    const filteredRepos = repos.filter((repo) =>
        repo.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );

    return (
        <div>
            <h1>My Dashboard</h1>

            <input
                type="text"
                placeholder="Search repos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredRepos.map((repo) => (
                    <li
                        key={repo.id}
                        onClick={() => navigate(`/repo/${repo.id}`)}
                        style={{ cursor: "pointer" }}
                    >
                        {repo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Dashboard1;
