import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../services/productService'; 

export function useProductDetails(productId) {
    // 💡 Key Point: The queryKey MUST include the ID! 
    // This tells TanStack Query to cache 'products/1', 'products/2', etc., separately.
    return useQuery({
        queryKey: ['products', productId],
        queryFn: () => fetchProductById(productId),
        // Only run the query if productId is truthy (not null, undefined, or 0)
        enabled: !!productId, 
    });
}