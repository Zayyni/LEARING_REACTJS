import { Info } from "./Info";
import { RandomUser } from "./RandomUser";

export interface RandomUserEntity {
    results?: (RandomUser)[] | null;
    info: Info;
  }