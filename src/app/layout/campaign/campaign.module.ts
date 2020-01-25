import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignComponent } from './campaign.component';
import { CampaignRoutingModule } from './campaign-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from 'src/app/shared';



@NgModule({
  declarations: [CampaignComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    CampaignRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CampaignModule { }
