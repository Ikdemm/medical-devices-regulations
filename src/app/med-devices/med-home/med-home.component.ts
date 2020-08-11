import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-med-home',
  templateUrl: './med-home.component.html',
  styleUrls: ['./med-home.component.css']
})
export class MedHomeComponent implements OnInit {

  constructor(private documentService: DocumentService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute) { }

  selectedCountry;
  selectedCategory;
  categories;
  subcategories;
  selectedSubCategory;
  documents;

  countries = ["Europe", "Germany"];

  documentsForm = this.formBuilder.group({
    selectedCountry: [''],
    selectedCategory: [''],
    selectedSubCategory: ['']
  })

  changedCategory() {
    this.selectedCategory = this.documentsForm.get('selectedCategory').value;
    this.subcategories = this.documentService.getSubCategories(this.selectedCategory);
    console.log(this.subcategories);
  }

  changedCountry() {
    this.selectedCountry = this.documentsForm.get('selectedCountry').value;
    this.categories = this.documentService.getCategories(this.selectedCountry);
  }

  onSubmit() {
    console.log(JSON.stringify(this.documentsForm.value));
    this.selectedSubCategory = this.documentsForm.get('selectedSubCategory').value;
    this.getDocuments(this.selectedSubCategory);
    console.log(this.documents);
  }

  getDocuments(subcategory) {
    this.documents = this.documentService.getDocumentsBySubC(subcategory);
  }

  changedSubCategory() {
    this.selectedSubCategory = this.documentsForm.get('selectedSubCategory').value;
  }

  openfile(url) {
    console.log(url);
    saveAs(url, "file");
  }

  getDocumentsByName(input) {
    this.documents = this.documentService.getDocumentByName(input);
  }

  ngOnInit() {
    console.log("hello");
    const input = this.activatedRoute.snapshot.paramMap.get('input');
    console.log(input);
    this.getDocumentsByName(input);
    console.log(this.documents);
  }

}