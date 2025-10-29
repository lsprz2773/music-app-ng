export interface Artist {
  id: string;
  name: string;
  images:[{
    url: string;
  }];
  followers: number;
}
