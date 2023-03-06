import { Component, OnInit } from '@angular/core';
import { MainModel } from '../shared/main-model';
import { AllItems } from '../shared/all-items';
import { AllService } from '../services/all.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  alls!: MainModel[];
  selectedAll!: MainModel;

  constructor(
    private allService: AllService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAlls();
    this.alls = AllItems;
    this.selectedAll = this.alls[0];
  }
  onclick(inputAll: MainModel){
    this.selectedAll = inputAll;
  }
  getAlls(): void {
    this.allService.getAlls().subscribe(data=>this.alls=data);
  }
}
