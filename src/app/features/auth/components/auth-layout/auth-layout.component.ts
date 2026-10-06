import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [NgOptimizedImage, RouterOutlet],
  templateUrl: './auth-layout.component.html',
  host: { class: 'block min-h-svh w-full' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {}
