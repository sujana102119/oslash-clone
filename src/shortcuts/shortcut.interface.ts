export interface BaseShortcut {
    shortlink: string;
    url: string,
    description:  string,
    tags: string[]
  }
  
  export interface Shortcut extends BaseShortcut {
    id: number;
  }