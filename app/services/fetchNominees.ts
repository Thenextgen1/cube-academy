import { client, token } from "./apiClient";
import { AxiosResponse } from "axios";
import {
  Nominations,
  UserNominations,
  Nominee,
} from "../typings/nominees/typings";

export class FetchNominees {
  getNominee(): Promise<AxiosResponse<Nominee>> {
    return client({
      method: "GET",
      url: "/api/nominee",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}}`,
      },
    });
  }
  getAllNominations(): Promise<AxiosResponse<Nominations>> {
    return client({
      method: "GET",
      url: "/api/nomination",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}}`,
      },
    });
  }
  getUserNomination(
    nomination_id: string,
  ): Promise<AxiosResponse<UserNominations>> {
    return client({
      method: "GET",
      url: `/api/nomination/${nomination_id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}}`,
      },
    });
  }
}
