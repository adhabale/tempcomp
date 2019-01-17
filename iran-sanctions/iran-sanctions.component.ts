import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "@angular/router";
import { GlobalService } from '../../common/services/global.service';



@Component({
  selector: 'app-iran-sanctions',
  templateUrl: './iran-sanctions.component.html',
  styleUrls: ['./iran-sanctions.component.css']
})
export class IranSanctionsComponent implements OnInit {

  policyType: string;
  durations: string[] = ['-1 year policy', '1 year policy', '2 year policy', '3 year policy', '4 year policy', '5+ year policy',];
  reInsuranceServicesList: string[] = ['Marine Cargo', 'K&R', 'health and benefits advisory'];
  sanctionedCountries: string[] = ['Russia', 'Iraq', 'Egypt', 'Afghanistan', 'Ukraine'];
  currencies: string[] = ['GBP', 'HKD'];
  insuranceTypes: string[] = ['N/A', 'Reinsurance', 'Facultative', 'Treaty'];
  iranianConsignees: string[] = ['N/A', 'Consignees A', 'Charterers A', 'Consignees A'];
  fileName: string;
  hideBUBtn: boolean;//17jan


  constructor(private router: ActivatedRoute, private route: Router,private globalservice: GlobalService) { }

  ngOnInit() {
    this.policyType = "New Policy";
  }
  preview(event) {
    console.log(event);
    // var file: string;
    // var ch='\';
    // file = event.srcElement.value;
    // this.fileName = file.substring(file.lastIndexOf('\'),file.length());
    this.fileName = event.srcElement.value;

  }

  //17jan
  checkUser(form1,form2,form3,form4,form5) {
    let param;
    this.router.params.subscribe(params => {
      param = params
    });
    if (param.user) {
      form1.form.disable();
      form2.form.disable();
      form3.form.disable();
      form4.form.disable();
      form5.form.disable();
      this.hideBUBtn = true;
    }

  }                                            


   onCancel() {
    this.route.navigate(['my-workqueue']);
    window.scrollTo(0, 0);
  }



    //<!--for sanction user-->
  isSubmitted() {
    if (this.globalservice.user.value == 'Sanction User') {
      return true
    }
    else { return false }
  }

}
