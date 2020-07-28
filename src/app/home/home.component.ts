import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../services/document.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private documentService: DocumentService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  documents;
  foundElements = [];

  searchForm = this.formBuilder.group({
    title: ['']
  })

  searchDocument() {
    let input = this.searchForm.get("title").value;
    this.router.navigate(['list', input]);
  }

  ngOnInit() {
  }

}
