import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  team = [
    {
      name: 'Dr. João Silva',
      description: 'Especialista em Direito Empresarial.',
      image: 'assets/joao.jpg',
    },
    {
      name: 'Dra. Maria Oliveira',
      description: 'Especialista em Direito Civil.',
      image: 'assets/maria.jpg',
    },
    {
      name: 'Dr. Carlos Souza',
      description: 'Especialista em Direito Penal.',
      image: 'assets/carlos.jpg',
    },
  ];
}
