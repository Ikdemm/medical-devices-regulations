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

  ngOnInit() {
  }

  showApplicantForm() { this.applicantForm = !this.applicantForm; }
  showAgentForm() { this.agentForm = !this.agentForm; }
  showContactForm() { this.contactForm = !this.contactForm; }

}
