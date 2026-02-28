import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitEnquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      phone,
      product,
      message,
    }: {
      name: string;
      phone: string;
      product: string;
      message: string;
    }) => {
      if (!actor) throw new Error('Backend not available');
      await actor.submitEnquiry(name, phone, product, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enquiries'] });
    },
  });
}
