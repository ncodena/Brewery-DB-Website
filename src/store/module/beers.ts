import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import axios from "axios";

@Module({ namespaced: true })
class Beers extends VuexModule {
  // State

  public beers: Array<object> = [];
  public beer: object = {};
  public relatedBeers: Array<object> = [];
  public randomBeer: object = {};
  public categoriesBeers: Array<object> = [];
  public beersByCategory: Array<object> = [];
  public isLoading = false;

  // Getters

  get indexBeers(): Array<object> {
    return this.beers;
  }
  get indexDetailsBeer(): object {
    return this.beer;
  }
  get indexRelatedBeers(): Array<object> {
    return this.relatedBeers;
  }
  get indexRandomBeer(): object {
    return this.randomBeer;
  }
  get indexCategories(): Array<object> {
    return this.categoriesBeers;
  }
  get indexBeersByCategory(): Array<object> {
    return this.beersByCategory;
  }

  // Mutations
  @Mutation
  public setBeers(beers: Array<object>): void {
    this.beers = beers;
  }

  @Mutation
  public setBeer(beer: object): void {
    this.beer = beer;
  }
  @Mutation
  public setRelatedBeers(relatedBeers: Array<object>): void {
    this.relatedBeers = relatedBeers;
  }
  @Mutation
  public setRandomBeer(randomBeer: object): void {
    this.randomBeer = randomBeer;
  }
  @Mutation
  public setCategories(categoriesBeers: Array<object>): void {
    this.categoriesBeers = categoriesBeers;
  }

  @Mutation
  public setBeersByCategory(beersByCategory: Array<object>): void {
    this.beersByCategory = beersByCategory;
  }
  @Mutation
  public setLoadingFalse(): void {
    this.isLoading = false;
  }
  @Mutation
  public setLoadingTrue(): void {
    this.isLoading = true;
  }

  // Actions

  @Action
  public async fetchBeers(): Promise<void> {
    this.context.commit("setLoadingTrue");
    const response = await axios
      .get("https://api.punkapi.com/v2/beers?per_page=10")

      .then(response => response);

    this.context.commit("setBeers", response.data);
    this.context.commit("setLoadingFalse");
  }
  @Action
  public async fetchBeer(id: number): Promise<void> {
    const response = await axios

      .get(`https://api.punkapi.com/v2/beers?ids=${id}`)

      .then(response => response);

    this.context.commit("setBeer", response.data);
    this.context.commit("setLoadingFalse");
  }
  @Action
  public async fetchRelated(id: number): Promise<void> {
    this.context.commit("setLoadingTrue");
    const response = await axios
      .get(`https://api.punkapi.com/v2/beers?ids=${id}`)

      .then(async response => {
        const yeast = response.data[0].ingredients.yeast;
        return await axios.get(
          `https://api.punkapi.com/v2/beers?per_page=30&yeast=${yeast}`
        );
      })
      .then(response => response);

    // eslint-disable-next-line
    const filteredData = response.data;

    function fetchRandomItems(filteredData: Array<object>) {
      const newArray = [];

      for (let i = 0; i < filteredData.length; i++) {
        const random = filteredData[Math.floor(Math.random() * 30)];

        if (newArray.indexOf(random) == -1) {
          newArray.push(random) 
        }

        if (filteredData.length <= 3)  {
          return  newArray.push(filteredData) && console.log(newArray.length) 
          } else {
            newArray
          }
        
        // if (filteredData.length < 3)  {
        //   return  newArray.push(filteredData)
        // } 

        // if(newArray.length == 3){
        //   break
        // } else if (newArray.length < 3) {
        //   newArray
        // }

      

        // if(newArray.length == 3){
        //   return match = true && console.log('hi from true');

        // } 
    

        // if (match) {
        //   break
        // } else {
        //   newArray && console.log('hi from false')
        // }

    }

      return newArray;
    }

    this.context.commit("setRelatedBeers", fetchRandomItems(filteredData));
    this.context.commit("setLoadingFalse");
  }

  @Action
  public async fetchRandomBeer(): Promise<void> {
    this.context.commit("setLoadingTrue");

    const response = await axios

      .get("https://api.punkapi.com/v2/beers/random")

      .then(response => response);

    this.context.commit("setRandomBeer", response.data);
    this.context.commit("setLoadingFalse");
  }
  @Action
  public async fetchCategories(): Promise<void> {
    this.context.commit("setLoadingTrue");

    const response = await axios
      .get("https://api.punkapi.com/v2/beers?per_page=80")

      .then(response => response);
    const filteredData = Array.from(
      // eslint-disable-next-line
      new Set(response.data.map((yeast: any) => yeast.ingredients.yeast))
    ).map(ingredients => {
      return response.data.find(
        // eslint-disable-next-line
        (yeast: any) => yeast.ingredients.yeast === ingredients
      );
    });

    this.context.commit("setCategories", filteredData);
    this.context.commit("setLoadingFalse");
  }
  @Action
  public async fetchBeersCategory(yeast: string): Promise<void> {
    this.context.commit("setLoadingTrue");

    const response = await axios
      .get(`https://api.punkapi.com/v2/beers?per_page=80&yeast=${yeast}`)

      .then(response => response);

    this.context.commit("setBeersByCategory", response.data);
    this.context.commit("setLoadingFalse");
  }
}

export default Beers;
