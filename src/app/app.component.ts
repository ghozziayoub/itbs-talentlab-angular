import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //des attributs
  public name: String = "TALENTLAB"
  public users: String[] = ["Augustin", "Ahmed", "Rouaa", "Ameni", "Zeineb", "Mohamed"]

  public product: any = {
    id: 1,
    name: "lait",
    price: 1.250,
    brand: "Délice",
    category: {
      id: 2,
      name: "food"
    }
  }

  public products: any[] = [
    {
      id: 1,
      name: "lait",
      price: 1.250,
      brand: "Délice",
      category: {
        id: 2,
        name: "food"
      }
    },
    {
      id: 2,
      name: "Iphone 11",
      price: 4250,
      brand: "Apple",
      category: {
        id: 1,
        name: "Smartphone"
      }
    }
  ]

  //constructeur

  //des methodes
  public deleteUser(username: String): void {
    let indice = this.users.indexOf(username)
    this.users.splice(indice, 1)
  }


}
