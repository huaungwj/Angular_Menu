import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  public domain = 'http://a.itying.com/'

  constructor( public http: HttpClient) {

  }

  /**
   * 域 domain http://a.itying.com
   * api api/productlist
   */

  get(api){
    /**
     * 箭头函数的this是上一个作用域
     * 回调函数的this的作用域是调用该函数的对象
     */

    return new Promise((resolve,reject)=>{
      this.http.get(this.domain+api).subscribe(
        (res) => {resolve(res)}
      )
    })
  }

}
