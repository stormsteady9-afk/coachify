export type UserSession = {
  id: string;
  username?: string;
}

export type UserData = {
  id: string;
  username: string;
  avatars: Array<{ url: string }>;
  profiles?: Array<{
    headline?: string;
    links?: Array<{
      url: string;
      title: string;
    }>;
  }>;
  role?: {
    symbol: string;
  };
}