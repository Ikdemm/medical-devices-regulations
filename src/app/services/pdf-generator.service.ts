import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  fillPDF(form) {
    return {
      content: [
        {
          columns: [
            [
              {
                text: "1. Déponsant",
                bold: true,
                fontsize: 20
              },
              {
                text: "Prénom, nom ou raison sociale, adresse, code postal, localité",
                bold: true,
                color: 'gray',
                fontsize: 12
              },
              {
                text: form.applicantFirstName + ", " +
                      form.applicantLastName + ", " +
                      form.applicantSocialReason + ", " +
                      form.applicantAddress + ", " +
                      form.applicantPostCode + ", " +
                      form.applicantLocation + ", ",
                fontsize: 12
              },
              {
                text: "2. Mandataire",
                bold: true,
                fontsize: 20
              },
              {
                text: "Prénom, nom ou raison sociale, adresse, code postal, localité",
                bold: true,
                color: 'gray',
                fontsize: 12
              },
              {
                text: form.agentFirstName + ", " +
                      form.agentLastName + ", " +
                      form.agentSocialReason + ", " +
                      form.agentAddress + ", " +
                      form.agentPostCode + ", " +
                      form.agentLocation + ", ",
                fontsize: 12
              },
            ]
            
          ]
        }
      ]
    }
  }

  constructor() { }
}
