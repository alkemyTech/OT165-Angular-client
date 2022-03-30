import { Component, OnInit } from "@angular/core";
import { Organization } from "src/app/backoffice/models/organization";
import { OrganizationService } from "../../../services/organization/organization.service";
import { Member, MemberCard } from "src/app/shared/models/Member";
import { MemberService } from "src/app/shared/services/member.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  organizationData = <Organization>{};
  membersData: Member[] = [];
  membersCard: MemberCard[] = [];

  constructor(
    private organizationService: OrganizationService,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((res) => this.showMembers(res));
    this.showOrganization();
  }

  showOrganization() {
    this.organizationService.getOrganization().subscribe({
      next: (res) => {
        this.organizationData = <Organization>res;
      },
    });
  }

  showMembers(response: any) {
    this.membersData = response.data;
    this.membersData.forEach((member) => {
      let links = [];
      if (member.facebookUrl) {
        links.push({
          url: member.facebookUrl,
          name: "Facebook",
        });
      }
      if (member.linkedinUrl) {
        links.push({
          url: member.linkedinUrl,
          name: "LinkedIn",
        });
      }
      let memberCard = { ...member, links };
      this.membersCard.push(memberCard);
    });
  }
}
