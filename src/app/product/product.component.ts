import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { timeStamp } from 'console';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  producttitle: any;
  productlist = [];
  productstrash = [];
  product: any;
  productform: FormGroup;
  index: number;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      this.producttitle = JSON.parse(params.producttitle);
      console.log(this.producttitle.title);
    });
    this.productlist = JSON.parse(localStorage.getItem('products'));
    this.productstrash = JSON.parse(localStorage.getItem('productstrash'));

    for(let i = 0 ; i< this.productlist.length; i++){
      if(this.productlist[i].title == this.producttitle.title) {
      this.product = this.productlist[i];
      this.index = i;
    }
    }
    this.productform = this.formBuilder.group({
      title: (this.product.title == undefined || this.product.title == null)? '': this.product.title,
      description: (this.product.description == undefined || this.product.description == null)? '': this.product.description,
      price: (this.product.price == undefined || this.product.price == null)? '': this.product.price,
      rating: (this.product.rating == undefined || this.product.rating == null)? '': this.product.rating,
      location: (this.product.location == undefined || this.product.location == null)? '': this.product.location,
    })
  }

  Update(){
    console.log(this.productform);
    this.product.title = this.productform.controls.title.value;
    this.product.description = this.productform.controls.description.value;
    this.product.price = this.productform.controls.price.value;
    this.product.rating = this.productform.controls.rating.value;
    this.product.location = this.productform.controls.location.value;
    console.log(this.product);
    console.log(this.productlist[this.index]);
    if(this.index==undefined || this.index == null){
      this.productlist.push(this.product)
    }
    else{
      this.productlist[this.index] = this.product;
    }
    localStorage.setItem('products', JSON.stringify(this.productlist))
    this.router.navigate(['productlist']);

  }

  Movetotrash(){
    if(confirm("Are you sure to Delete")){
      this.productstrash.push(this.product);
      localStorage.setItem('productstrash', JSON.stringify(this.productstrash));
      this.productlist.splice(this.index, 1);
      localStorage.setItem('products', JSON.stringify(this.productlist));
      this.router.navigate(['productlist']);
    }
  }

}
