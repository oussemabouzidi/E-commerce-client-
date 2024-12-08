import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SharedModule, HttpClientModule]
})
export class AppComponent {
  title = 'Ecommerce';
}
