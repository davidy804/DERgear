import { Component, OnInit } from '@angular/core';
import { MainModel } from '../shared/main-model';
import { MainItems } from '../shared/main-items';
import { MainService } from '../services/main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mains!: MainModel[];
  selectedMain!: MainModel;

  constructor(
    private mainService: MainService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMains();
    this.mains = MainItems;
    this.selectedMain = this.mains[0];
  }
  onclick(inputMain: MainModel){
    this.selectedMain = inputMain;
  }
  getMains(): void {
    this.mainService.getMains().subscribe(data=>this.mains=data);
  }
}
