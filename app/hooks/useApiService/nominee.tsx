import { FetchNominees } from "@/app/services/fetchNominees";
import { useQuery } from "@tanstack/react-query";

export function useGetNominee() {
  const { data, isPending, isSuccess, isError, error } = useQuery({
    queryKey: ["nominee"],
    queryFn: async () => await new FetchNominees().getNominee(),
  });

  return { data, isPending, isSuccess, isError, error };
}

export function useGetAllNomination() {
  const { data, isPending, isSuccess, isError, error } = useQuery({
    queryKey: ["all-nominations"],
    queryFn: async () => await new FetchNominees().getAllNominations(),
  });

  return { data, isPending, isSuccess, isError, error };
}

export function useGetUserNomination(nomination_id: string) {
  const { data, isPending, isSuccess, isError, error } = useQuery({
    queryKey: ["user-nominations"],
    queryFn: async () =>
      await new FetchNominees().getUserNomination(nomination_id),
  });

  return { data, isPending, isSuccess, isError, error };
}
