import { Component } from '@angular/core';
import { BannerInterface } from './types/banner.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slides: BannerInterface[] = [
    {
      url: "./assets/images/Desktop/banner-carousel-1_1440.png",
      alt: "No lado esquerdo uma mulher com as mãos na cintura e com um fundo roxo e no outro lado a logo da Meteora com a frase 'Moda de impacto positivo'.",
      title: "",
      subtitle: "",
    },
    {
      url: "./assets/images/Desktop/banner-carousel-2_1440.png",
      alt: "Mulher sentada em um sofá com a mão na cabeça e o fundo é rosa.",
      title: "Coleção atemporal",
      subtitle: "Estilo e qualidade para durar.",
    },
    {
      url: "./assets/images/Desktop/banner-carousel-3_1440.png",
      alt: "Homem em pé com uma jaqueta. O fundo é da cor laranja.",
      title: "Coleção atemporal",
      subtitle: "Alto impacto visual, baixo impacto ambiental.",
    },
  ];


}
