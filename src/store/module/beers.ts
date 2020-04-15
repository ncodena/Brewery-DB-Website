import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'test' })

class Beers extends VuexModule {
    public beers: Array<any> = []
    public beer: object = {}
    public relatedBeers: Array<any> = []
    public randomBeer: object = {}
    public categoriesBeers: Array<any> = []
    public beersByCategory: Array<any> = []
    public isLoading: boolean = false

    @Mutation
        public setBeers(beers: Array<any>): void {
            this.beers = beers
        }

        public setBeer(beer: object): void {
            this.beer = beer
        }
        public setRealtedBeers(relatedBeers: Array<any>): void {
            this.relatedBeers = relatedBeers
        }
        public setRandomBeer(randomBeer: object): void {
            this.randomBeer = randomBeer
        }
        public setCategories(categoriesBeers: Array<any>): void {
            this.categoriesBeers = categoriesBeers
        }
        public setBeersByCategory(beersByCategory: Array<any>): void {
            this.beersByCategory = beersByCategory
        }
        public setLoading(isLoading: boolean): void {
            this.isLoading = isLoading
        }


        @Action
        public updateName(newName: string): void {
            this.context.commit('setName', newName)
        }



}