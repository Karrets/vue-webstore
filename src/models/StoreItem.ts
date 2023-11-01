export class StoreItem {
  id: string;
  name: string;
  imgSrc: string;
  brief: string;
  tracklist: Array<String>;
  options: Array<String>;
  price: string;

  constructor(src: {
    id: string;
    name: string;
    imgSrc: string;
    brief: string;
    tracklist: Array<String>;
    options: Array<String>;
    price: string;
  }) {
    if (!src) throw new Error('Source object may not be null...');

    this.id = src.id;
    this.name = src.name;
    this.imgSrc = src.imgSrc;
    this.brief = src.brief;
    this.tracklist = src.tracklist;
    this.options = src.options;
    this.price = src.price;
  }

  static type(
    source: Array<{
      id: string;
      name: string;
      imgSrc: string;
      brief: string;
      tracklist: Array<String>;
      options: Array<String>;
      price: string;
    }>
  ): Array<StoreItem> {
    const result: Array<StoreItem> = [];

    for (const album of source) {
      result.push(new StoreItem(album));
    }

    return result;
  }
}
