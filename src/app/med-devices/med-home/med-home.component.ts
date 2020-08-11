import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-med-home',
  templateUrl: './med-home.component.html',
  styleUrls: ['./med-home.component.css']
})
export class MedHomeComponent implements OnInit {

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