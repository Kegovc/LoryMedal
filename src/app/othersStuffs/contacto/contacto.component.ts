import { ContenidoService } from './../../shared/services/contenido.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  public concatoForm: FormGroup;
  public data: any = {};
  public errorMessages: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private contenido: ContenidoService
  ) { }


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.concatoForm = this.formBuilder.group( {
      nombre: ['', Validators.required],
      email: ['', [Validators.required]],
      asunto: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    });
  }
  showMessages(form: FormGroup) {
    for (const k in form.controls) {
      if (form.controls.hasOwnProperty(k)) {
        this.errorMessages[k] = this.hasError(form, k, ['required', 'email', 'pattern'], true);
      }
    }
  }
  hasError(form: FormGroup, controlName, errors: any[], force = false) {
    // tslint:disable-next-line:no-debugger
    const control = form.controls[controlName];
    console.log(control.errors);
    console.log(control.dirty);
    let erro = false;
    errors.forEach(error => {
      try {
      if (typeof control.errors[error] !== 'undefined') {
          erro = erro || (control.errors[error] && (control.dirty || force));
        }
      } catch (e) {
        erro = erro || false;
      }
    });
      return erro;
  }

  doContacto() {
    console.log('Form: ', this.concatoForm);
    this.showMessages(this.concatoForm);
    if (!this.concatoForm.valid) {
      console.log('Error: ', this.errorMessages);
      return;
    } else {
      this.connectContacto();
    }
  }

  connectContacto() {
    console.log(this.data);
    this.contenido.mailto(this.data)
    .then((response: any) => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

}
