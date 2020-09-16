import { Component, OnInit, Inject } from '@angular/core';
import { MY_SERVICE_TOKEN, IMyService } from '../my-service.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  constructor(@Inject(MY_SERVICE_TOKEN) mySvc: IMyService) { }

  ngOnInit(): void {
  }

}
