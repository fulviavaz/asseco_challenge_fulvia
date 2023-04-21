import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transfer } from '../transfer';
import { TransferService } from '../transfer.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm!: FormGroup;

  constructor(
    private service: TransferService,
    private router: Router,
    private builder: FormBuilder
  ) { }

  ngOnInit(): void {
      this.myForm = this.builder.group({
        origin: [''],
        iban: [''],
        description: [''],
        amount: []
      });
  }

  submit() {
    const dados = this.myForm.getRawValue() as Transfer;
    console.log(dados);

    this.service.newTransfer(dados).subscribe(() => {
      this.router.navigate(['/submit'])
    })
  }

}
