import { client } from "./apiClient";

export default class DeleteNomination {
  deleteNomination(nomination_id: string) {
    return client({
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      url: `/api/nomination/${nomination_id}`,
    });
  }
}
