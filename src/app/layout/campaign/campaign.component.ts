import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  roles = ['Admin', 'Employee','Some role 1', 'Some role 2'];

  test: any;

//   orderForm: FormGroup;
// items: FormArray;

  campaignForm: FormGroup;

  // createItem(): FormGroup {
  //   return this.fb.group({
  //     name: '',
  //     description: '',
  //     price: ''
  //   });
  // }

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {

    // this.orderForm = this.fb.group({
    //   customerName: '',
    //   email: '',
    //   items: this.fb.array([ this.createItem() ])
    // });

    this.campaignForm = this.fb.group({
      campaignName: 'AirtelSupport',
      callDirection: 'INCOMING',
      campaignStatus: 'Active',
      isEnabledForPopup: true,
      typeOfCall: 'QUEUE_INCOMING',
      isDefault: false,
      campaignIncomingSettings: this.fb.group({
        didNumbers: this.fb.array([]),
        queueNames: this.fb.array([]),
        ctiPostBackUrl: [''],
      }),
      campaignOutgoingSettings: this.fb.group({
        isExtensionWise: [''],
        noOfClientTries: [''],
        noOfAgentTries: [''],
        retryAfter: [''],
        trunkName: this.fb.array(['']),
        prefix: [''],
        dialOutWaitTimeInSecs: [''],
      }),
      campaignPopup: this.fb.group({
        moduleName: ['customer'],
        directoryInfoURL: [''],
        wrapUpTimeInSecs: [30],
        campaignFeedSource: ['ModuleLinked'],
        dispositions: this.fb.array([{
          dispositionID: '9bca0b0a-9689-4712-906c-ac0712c7533c',
          fieldDataType: 'DropDown',
          dropDownValues: ['Resolved'],
          fieldLabel: 'Resolution',
          callWorkFlow: '',
          dependantDisp: [],
          sendSMS: false,
          smsText: '',
          conversion: false
        }
        ]),
        showFields: this.fb.array([{
          fieldLabel: 'Customer Since',
          displayField: 'customerSince',
          showFieldID: "251c351c-ff7a-4a92-95f0-8f5aec593132",
          isUrl: false,
        }])
      })
    });
    /*
        this.campaignForm = new FormGroup({
          firstName: new FormControl('AirtelSupport'),
          callDirection: new FormControl('INCOMING'),
          campaignStatus: new FormControl('Active'),
          isEnabledForPopup: new FormControl('true'),
          typeOfCall: new FormControl('QUEUE_INCOMING'),
          isDefault: new FormControl('false'),
          campaignIncomingSettings: new FormGroup({
            didNumbers: new FormControl('277003'),
            queueNames: new FormControl('3000')
          })
        });
    */
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    //this.test = JSON.stringify(this.campaignForm.value);
    let headers = new HttpHeaders({
      'accountId': '5771644c4e00731d9bad9f33',
      'userId': '5771647b4e00731d9bad9f36'
    });
    let options = { headers: headers };
    console.log(this.campaignForm.value);
    this.test = this.campaignForm.value;
    this.http.post('http://35.200.165.53:8080/campaign/v1/newCampaign', this.campaignForm.value, options);
  }


  addCreds() {
    const creds = this.campaignForm.controls.credentials as FormArray;
    creds.push(this.fb.group({
      username: '',
      password: '',
    }));
  }

}
