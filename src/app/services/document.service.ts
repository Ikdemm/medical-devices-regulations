import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('../../assets/documents/documents.json');
  }

  getCountries() {
    let retrievedData;
    let countries = [];
    this.http.get('../../assets/documents/documents.json').subscribe(data => {
      retrievedData = data;
      retrievedData.forEach(element => {
        countries.push(element);
      });
    });
    console.log(countries);
    return countries;
  }

  getSubCategories(category) {
    let retrievedData;
    let subCategories = [];
    this.http.get('../../assets/documents/subCategories.json').subscribe(data => {
      retrievedData = data;
      retrievedData.forEach(element => {
          if (element.category === category) {
            subCategories.push(element);
          }
        });
      });
    return subCategories;
  }

  getCategories(country) {
    let retrievedData;
    let categories = [];
    this.http.get('../../assets/documents/categories.json').subscribe(data => {
      retrievedData = data;
      retrievedData.forEach(category => {
        if (category.country === country) {
            categories.push(category.name);
          }
        });
      });
    return categories;
  }

  getAllDocuments() {
    let retrievedData;
    let documents = [];
    this.http.get('../../assets/documents/subCategories.json').subscribe(data => {
      retrievedData = data;
      retrievedData.forEach(element => {
        documents.push(element);
      });
    });
    return documents;
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
