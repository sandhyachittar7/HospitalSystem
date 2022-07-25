import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OutPatient } from '../out-patient.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-outpatient',
  templateUrl: './outpatient.component.html',
  styleUrls: ['./outpatient.component.styl']
})
export class OutpatientComponent implements OnInit {
  outpatientGroup = new FormGroup({
    outPatientId : new FormControl(),
    patientId : new FormControl("",Validators.required),
     doctorId  : new FormControl("",Validators.required),
    labTestId : new FormControl("",Validators.required),
    treatmentDate : new FormControl("",Validators.required)
  });
  constructor(@Inject(RestService) private srvc) { }
  outPatientList : OutPatient[];

  ngOnInit(): void {
    this.loaddata();
  }
  loaddata(){
    this.srvc.getOutPatient().subscribe(
        (res)=>{
            this.outPatientList=res as OutPatient[];
        },
        (err)=>{
            window.alert(JSON.stringify(err));
        }
      );
  }

    saveOutPatient():void {
    console.log(this.outpatientGroup.value);
    this.srvc.saveOutPatient(this.outpatientGroup.value).subscribe(
      (res)=>{
          alert('OutPatient Successfully Added')
          this.loaddata();
          this.outpatientGroup.reset();
      },
      (err)=>{
        alert(JSON.stringify(err));
      }
    );
  }

searchOutPatient():void{
    var outPatientId = this.outpatientGroup.get('outPatientId').value;
    this.srvc.searchOutPatient(outPatientId).subscribe(
      (res)=>{
          this.outpatientGroup.patchValue(res);
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }

 deleteOutPatient():void{
    var outPatientId = this.outpatientGroup.get('outPatientId').value;
    this.srvc.deleteOutPatient(outPatientId).subscribe(
      (res)=>{
          alert("OutPatient deleted");
          this.loaddata();
          this.outpatientGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }

updateOutPatient():void {
    var outPatientId = this.outpatientGroup.get('outPatientId').value;
    this.srvc.updateOutPatient(outPatientId, this.outpatientGroup.value).subscribe(
      (res)=>{
          alert("OutPatient updated");
          this.loaddata();
          this.outpatientGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
  
}


