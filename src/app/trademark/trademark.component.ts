import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trademark',
  templateUrl: './trademark.component.html',
  styleUrls: ['./trademark.component.css']
})
export class TrademarkComponent implements OnInit {

  constructor() { }

  applicantForm = true;
  agentForm = true;
  contactForm = true;
  brandForm = true;
  taxForm = true;
  productForm = true;
  categoryForm = true;
  priorityForm = true;
  colorsForm = true;
  notesForm = true;
  appendingsForm = true;
  signatureForm = true;

  ngOnInit() {
  }

  showApplicantForm() { this.applicantForm = !this.applicantForm; }
  showAgentForm() { this.agentForm = !this.agentForm; }
  showContactForm() { this.contactForm = !this.contactForm; }
  showBrandForm() { this.brandForm = !this.brandForm; }
  showTaxForm() { this.taxForm = !this.taxForm; }
  showProductForm() { this.productForm = !this.productForm; }
  showCategoryForm() { this.categoryForm = !this.categoryForm; }
  showPriorityForm() { this.priorityForm = !this.priorityForm; }
  showColorsForm() { this.colorsForm = !this.colorsForm; }
  showNotesForm() { this.notesForm = !this.notesForm; }
  showAppendingsForm() { this.appendingsForm = !this.appendingsForm; }
  showSignatureForm() { this.signatureForm = !this.signatureForm; }

}
