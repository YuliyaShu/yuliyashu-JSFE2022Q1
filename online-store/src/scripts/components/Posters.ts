import { PosterInterface, PostersJSONInterface } from "../interfaces/PosterInterface";


class Posters {
  static categoriesData: PosterInterface[];
  static async setCategoriesData() {
    this.categoriesData = await Posters.postersFromJson();
  }
  
  static async postersFromJson() {
    const response = await fetch('./assets/jsons/posters.json');
    if (!response.ok) {
              throw new Error(response.statusText);
            }
    const posters: PostersJSONInterface = await response.json();
    const postersValues: PosterInterface[] = Object.values(posters);
    return postersValues;
  }
}

export default Posters;
