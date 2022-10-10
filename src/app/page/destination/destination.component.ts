import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent implements OnInit {
  @HostBinding('class') classes = 'flex-1 flex flex-col lg:flex-row';
  protected destination = [
    {
      title: 'Moon',
      description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
      distance: '384,400 KM',
      tt: '3 days',
    },
    {
      title: 'Mars',
      description:
        'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      distance: '225 mil. km',
      tt: '9 month',
    },
    {
      title: 'Europa',
      description:
        'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      distance: '628 mil. km',
      tt: '3 years',
    },
    {
      title: 'Titan',
      description:
        'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance: '1.6 bil. km',
      tt: '7 years',
    },
  ];

  private static readonly prefix: string = '/assets/destination/';

  protected readonly images = [
    {
      alt:"moon",
      default: DestinationComponent.prefix + 'image-moon.png',
      webp: DestinationComponent.prefix + 'image-moon.webp',
    },
    {
      alt:"mars",
      default: DestinationComponent.prefix + 'image-mars.png',
      webp: DestinationComponent.prefix + 'image-mars.webp',
    },
    {
      alt:"europa",
      default: DestinationComponent.prefix + 'image-europa.png',
      webp: DestinationComponent.prefix + 'image-europa.webp',
    },
    {
      alt:"titan",
      default: DestinationComponent.prefix + 'image-titan.png',
      webp: DestinationComponent.prefix + 'image-titan.webp',
    },
  ];

  protected tabI: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
