import { HttpClient } from "@angular/common/http";
import {Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "../model/user.mode";
import { BaseConstant } from "../constants/enum.constant";

@Injectable()
export class UserService {

    constructor(private http:HttpClient){

    }

    saveData(um: UserModel):Observable<any>{
        return this.http.post(BaseConstant.BASEURL + '/api/v1/users/',um);
    }
}