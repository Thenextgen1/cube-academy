import { UpdateNomination } from "../typings/nominees/typings";
import { client } from "./apiClient";

export default class PutNomination {
  updateNomination(nomination_id: string, data: UpdateNomination) {
    return client({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      url: `/admin/artisan/${nomination_id}`,
      data,
    });
  }
}
