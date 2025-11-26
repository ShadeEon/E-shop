import { useQuery } from '@tanstack/react-query';
import { fetchAllProducts } from '../services/productService'; 

export function useAllProducts() {
  return useQuery({
    // Use a new, unique query key for caching the full product list
    queryKey: ['products', 'all'], 
    queryFn: fetchAllProducts,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}