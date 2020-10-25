import { useCallback } from 'react';

const useStringFunction = () => {

    const trimStr = useCallback((string, limit, start = 0) => {
        if (!string) return null;

        if (!limit) {
            if (start) return string.substr(start, string.length)
            return string;
        }
        
        return string.substr(start, limit)
    }, [])

    return { trimStr }
}

export { useStringFunction }