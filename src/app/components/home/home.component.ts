import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../services/request.service';

interface data {
  id: string;
  pid: string;
  title: string;
};

interface list extends data{
  list: data
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public list:list[] = [];
  public domain = this.common.domain

  constructor(public common:RequestService) { }

  ngOnInit(): void {
    this.common.get('api/productlist').then(
      (res:{result: list[]}) => {
        // console.log(res.result)
        this.list = res.result;
      }
    )
  }

}
