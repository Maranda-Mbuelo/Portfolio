import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent {

  currentState = [
    {
      topic : 'My Job Searching Preferences',
      description: 'I am a self-taught programmer currently living in rural areas of Limpopo, Mafukani. I am looking for any type of job (freelancing, part-time, remote, hybrid, or office job) but a remote job is the best option for me at the moment as I can\'t afford to go to the city. However, I am open to any job offers and would be glad to accept them. I am actively seeking employment opportunities and I am excited about any potential job offers that come my way.'
    }, 

    {
      topic: 'My Interest Space',
      description: 'I am highly enthusiastic about pursuing a career in TypeScript development. Currently, I am actively engaged in learning TypeScript and find the language highly enjoyable to work with due to its exceptional features and capabilities. I am deeply passionate about leveraging TypeScript\'s potential in professional settings.'
    }
  ];

}
