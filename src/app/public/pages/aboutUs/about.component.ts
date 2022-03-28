import { Component, OnInit } from "@angular/core";
import { Organization } from "src/app/backoffice/models/organization";
import { OrganizationService } from "src/app/backoffice/services/organization.service";
import { Member } from "src/app/shared/models/Member";
import { MemberService } from "src/app/shared/services/member.service";

@Component({
    selector: "app-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
    organizationData = <Organization>{};
    membersData: Member[] = [];

    constructor(
        private organizationService: OrganizationService,
        private memberService: MemberService
    ) {}

    ngOnInit(): void {
        this.memberService
            .getMembers()
            .subscribe((res) => this.showMembers(res));
        this.organizationService.getOrganization().subscribe((response) => {
            this.showOrganization(response);
        });
    }
    showOrganization(response: any) {
        this.organizationData = <Organization>response.data;
    }
    showMembers(response: any) {
        this.membersData = response.data;
    }
}
