import { Component, OnInit } from "@angular/core";
import { Organization } from "src/app/backoffice/models/organization";
import { OrganizationService } from "src/app/backoffice/services/organization.service";

@Component({
    selector: "app-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
    organizationData = <Organization>{};

    constructor(private organizationService: OrganizationService) {}

    ngOnInit(): void {
        this.organizationService.getOrganization().subscribe((response) => {
            this.showOrganization(response);
        });
    }
    showOrganization(response: any) {
        this.organizationData = <Organization>response.data;
    }
}
