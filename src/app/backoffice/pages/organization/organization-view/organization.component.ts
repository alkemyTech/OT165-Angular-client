import { Component, OnInit } from "@angular/core";
import { OrganizationService } from "../../../../shared/services/organization.service";
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
        this.getOrganization();
    }

    getOrganization() {
        this.organizationService
            .getOrganization()
            .subscribe((res) => (this.organizationData = res));
    }
}
