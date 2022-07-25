import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-displaypatient',
  templateUrl: './displaypatient.component.html',
  styleUrls: ['./displaypatient.component.styl']
})
export class DisplaypatientComponent implements OnInit {

  constructor(@Inject(RestService) private srvc) { }
  patientList;

  ngOnInit(): void {
    this.displayPatient();

  }
  displayPatient(){
    
    this.srvc.getPatient().subscribe(
      (res)=>{
          this.patientList=res;
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
  deletePatient(patId):void {
    //var patId = this.patGroup.get('patientId').value;
    this.srvc.deletePatient(patId).subscribe(
      (res)=>{
          alert("Patient deleted");
          this.displayPatient();
          // this.loaddata();
          // this.patGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
}
