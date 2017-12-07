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
  teamForm: FormGroup;
  allTeamDetails = [{


    'first_name': 'anil',
    'last_name': 'kumar'
  }
  ];
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
    this.teamForm = this.formBuilder.group({
      memberDetails: this.formBuilder.array([])
    });
    this.multiForm = this.formBuilder.group({
      userDetails: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.teamForm = this.formBuilder.group({
      memberDetails: this.formBuilder.array(
        this.allTeamDetails.map(x => this.formBuilder.group({
          firstName: [x.first_name, [Validators.required, Validators.minLength(2)]],
          lastName: [x.last_name, [Validators.required, Validators.minLength(2)]]
        }))
      )
    });
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
    this.personList.push({
      fName: "Anil",
      lName: "kk",
      UserName: "@anks"
    })
  }
  onDelete(index){
    console.log('11');
    this.personList.splice(index,1);
  }
}
