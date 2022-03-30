import { Component, OnInit } from "@angular/core";
import { OrganizationService } from "src/app/services/organization/organization.service";
import { Organization } from "../../../../shared/models/Organization";

@Component({
  selector: "app-organization",
  templateUrl: "./organization.component.html",
  styleUrls: ["./organization.component.scss"],
})
export class OrganizationComponent implements OnInit {
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
