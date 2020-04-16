import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import axios from "axios";

@Module({ namespaced: true })

class Beers extends VuexModule {
    // State

    public beers: Array<any> = []
    public beer: object = {}
    public relatedBeers: Array<any> = []
    public randomBeer: object = {}
    public categoriesBeers: Array<any> = []
    public beersByCategory: Array<any> = []
    public isLoading: boolean

    // Getters

    get indexBeers (): any {
        return this.beers
    }
    get indexDetailsBeer (): any {
        return this.beer
    }
    get indexRelatedBeers (): any {
        return this.relatedBeers
    }
    get indexRandomBeer (): any {
        return this.randomBeer
    }
    get indexCategories (): any {
        return this.categoriesBeers
    }
    get indexBeersByCategory (): any {
        return this.beersByCategory
    }

    // Mutations
    @Mutation
        public setBeers(beers: Array<any>): void {
            this.beers = beers
        }

        @Mutation
        public setBeer(beer: object): void {
            this.beer = beer
        }
        @Mutation
        public setRelatedBeers(relatedBeers: Array<any>): void {
            this.relatedBeers = relatedBeers
        }
        @Mutation
        public setRandomBeer(randomBeer: object): void {
            this.randomBeer = randomBeer
        }
        @Mutation
        public setCategories(categoriesBeers: Array<any>): void {
            this.categoriesBeers = categoriesBeers
        }
        
        @Mutation
        public setBeersByCategory(beersByCategory: Array<any>): void {
            this.beersByCategory = beersByCategory
        }
        @Mutation
        public setLoadingFalse(isLoading: boolean): void {
            this.isLoading = isLoading
        }
        // public setLoadingTrue(isLoading: boolean): void {
        //     this.isLoading => true = isLoading
        // }


        @Action
        public async fetchBeers(): Promise<void> {
            this.context.commit("loading");
            const response = await axios
              .get("https://api.punkapi.com/v2/beers?page=10")
      
              .then(response => response);

            this.context.commit('setBeers', response.data);
            this.context.commit('setLoadingFalse');
        }
        @Action
        public async fetchBeer(id: number): Promise<void> {
            
            const response = await axios
      
              .get(`https://api.punkapi.com/v2/beers?ids=${id}`)
      
              .then(response => response);
      
            this.context.commit("setBeer", response.data);
            this.context.commit('setLoadingFalse');
        };
        @Action
        public async fetchRelated(id: number): Promise<void> {
            
            const response = await axios
        .get(`https://api.punkapi.com/v2/beers?ids=${id}`)

        .then(async response => {
          const yeast = response.data[0].ingredients.yeast;
          return await axios.get(
            `https://api.punkapi.com/v2/beers?per_page=30&yeast=${yeast}`
          );
        })
        .then(response => response);

        const filteredData = response.data.filter(function(beer: any, id: number) {
            return beer.id != id;
        });

        function fethcRandomItems(filteredData: Array<any>) {
            const newArray = [];

            for (let i = 0; i < 3; i++) {
            const random = filteredData[Math.floor(Math.random() * 30)];

            if (newArray.indexOf(random) == -1) {
                newArray.push(random);
            }
            }

            return newArray;
        }
        
            this.context.commit("setRealatedBeers", fethcRandomItems(filteredData));
            this.context.commit('setLoadingFalse');
    };

    @Action
    public async fetchRandomBeer(): Promise<void> {
            
        const response = await axios
  
        .get("https://api.punkapi.com/v2/beers/random")
  
          .then(response => response);
  
        this.context.commit("setRandomBeer", response.data);
        this.context.commit('setLoadingFalse');
    }
    @Action
    public async fetchCategories(): Promise<void> {

        const response = await axios
        .get("https://api.punkapi.com/v2/beers?per_page=80")

        .then(response => response);
      console.log("from store", response.data);
      const filteredData = Array.from(
        new Set(response.data.map(yeast => yeast.ingredients.yeast))
      ).map(ingredients => {
        return response.data.find(
          yeast => yeast.ingredients.yeast === ingredients
        );
      });

      console.log(filteredData)
            
        this.context.commit("setCategories", filteredData);
    }
    @Action
    public async fetchBeersCategory(yeast: string): Promise<void> {
            
        const response = await axios
        .get(`https://api.punkapi.com/v2/beers?per_page=80&yeast=${yeast}`)

        .then(response => response);
  
        this.context.commit("setBeersByCategory", response.data);
        this.context.commit('setLoadingFalse');
    }


}

export default Beers