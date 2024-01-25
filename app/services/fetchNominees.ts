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
    });
  }
  getAllNominations(): Promise<AxiosResponse<Nominations>> {
    return client({
      method: "GET",
      url: "/api/nomination",
    });
  }
  getUserNomination(
    nomination_id: string,
  ): Promise<AxiosResponse<UserNominations>> {
    return client({
      method: "GET",
      url: `/api/nomination/${nomination_id}`,
    });
  }
}
