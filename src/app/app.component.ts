import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  multiForm: FormGroup;

  
  personList = [
    {
      'fName': "Mark",
      'lName': "Otto",
      'UserName': "@mdo"
    }, {
      'fName': "Mark",
      'lName': "Otto",
      'UserName': "@TwBootstrap"
    }, {
      'fName': "Jacob",
      'lName': "Thornton",
      'UserName': "@fat"
    }
  ]

  constructor(private formBuilder: FormBuilder) {
   
    this.multiForm = this.formBuilder.group({
      userDetails: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    
    this.multiForm = this.formBuilder.group({
      userDetails: this.formBuilder.array(
        this.personList.map(x => this.formBuilder.group({
          firstName: [x.fName, [Validators.required, Validators.minLength(2)]],
          lastName: [x.lName, [Validators.required, Validators.minLength(2)]],
          userName: [x.UserName, [Validators.required, Validators.minLength(2)]]
        }))
      )
    })
  }



  onAdd(){
    console.log('11');
    // this.personList.push({
    //   fName: "Anil",
    //   lName: "kk",
    //   UserName: "@anks"
    // })

    const steps = <FormArray>this.multiForm.controls['userDetails'];
    steps.push(this.formBuilder.group({
      firstName: ['muuu', [Validators.required, Validators.minLength(2)]],
      lastName: ['aa', [Validators.required, Validators.minLength(2)]],
      userName: ['test', [Validators.required, Validators.minLength(2)]]
    }))
  }
  onDelete(index){
    console.log(this.multiForm);
    const steps = <FormArray>this.multiForm.controls['userDetails'];
    
    steps.removeAt(index);
  }

  sendData(){
    console.log(this.multiForm.value);
    this.personList = this.multiForm.value.userDetails;
  }
}
