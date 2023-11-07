export type Nominee = {
  nominee_id: string;
  first_name: string;
  last_name: string;
}[];

export type Nominations = {
  nomination_id: string;
  nominee_id: string;
  reason: string;
  process: string;
  date_submitted: string;
  closing_date: string;
}[];

export type UserNominations = {
  nomination_id: string;
  nominee_id: string;
  reason: string;
  process: string;
  date_submitted: string;
  closing_date: string;
};

export type UpdateNomination = {
  reason: string;
  process: string;
  closing_date: string;
};

enum Reason {
  VERY_UNFAIR = "very_unfair",
  UNFAIR = "  unfair",
  NOT_SURE = "not_sure",
  FAIR = "fair",
  VERY_FAIR = "very_fair",
}

export type CreateNomination = {
  nominee_id: string;
  reason: string;
  process: Reason;
};
