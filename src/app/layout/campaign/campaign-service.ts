import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  CAMPAIGN_REST_URL="http://35.244.6.42:8762/portalservice/campaign/v1/newCampaign";

  constructor(private httpClient: HttpClient) { }

  postCampaignData(campaingData: any): Observable<any> {
    return this.httpClient.post(this.CAMPAIGN_REST_URL, campaingData);
  }
}
