import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css'],
})

export class CrewComponent implements OnInit {
  @HostBinding('class') classes = 'flex flex-col flex-1 md:flex-row';
  protected crew = [
    {
      occupation: 'COMMANDER',
      name: `DOUGLAS HURLEY`,
      mission:
        'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    },
    {
      occupation: 'MISSION SPECIALIST',
      name: 'MARK SHUTTLEWORTH',
      mission:
        'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    },
    {
      occupation: 'PILOT',
      name: 'VICTOR GLOVER',
      mission:
        'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    },
    {
      occupation: 'FLIGHT ENGINEER',
      name: 'ANOUSHEH ANSARI',
      mission:
        'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    },
  ];

  private static readonly prefix: string = '/assets/crew/';

  protected readonly images = [
    {
      alt: 'DOUGLAS HURLEY',
      default: CrewComponent.prefix + 'image-douglas-hurley.png',
      webp: CrewComponent.prefix + 'image-douglas-hurley.webp',
    },
    {
      alt: 'MARK SHUTTLEWORTH',
      default: CrewComponent.prefix + 'image-mark-shuttleworth.png',
      webp: CrewComponent.prefix + 'image-mark-shuttleworth.webp',
    },
    {
      alt: 'VICTOR GLOVER',
      default: CrewComponent.prefix + 'image-victor-glover.png',
      webp: CrewComponent.prefix + 'image-victor-glover.webp',
    },
    {
      alt: 'ANOUSHEH ANSARI',
      default: CrewComponent.prefix + 'image-anousheh-ansari.png',
      webp: CrewComponent.prefix + 'image-anousheh-ansari.webp',
    },
  ];

  protected tabI: number = 3;
  constructor() {}

  ngOnInit(): void {}
}
