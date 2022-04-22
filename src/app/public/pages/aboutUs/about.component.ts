import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Organization } from "src/app/backoffice/models/organization";
import { OrganizationService } from "../../../services/organization/organization.service";
import { Member, MemberCard } from "src/app/shared/models/Member";
import { MemberService } from "src/app/services/members/member.service";
import { DialogService } from "src/app/shared/components/dialog/dialog.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  isLoading!: boolean;
  organizationData = <Organization>{};
  membersData: Member[] = [];
  membersCard: MemberCard[] = [];

  constructor(
    private organizationService: OrganizationService,
    private memberService: MemberService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.showMembers();
    this.showOrganization();
  }

  showOrganization() {
    this.organizationService.getOrganization().subscribe({
      next: (res) => {
        this.organizationData = <Organization>res;
        this.isLoading = false;
      },
      error: () => {
        this.dialogService.add({
          type: "error",
          title: "Contenido no encontrado",
          detail: "No se ha encontrado el contenido",
        });
      },
    });
  }

  showMembers() {
    this.memberService.getMembers().subscribe({
      next: (res) => {
        this.membersData = res;
        this.memberCard();
      },
      error: () => {
        this.dialogService.add({
          type: "error",
          title: "Contenido no encontrado",
          detail: "No se ha encontrado el contenido",
        });
      },
    });
  }

  memberCard() {
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
