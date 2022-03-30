import { Component, OnInit } from "@angular/core";
import { Organization } from "src/app/backoffice/models/organization";
import { OrganizationService } from "../../../services/organization/organization.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  organizationData = <Organization>{};

  constructor(private organizationService: OrganizationService) {}

  ngOnInit(): void {
    this.showOrganization();
  }

  showOrganization() {
    this.organizationService.getOrganization().subscribe({
      next: (res) => {
        this.organizationData = <Organization>res;
      },
    });
  }
}
