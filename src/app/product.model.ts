export class ProductModel {
  id: number;
  name: string;
  tagline: string;
  // tslint:disable-next-line:variable-name
  image_url: string;
  ibu: number;

  // tslint:disable-next-line:variable-name
  constructor(id, name, tagline, image_url, ibu) {
    this.id = id;
    this.name = name;
    this.tagline = tagline;
    this.image_url = image_url;
    this.ibu = ibu;
  }
  /*"id": 1,
  "name": "Buzz",
  "tagline": "A Real Bitter Experience.",
  "first_brewed": "09/2007",
  "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
  "image_url": "https://images.punkapi.com/v2/keg.png",
  "abv": 4.5,
  "ibu": 60,*/
}
