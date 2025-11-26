import { useQuery } from '@tanstack/react-query';
import { fetchProductCategories } from '../services/productService';

export function useProductCategories() {
  // 'categories' is the unique query key for caching
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchProductCategories,
  });
}