import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';
import { AllService } from '../services/all.service';
import { MainModel } from '../shared/main-model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  all!: MainModel;
  alls!: MainModel[];

  constructor(private AllService: AllService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log('id-');
    console.log(id);
    this.AllService.getAlls().subscribe(data => this.alls = data);
    this.all = this.AllService.returnAll(id);

    this.route.params.pipe(
      switchMap((params: Params) =>
      this.AllService.getAll(+params['id']))).subscribe(data => {
       this.all = data;
      }
    );
  }
  goBack(): void{
    this.location.back();
  }
}
