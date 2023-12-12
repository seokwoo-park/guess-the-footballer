export type GameStatusType = "pending" | "start" | "finish";

export type PlayerStaticType = {
  team: {
    id: number;
    name: string;
    logo: string;
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: string;
  };
  games: {
    position: string;
    captain: boolean;
  };
};

export type PlayerDataType = {
  player: {
    id: number;
    firstname: string;
    lastname: string;
    age: number;
    nationality: string;
    height: string;
    weight: string;
    injured: boolean;
    photo: string;
    birth: {
      date: string;
      place: string;
      country: string;
    };
  };

  statics: PlayerStaticType[];
};

export type FetchLeaguePlayersResponseType = {
  data: PlayerDataType[];
  season: number;
  page: number;
};
