import queryString from 'query-string';
import { useAllSearchParams } from './index';
import { useNavigate } from 'react-router';

const useSearchQuery = <T extends ParsedUrlQuery>(): [T, (query: Partial<T>) => void] => {
  const router = useNavigate();
  const queries = useAllSearchParams();

  const setQuery = (query: Partial<T>) =>
    router(`${window.location.pathname}?${queryString.stringify({ ...queries, ...query })}`, { replace: true });

  return [queries as T, setQuery];
};

export const addToQuery = (prevValue: string | string[] | undefined, newValue: string): string | string[] => {
  if (Array.isArray(prevValue)) {
    return [...prevValue, newValue];
  }
  if (prevValue) {
    return [prevValue, newValue];
  }
  return newValue;
};

export default useSearchQuery;
