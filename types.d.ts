export interface Photo {
  _key:  string;
  _type: string;
  asset: {
    _ref:  string;
    _type: string;
  };
}

export interface Post {
  _createdAt:  Date;
  _id:         string;
  _rev:        string;
  _type:       string;
  _updatedAt:  Date;
  article:     Article[];
  description: string;
  slug:        Slug;
  title:       string;
}

export interface Article {
  _key:      string;
  _type:     string;
  children?: Child[];
  markDefs?: any[];
  style?:    string;
  asset?:    Asset;
}

export interface Asset {
  _ref:  string;
  _type: string;
}

export interface Child {
  _key:  string;
  _type: string;
  marks: any[];
  text:  string;
}

export interface Slug {
  _type:   string;
  current: string;
}
