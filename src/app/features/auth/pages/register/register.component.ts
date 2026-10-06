import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);

  readonly isSubmitting = signal(false);
  readonly selectedRole = this.route.snapshot.queryParamMap.get('role') === 'client'
    ? 'Client'
    : 'Worker';
  readonly countryCodes = ['+20', '+966', '+971', '+1', '+44'] as const;
  readonly selectedCountryCode = signal<(typeof this.countryCodes)[number]>('+20');
  readonly registerForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    phone: ['', Validators.pattern(/^\d[\d\s()-]{6,19}$/)],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  setCountryCode(event: Event): void {
    const selectedCode = this.countryCodes.find(
      (countryCode) => countryCode === (event.target as HTMLSelectElement).value,
    );

    if (selectedCode) {
      this.selectedCountryCode.set(selectedCode);
    }
  }

  submit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    if (this.isSubmitting()) {
      return;
    }

    // Connect AuthService.register({ ...this.registerForm.getRawValue(), phone: `${this.selectedCountryCode()} ${this.registerForm.controls.phone.value}` }, this.selectedRole) here.
  }
}
