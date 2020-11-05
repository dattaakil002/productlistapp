import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  home: boolean = true;
  trash: boolean = false;
  productlist = [];
  productstrash = [];
  constructor(private router: Router, private share: SharedService) { }

  ngOnInit(): void {

    // if(localStorage.getItem('products') === null || localStorage.getItem('products') == undefined){
    //   let products = [
    //     { title: 'boat stone 260', image: 'assets/road-1072823__340.jpg', description: 'But like all great companies striving for always making themselves better than before, boAt has been launching multiple products for the same category to suit the choices of its customers. \n Since one Bluetooth speaker wasn’t enough for all the music listeners out there, boAt has released multiple products with little differences over time. \n Uncovering the minute differences and letting you decide which one would be a perfect fit for you, we bring a thorough comparison between 2 of boAt’s best Bluetooth speakers in the market: boAt stone 200 VS boAt stone 260.', price: 1000, rating: 4.5, location: 'chennai' },
    //     { title: 'boat stone 261', image: 'assets/road-1072823__340.jpg', description: 'But like all great companies striving for always making themselves better than before, boAt has been launching multiple products for the same category to suit the choices of its customers. \n Since one Bluetooth speaker wasn’t enough for all the music listeners out there, boAt has released multiple products with little differences over time. \n Uncovering the minute differences and letting you decide which one would be a perfect fit for you, we bring a thorough comparison between 2 of boAt’s best Bluetooth speakers in the market: boAt stone 200 VS boAt stone 260.', price: 1001, rating: 3.5, location: 'chennai' },
    //     { title: 'boat stone 262', image: 'assets/road-1072823__340.jpg',description: 'But like all great companies striving for always making themselves better than before, boAt has been launching multiple products for the same category to suit the choices of its customers. \n Since one Bluetooth speaker wasn’t enough for all the music listeners out there, boAt has released multiple products with little differences over time. \n Uncovering the minute differences and letting you decide which one would be a perfect fit for you, we bring a thorough comparison between 2 of boAt’s best Bluetooth speakers in the market: boAt stone 200 VS boAt stone 260.', price: 1002, rating: 2.5, location: 'vizag' },
    //     { title: 'boat stone 263', image: 'assets/road-1072823__340.jpg', description: 'But like all great companies striving for always making themselves better than before, boAt has been launching multiple products for the same category to suit the choices of its customers. \n Since one Bluetooth speaker wasn’t enough for all the music listeners out there, boAt has released multiple products with little differences over time. \n Uncovering the minute differences and letting you decide which one would be a perfect fit for you, we bring a thorough comparison between 2 of boAt’s best Bluetooth speakers in the market: boAt stone 200 VS boAt stone 260.',price: 1003, rating: 1.5, location: 'ahmedabad' },
    //     { title: 'boat stone 264', image: 'assets/road-1072823__340.jpg', description: 'But like all great companies striving for always making themselves better than before, boAt has been launching multiple products for the same category to suit the choices of its customers. \n Since one Bluetooth speaker wasn’t enough for all the music listeners out there, boAt has released multiple products with little differences over time. \n Uncovering the minute differences and letting you decide which one would be a perfect fit for you, we bring a thorough comparison between 2 of boAt’s best Bluetooth speakers in the market: boAt stone 200 VS boAt stone 260.',price: 1004, rating: 0.5, location: 'chennai' },
    //     { title: 'boat stone 265', image: 'assets/road-1072823__340.jpg', description: 'But like all great companies striving for always making themselves better than before, boAt has been launching multiple products for the same category to suit the choices of its customers. \n Since one Bluetooth speaker wasn’t enough for all the music listeners out there, boAt has released multiple products with little differences over time. \n Uncovering the minute differences and letting you decide which one would be a perfect fit for you, we bring a thorough comparison between 2 of boAt’s best Bluetooth speakers in the market: boAt stone 200 VS boAt stone 260.',price: 1005, rating: 4, location: 'goa' },
    //     { title: 'boat stone 266', image: 'assets/road-1072823__340.jpg',description: 'But like all great companies striving for always making themselves better than before, boAt has been launching multiple products for the same category to suit the choices of its customers. \n Since one Bluetooth speaker wasn’t enough for all the music listeners out there, boAt has released multiple products with little differences over time. \n Uncovering the minute differences and letting you decide which one would be a perfect fit for you, we bring a thorough comparison between 2 of boAt’s best Bluetooth speakers in the market: boAt stone 200 VS boAt stone 260.', price: 1006, rating: 3, location: 'chennai' },
    //     { title: 'boat stone 267', image: 'assets/road-1072823__340.jpg', description: 'But like all great companies striving for always making themselves better than before, boAt has been launching multiple products for the same category to suit the choices of its customers. \n Since one Bluetooth speaker wasn’t enough for all the music listeners out there, boAt has released multiple products with little differences over time. \n Uncovering the minute differences and letting you decide which one would be a perfect fit for you, we bring a thorough comparison between 2 of boAt’s best Bluetooth speakers in the market: boAt stone 200 VS boAt stone 260.', price: 1007, rating: 2, location: 'pune' },
    //     { title: 'boat stone 268', image: 'assets/road-1072823__340.jpg', description: 'But like all great companies striving for always making themselves better than before, boAt has been launching multiple products for the same category to suit the choices of its customers. \n Since one Bluetooth speaker wasn’t enough for all the music listeners out there, boAt has released multiple products with little differences over time. \n Uncovering the minute differences and letting you decide which one would be a perfect fit for you, we bring a thorough comparison between 2 of boAt’s best Bluetooth speakers in the market: boAt stone 200 VS boAt stone 260.', price: 1008, rating: 1, location: 'chennai' },
    //   ];

    //   localStorage.setItem('products', JSON.stringify(products));
    // }
    // console.log(JSON.parse(localStorage.getItem('products')));
    this.share.getproductlist();
    this.productlist = JSON.parse(localStorage.getItem('products'));
    this.productstrash = JSON.parse(localStorage.getItem('productstrash'));
  }

  indivproduct(product){
    this.router.navigate(['product'],{
      queryParams:{producttitle: JSON.stringify(product)}
    })
  }
  homepage(){
    this.home = true;
    this.trash = false;
  }
  trashpage(){
    this.home = false;
    this.trash = true;
  }
  restore(product){
    this.productlist.push(product);
    localStorage.setItem('products', JSON.stringify(this.productlist));
    for(let i=0; i< this.productstrash.length; i++){
      if(this.productstrash[i].title == product.title){
        this.productstrash.splice(i,1);
      }
    }
    localStorage.setItem('productstrash', JSON.stringify(this.productstrash));

  }

  remove(product){
    if(confirm("Are you sure to permanently remove this product")){
    for(let i=0; i< this.productstrash.length; i++){
      if(this.productstrash[i].title == product.title){
        this.productstrash.splice(i,1);
      }
    }
    localStorage.setItem('productstrash', JSON.stringify(this.productstrash));
  }
}


}
