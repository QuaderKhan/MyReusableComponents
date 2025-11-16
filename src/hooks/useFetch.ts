import { useEffect, useState } from 'react';

export function useFetch<T = unknown>(url?: string) {
    const [data, setData] = useState<T | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | undefined>(undefined);

    useEffect(() => {
        if (!url) return;
        let mounted = true;
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((json) => mounted && setData(json))
            .catch((err) => mounted && setError(err))
            .finally(() => mounted && setLoading(false));
        return () => {
            mounted = false;
        };
    }, [url]);

    return { data, loading, error };
}