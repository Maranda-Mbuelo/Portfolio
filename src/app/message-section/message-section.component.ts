import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent {

  isLoading: boolean = false;
  form: FormGroup = this.formBuilder.group({
    from_name: '',
    to_name: 'Mbuelo',
    from_email: '',
    subject: '',
    message: ''
  });

  showPopup: boolean = false;
  popupMessage: string = '';

  constructor(private formBuilder: FormBuilder) {}

  async send() {
    if (this.form) {
      this.isLoading = true;
      emailjs.init('13mcOOGf_L5wOewqm');
      try {
        await emailjs.send('service_5mrmudf', 'template_xow0yxg', {
          from_name: this.form.value.from_name,
          to_name: this.form.value.to_name,
          from_email: this.form.value.from_email,
          subject: this.form.value.subject,
          message: this.form.value.message,
        });
        this.showPopup = true;
        this.popupMessage = 'Message successfully sent';
        this.form.reset();
      } catch (error) {
        console.error('Failed to send message:', error);
        this.showPopup = true;
        this.popupMessage = 'Failed to send message';
      } finally {
        this.isLoading = false;
      }
    }
  }

  closePopup() {
    this.showPopup = false;
  }
  
}
