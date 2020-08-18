import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../services/document.service';
// import { FormGroup, FormBuilder } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
import { saveAs } from 'file-saver';
import { Document } from '../models/document';


@Component({
  selector: 'app-med-devices',
  templateUrl: './med-devices.component.html',
  styleUrls: ['./med-devices.component.css']
})
export class MedDevicesComponent implements OnInit {

  constructor(private documentService: DocumentService
              // private formBuilder: FormBuilder
              ) { }

  
  documentsLoaded = false;

  selectedCountry: any;
  selectedCategory: any;
  selectedSubCategory: any;

  categories = [];
  subcategories = [];
  documents = [];
  countries = [];

  // countries: Array<Object> = [{"country": "Europe"}, {"country": "Germany"}];

  // documentsForm = this.formBuilder.group({
  //   selectedCountry: [''],
  //   selectedCategory: [''],
  //   selectedSubCategory: ['']
  // })

  changedCountry() {
    this.categories = this.selectedCountry["categories"];
    this.selectedSubCategory = null;
    this.selectedCategory = null;
    this.reloadDocuments("country");
  }

  changedCategory() {
    this.subcategories = this.selectedCategory["subcategories"];
    this.selectedSubCategory = null;
    this.reloadDocuments("category");
  }

  changedSubCategory() {
    this.reloadDocuments("subcategory");
  }

  loadCountries() {
    this.documentService.getCountries().subscribe((data: Array<Object>) => {
      this.countries = [...data];
      this.documentsLoaded = true;
    });
  }

  loadDocuments() {
    this.documentService.getDocuments().subscribe((data: Array<Document>) => {
      this.documents = [...data];
      console.log(this.documents);
    })
  }

  reloadDocuments(condition) {
    if (condition === "country") {
      this.documentService.getDocuments().subscribe((data: Array<Document>) => {
        this.documents = data.filter(document => document["country"] === this.selectedCountry["country"]);
        console.log(this.documents);
      });
    } else if (condition === "category") {
      this.documentService.getDocuments().subscribe((data: Array<Document>) => {
        this.documents = data.filter(document => document["category"] === this.selectedCategory["name"]);
        console.log(this.documents);
      });
    } else if (condition === "subcategory") {
      this.documentService.getDocuments().subscribe((data: Array<Document>) => {
        console.log(this.selectedSubCategory);
        this.documents = data.filter(document => document["subcategory"] === this.selectedSubCategory["title"]);
        console.log(this.documents);
      });
    }
  }

  ngOnInit() {
    this.loadCountries();
    this.loadDocuments();
  }

}