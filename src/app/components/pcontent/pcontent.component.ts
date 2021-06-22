import { Component, OnInit,ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RequestService} from '../../services/request.service';

@Component({
  selector: 'app-pcontent',
  templateUrl: './pcontent.component.html',
  styleUrls: ['./pcontent.component.less']
})
export class PcontentComponent implements OnInit {

  @ViewChild('input1') input1:any;
  @ViewChild('input2') input2:any;
  @ViewChild('input3') input3:any;

  public list:any = [];

  public domain = this.requestS.domain

  constructor(public router: ActivatedRoute,public requestS : RequestService) {

  }

  ngOnInit(): void {
    this.router.params.subscribe(
      (res) => {
        // @ts-ignore
        this.requestS.get('api/productcontent?id='+res.id).then(
          (res:any) => {this.list = res.result;/*console.log(res.result)*/}
        )
      }
    )


  }
  //数量递减
  reductionOf(){
    // console.log(this.input1.nativeElement)
    // console.log(this.input2.nativeElement.value)
  if (this.input2.nativeElement.value == 0){
      this.input2.nativeElement.value = 0
    }else {
    this.input2.nativeElement.value = parseInt(this.input2.nativeElement.value) - 1
  }
  }

  add(){
    // console.log(this.input1.nativeElement)
    // console.log(this.input2.nativeElement.value)
    if (this.input2.nativeElement.value == ''){
      this.input2.nativeElement.value = 1
    }else {
      this.input2.nativeElement.value = parseInt(this.input2.nativeElement.value) + 1
    }
  }

  shoppingCar(){
    alert('加入成功')
  }





}
