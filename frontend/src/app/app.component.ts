import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './shared/services/api.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  private apiService = inject(ApiService);

  title = 'calendar';

  constructor() {}

  public ngAfterViewInit() {
    this.apiService.test().subscribe(res => {
      console.log(res);
    });
  }
}
