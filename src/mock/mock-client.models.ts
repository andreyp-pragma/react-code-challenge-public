export interface Symbol {
  symbol: string;
  name?: string;
  last: number;
  change: number;
  changePct: number;
}

export interface StreamingClient {
  subscribe: (symbols: string[]) => void;
  unsubscribe: (symbols: string[]) => void;
}
