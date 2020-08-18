import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Document } from '../models/document';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private _url = "../../assets/documents/plainDocuments.json";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this._url);     
  }

  getAllDocuments() {
    // let documents: Array<Document>;
    let documents = [];
    this.getData().subscribe((data: Array<Document>) => {
      data.forEach(element => documents.push(element));
      // documents = [...data];
    });
    return documents;
  }

  getDataByCountry(country) {
    if (!country) {return this.getAllDocuments()}
    let europe, germany;
    this.http.get('../../assets/documents/documents.json').subscribe( (data: Array<Object>) => {
      [
        europe,
        germany
      ] = data;
      return (country === "europe") ? europe : germany;
    });
  }

  getCategoriesByCountry(country) {
    let categories = this.getDataByCountry(country).map((element) => {return element['title']});
    console.log(categories);
    return categories;
  }

  getSubCategories(category) {
    let retrievedData;
    let subCategories = [];
    this.http.get('../../assets/documents/subCategories.json').subscribe(data => {
      retrievedData = data;
      retrievedData.filer(element => element.category === category);
    });
    return subCategories;
  }

  getCategories(country) {
    let categories = [];
    this.http.get('../../assets/documents/categories.json').subscribe((data: Array<Object>) => {
      categories = data.filter(category => category['country'] === country);
    });
    return categories;
  }

  getDocumentsBySubC(subcategory) {
    let retrievedData;
    let documents = [];
    this.http.get('../../assets/documents/subCategories.json').subscribe(data => {
      retrievedData = data;
      retrievedData.forEach(sub => {
        if (sub.title === subcategory) {
          sub.documents.forEach(doc => {
            let document = doc;
            document.subcategory = sub.title;
            document.category = sub.category;
            documents.push(doc);
            console.log(doc);
          });
        }
      });
    });
    return documents;
  }

  getDocumentByName(input) {
    let retrievedData;
    let documents = [];
    this.http.get('../../assets/documents/subCategories.json').subscribe(data => {
      retrievedData = data;
      retrievedData.forEach(sub => {
        sub.documents.forEach(doc => {
          if (doc.title.includes(input)) {
            let document = doc;
            document.subcategory = sub.title;
            document.category = sub.category;
            documents.push(doc);
            console.log(doc);
          }
        });
      });
    });
    return documents;
  }


}
