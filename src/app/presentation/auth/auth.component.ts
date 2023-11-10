import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "../../domain/services/auth.service";


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  private authService = inject(AuthService);

  constructor() {
    this.auth();
  }

  private auth(): void {
    this.authService._signInWithEmailAndPassword("teet", "asd");
  }

}
