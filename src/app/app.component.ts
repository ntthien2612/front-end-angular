import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // ✅ Import RouterModule để dùng router-outlet
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
