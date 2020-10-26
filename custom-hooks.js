import { useCallback } from 'react';

const useStringFunction = () => {

    // String trimmer
    const trimStr = useCallback((string, limit, start = 0, ellipsis = false) => {
        if (!string) return null;
        var n, length = string.length;

        if (!limit) {
            if (start) return string.substr(start, length)
            return string;
        }

        n = string.substr(start, limit)
        if (ellipsis && length > limit) n += '...'
        return n;
    }, [])

    return { trimStr }
}

export { useStringFunction }