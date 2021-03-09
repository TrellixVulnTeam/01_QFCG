import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from 'react'

import '../styles/repositories.scss';

interface Repository{
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setrepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setrepositories(data))
    }, []);


    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })} 
            </ul>
        </section>
    );
}