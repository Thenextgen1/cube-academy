import { CreateNomination } from "../typings/nominees/typings";
import { client } from "./apiClient";

export default class PostNomination {
  createNomination(data: CreateNomination) {
    return client({
      method: "POST",
      url: "/api/nomination",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    });
  }
}
