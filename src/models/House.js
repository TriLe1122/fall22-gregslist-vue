export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.description = data.description
  }
}
