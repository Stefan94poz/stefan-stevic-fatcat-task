import { useState, useEffect } from 'react';

export const UsersList = () => {
    const [data, setData] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const tableStyles = {
        padding: '10px',
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                );
                const data = await response.json();
                setData(data);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error && error?.message}</div>;
    }

    return (
        <div style={{ background: '#f9f6f3' }}>
            {data && (
                <table
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        background: '#fff',
                        borderRadius: '5px',
                        borderCollapse: 'collapse',
                        borderSpacing: '0 50px 0 50px',
                    }}
                >
                    <thead>
                        <tr>
                            <th style={tableStyles}>ID</th>
                            <th style={tableStyles}>Name</th>
                            <th style={tableStyles}>Email</th>
                            <th style={tableStyles}>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item: any) => (
                            <tr key={item.id}>
                                <td style={tableStyles}>{item.id}</td>
                                <td style={tableStyles}>{item.name}</td>
                                <td style={tableStyles}>{item.email}</td>
                                <td style={tableStyles}>{item.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
