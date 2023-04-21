import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transfer } from '../transfer';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent implements OnInit {

  transfers: Transfer[] = [];

  constructor(private service: TransferService) { }

  ngOnInit(): void {
    this.service.print().subscribe((transfer) => {
      this.transfers = transfer
    })
  }

}
