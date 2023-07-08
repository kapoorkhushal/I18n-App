import { Component, ElementRef, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Observable, debounceTime, fromEvent, merge } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @ViewChildren(FormControlName, { read: ElementRef }) formControls: ElementRef[] = [];

  public form!: FormGroup;
  public message: { [key: string]: string } = {};

  private validationMessages: {
    [key: string]: { [key: string]: string | { [key: string]: string } };
  };

  /**
   * creates an instance
   * @param builder 
   */
  constructor(private builder: FormBuilder) {
    this.validationMessages = {
      firstName: {
        required: "Please enter your first name"
      },
      lastName: {
        required: "Please enter your last name"
      },
      email: {
        required: "Please enter your Email",
        email: "Please enter a valid email password"
      },
      contactNumber: {
        required: "Please enter your Contact Number",
        pattern: "Please enter a valid number",
        maxLength: "Please enter a valid number"
      }
    };
  }

  /**
   * after view init
   */
  ngAfterViewInit(): void {
    const addBlurs: Observable<any>[] = this.formControls.map((formControl: ElementRef) =>
      fromEvent(formControl.nativeElement, 'blur')
    );
    merge(this.form?.valueChanges, ...addBlurs)
      .pipe(debounceTime(500))
      .subscribe((value) => {
        this.message = this.isInvalidInput(this.form as FormGroup);
      });
  }

  /**
   * on init
   */
  ngOnInit(): void {
    this.form = this.builder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]],
      contactNumber: ['', Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')],
    });
  }

  /**
   * checks for invalid input
   * @param formgroup 
   * @returns 
   */
  public isInvalidInput(formgroup: FormGroup): { [key: string]: string } {
    let messages: { [key: string]: string } = {};
    for (const input in formgroup.controls) {
        const key = formgroup.controls[input];
        if (key instanceof FormGroup) {
          const nestedGroupMessages = this.isInvalidInput(key);
          Object.assign(messages, nestedGroupMessages)
        } else {
          if (this.validationMessages[input]) {
            messages[input] = '';
            if (key.errors && (key.dirty || key.touched)) {
              Object.keys(key.errors).map(messageKey => {
                if (this.validationMessages[input][messageKey]) {
                  messages[input] = this.validationMessages[input][messageKey] as string;
                }
              });
          }
        }
      }
    }
    return messages;
  }

  public onSubmit(): void{

  }
}
