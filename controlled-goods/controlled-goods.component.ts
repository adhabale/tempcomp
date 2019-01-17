import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { StandardSanctionService } from '../standard-sanction/services/standard-sanction.service';
import { GlobalService } from '../../common/services/global.service';



@Component({
  selector: 'app-controlled-goods',
  templateUrl: './controlled-goods.component.html',
  styleUrls: ['./controlled-goods.component.css']
})
export class ControlledGoodsComponent implements OnInit {

  policyType: string;
  sourceCountries: string[] = ['Russia', 'Iraq', 'Egypt', 'Afghanistan', 'Ukraine'];
  fileName: string;
  goodsSource: string = null;
  amendment: boolean = false;
  id = null;
  fromParent: boolean;

  constructor(private route: ActivatedRoute,private globalservice: GlobalService,
    private standardSacntion: StandardSanctionService, private router: Router) { }

  ngOnInit() {
    this.policyType = "New Policy";
    this.goodsSource = null;
    this.fromParent = false;
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (Number.isNaN(this.id))
      this.amendment = false;
    else
      this.amendment = true;
    if (this.standardSacntion.getConnectForm()) {
      this.fromParent = true;
    }
  }

  // showInfo() {
  //   (<any>$('[data-toggle="popover"]')).popover({
  //     trigger: 'focus'
  //   });
  // }
  preview(event) {
    console.log(event);
    // var file: string;
    // var ch='\';
    // file = event.srcElement.value;
    // this.fileName = file.substring(file.lastIndexOf('\'),file.length());
    this.fileName = event.srcElement.value;
  }

  backToParent() {
    this.standardSacntion.setConnectForm(false);
    if (this.amendment)
      this.router.navigateByUrl('my-workqueue');
    else
      this.router.navigateByUrl('standard-sanction');
  }


//17jan--------------------------------------------------
    hideBUBtn: boolean;
  checkUser(val) {
    let param;
    this.route.params.subscribe(params => {
      param = params
    });
    if (param.user) {
      val.form.disable();
      this.hideBUBtn = true;
    }

  }


   onCancel() {
    this.router.navigate(['my-workqueue']);
    window.scrollTo(0, 0);
  }


  //<!--for sanction user-->
  isSubmitted() {
    if (this.globalservice.user.value == 'Sanction User') {
      return true
    }
    else { return false }
  }
//17jan--------------------------------------------------

}
