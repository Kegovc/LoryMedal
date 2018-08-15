import { Component, OnInit } from '@angular/core';
import { ContenidoService } from '../../shared/services/contenido.service';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { ToastrService } from '../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
// en este caso solo dice que declares la propiedad solo que anexale el public
  public noPause = true;
  public myInterval = 5000; // ms
  public concatoForm: FormGroup;
  public data: any = {};
  public errorMessages: any = {};
  public noticias: any[] = [
  ];

  constructor(
    private formBuilder: FormBuilder,
    private contenido: ContenidoService,
    private toastr: ToastrService,
  ) {
    this.contenido.getThreeNotices()
    .then((response: any) => {
      console.log(response.fun);

      if (response.fun.access) {
        this.noticias = response.fun.data;
      }
    })
    .catch(response => {
      console.error(response);
    });
  }

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
        if (this.errorMessages[k]) {
          this.toastr.error('Campo vacio o no cumple con el formato', 'Error en el formulario', {
            timeOut: 3000
          });
        }
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
