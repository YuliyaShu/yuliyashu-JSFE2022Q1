interface PosterInterface {
  readonly url: string;
  readonly name: string;
  readonly translate?: string;
  readonly category: 'animals' | 'christmas' | 'emotions' | 'family' | 'food' | 'hobby' | 'plants' | 'sport';
  readonly year: '2012' | '2013' | '2014' | '2015' | '2016' | '2017' | '2018' | '2019' | '2020' | '2021' | '2022';
  readonly quantity: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
  readonly designer: 'Peppy' | 'Eleven' | 'Infinite_Jest';
  readonly color: 'Green' | 'Orange' | 'White';
  readonly size: '20x20' | '50x50' | '70x70';
  readonly popularity: boolean;
  readonly prize: string;
}

interface PostersJSONInterface {
  [name: string]: PosterInterface;
}

interface FilterPopularityInterface extends PosterInterface {
  readonly popularity: true;
}

export { PosterInterface, PostersJSONInterface, FilterPopularityInterface };
