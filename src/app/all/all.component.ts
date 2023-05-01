import { Component, OnInit } from '@angular/core';
import { MainModel } from '../shared/main-model';
import { Location } from '@angular/common';
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
  categoryMice: boolean = true;
  categoryMousepads: boolean = true;
  categoryKeyboards: boolean = true;
  categoryAudio: boolean = true;
  categoryMonitors: boolean = true;
  categoryWatches: boolean = true;
  categoryEDC: boolean = true;
  categoryOther: boolean = true;

  constructor(
    private allService: AllService,
    private route: ActivatedRoute,
    private location: Location
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
  showAll(){
    this.categoryMice = true;
    this.categoryMousepads = true;
    this.categoryKeyboards = true;
    this.categoryAudio = true;
    this.categoryMonitors = true;
    this.categoryWatches = true;
    this.categoryEDC = true;
    this.categoryOther = true;
  }
  showMice(){
    this.categoryMice = true;
    this.categoryMousepads = false;
    this.categoryKeyboards = false;
    this.categoryAudio = false;
    this.categoryMonitors = false;
    this.categoryWatches = false;
    this.categoryEDC = false;
    this.categoryOther = false;
  }
  showMousepads(){
    this.categoryMice = false;
    this.categoryMousepads = true;
    this.categoryKeyboards = false;
    this.categoryAudio = false;
    this.categoryMonitors = false;
    this.categoryWatches = false;
    this.categoryEDC = false;
    this.categoryOther = false;
  }
  showKeyboards(){
    this.categoryMice = false;
    this.categoryMousepads = false;
    this.categoryKeyboards = true;
    this.categoryAudio = false;
    this.categoryMonitors = false;
    this.categoryWatches = false;
    this.categoryEDC = false;
    this.categoryOther = false;
  }
  showAudio(){
    this.categoryMice = false;
    this.categoryMousepads = false;
    this.categoryKeyboards = false;
    this.categoryAudio = true;
    this.categoryMonitors = false;
    this.categoryWatches = false;
    this.categoryEDC = false;
    this.categoryOther = false;
  }
  showMonitors(){
    this.categoryMice = false;
    this.categoryMousepads = false;
    this.categoryKeyboards = false;
    this.categoryAudio = false;
    this.categoryMonitors = true;
    this.categoryWatches = false;
    this.categoryEDC = false;
    this.categoryOther = false;
  }
  showWatches(){
    this.categoryMice = false;
    this.categoryMousepads = false;
    this.categoryKeyboards = false;
    this.categoryAudio = false;
    this.categoryMonitors = false;
    this.categoryWatches = true;
    this.categoryEDC = false;
    this.categoryOther = false;
  }
  showEDC(){
    this.categoryMice = false;
    this.categoryMousepads = false;
    this.categoryKeyboards = false;
    this.categoryAudio = false;
    this.categoryMonitors = false;
    this.categoryWatches = false;
    this.categoryEDC = true;
    this.categoryOther = false;
  }
  showOther(){
    this.categoryMice = false;
    this.categoryMousepads = false;
    this.categoryKeyboards = false;
    this.categoryAudio = false;
    this.categoryMonitors = false;
    this.categoryWatches = false;
    this.categoryEDC = false;
    this.categoryOther = true;
  }
  goBack(): void{
    this.location.back();
  }
}
