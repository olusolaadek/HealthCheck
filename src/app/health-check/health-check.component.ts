import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.scss']
})
export class HealthCheckComponent implements OnInit {
  public healthData?: Check[];
  public results?: Result;
  public totalStatus?: string;
  public totalResponseTime?: number;


  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<Result>(environment.baseUrl + 'api/health')
      .subscribe(result => {
        this.results = result;

        this.healthData = result.checks;
        this.totalResponseTime = result.totalResponseTime;
        this.totalStatus = result.totalStatus;
        // console.log(result.checks);
      }, err => {
        console.log(err);
      }
      );
  }

}

interface Result {
  checks: Check[];
  totalStatus: string;
  totalResponseTime: number;
}
interface Check {
  name: string;
  responseTime: number;
  status: string;
  description: string;
}
