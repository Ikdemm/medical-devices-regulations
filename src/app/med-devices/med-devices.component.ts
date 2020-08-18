import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../services/document.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-med-devices',
  templateUrl: './med-devices.component.html',
  styleUrls: ['./med-devices.component.css']
})
export class MedDevicesComponent implements OnInit {

  constructor(private documentService: DocumentService,
              private formBuilder: FormBuilder) { }

  // selectedCountry;
  // selectedCategory;
  // categories;
  // subcategories;
  // selectedSubCategory;
  documents;

  countries = ["Europe", "Germany"];

  documentsForm = this.formBuilder.group({
    selectedCountry: [''],
    selectedCategory: [''],
    selectedSubCategory: ['']
  })

  // changedCategory() {
  //   this.selectedCategory = this.documentsForm.get('selectedCategory').value;
  //   this.subcategories = this.documentService.getSubCategories(this.selectedCategory);
  //   console.log(this.subcategories);
  // }

  // changedCountry() {
  //   this.selectedCountry = this.documentsForm.get('selectedCountry').value;
  //   this.categories = this.documentService.getCategories(this.selectedCountry);
  // }

  // onSubmit() {
  //   console.log(JSON.stringify(this.documentsForm.value));
  //   this.selectedSubCategory = this.documentsForm.get('selectedSubCategory').value;
  //   this.getDocuments(this.selectedSubCategory);
  //   console.log(this.documents);
  // }

  // getDocuments(subcategory) {
  //   this.documents = this.documentService.getDocumentsBySubC(subcategory);
  // }

  // changedSubCategory() {
  //   this.selectedSubCategory = this.documentsForm.get('selectedSubCategory').value;
  // }

  openfile(url) {
    console.log(url);
    saveAs(url, "file");
  }

  getDocumentsByName(input) {
    this.documents = this.documentService.getDocumentByName(input);
  }

  ngOnInit() {
    this.documents = this.documentService.getAllDocuments();
    console.log(this.documents);
  }

}