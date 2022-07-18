import { PosterInterface, PostersJSONInterface } from "../interfaces.ts/PosterInterface";


class Posters {
  static categoriesData: PosterInterface[];
  static async setCategoriesData() {
    this.categoriesData = await Posters.postersFromJson();
  }
  static postersFromJson() {
    return fetch('./assets/jsons/posters.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json();
      })
      .then((data: PostersJSONInterface) => {
        const arrOfPosters: PosterInterface[] = Object.values(data);
        return arrOfPosters;
      })
  }
}

export default Posters;
