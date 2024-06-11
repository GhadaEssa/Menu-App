import { Component } from '@angular/core';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'menu';
  total:number= 0;//total price
  qty:number= 0;//products quantity
 

  foodmenu = [
    {id: 1, name: "دجاج", price: 30, description: "دجاج مشوي على الفحم", img: "assets/product 3.jpg"},
    {id: 2, name: "دجاج", price: 30, description: "دجاج شواية", img: "assets/product 3.jpg"},
    {id: 3, name: "ايدام", price: 20, description: "ايدام خضار مشكل", img: "assets/product 2.jpg"},
    {id: 4, name: "ايدام", price: 20, description: "ايدام بالدجاج على الفرن", img: "assets/product 1.jpg"}
  ];
// This function recive any new event and update the price and quantity value
  sum(event: any, price: number) {
    console.log('Checkbox changed:', event.target.checked, 'Price:', price);
    const isChecked: boolean = event.target.checked;
    //console.log('Checkbox checked:', isChecked);
    //console.log('Price:', price);
    if (isChecked) {
      this.total += price;
      this.qty += 1;
    } else {
      this.total -= price;
      this.qty -= 1;
    }
    //console.log('Total:', this.total);
   // console.log('Qty:', this.qty);
  
  }
  // This filter "filteredFoodMenu" array debending on the searchTerm the user write, and the data automatically will update on the html table
  prodname: string = '';
  filteredFoodMenu: any[] = this.foodmenu;  
  find(searchTerm: string) {
    this.filteredFoodMenu = this.foodmenu.filter(item => item.name.includes(searchTerm));  
  }

}
