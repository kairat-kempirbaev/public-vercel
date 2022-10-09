import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  @HostBinding('class') classes = 'flex-1 flex flex-col'
  @HostListener('window:resize', ['$event'])

  protected technology = [
    {
      title: 'launch vehicle',
      description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
      payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
      WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
      it's quite an awe-inspiring sight on the launch pad!`,
    },
    {
      title: 'Spaceport',
      description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
        by analogy to the seaport for ships or airport for aircraft. Based in the 
        famous Cape Canaveral, our spaceport is ideally situated to take advantage 
        of the Earth’s rotation for launch.`,
    },
    {
      title: 'Space capsule',
      description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
      capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
      you'll spend your time during the flight. It includes a space gym, cinema, 
      and plenty of other activities to keep you entertained.`,
    },
  ];

  private static readonly prefix: string = '/assets/technology/image-';

  protected readonly images = [
    {
      alt: 'launch vehicle',

      default: TechnologyComponent.prefix + 'launch-vehicle-portrait.jpg',
      leqTablet: TechnologyComponent.prefix + 'launch-vehicle-landscape.jpg',
    },
    {
      alt: 'space capsule',
      default: TechnologyComponent.prefix + 'space-capsule-portrait.jpg',
      leqTablet: TechnologyComponent.prefix + 'space-capsule-landscape.jpg',
    },
    {
      alt: 'spaceport',
      default: TechnologyComponent.prefix + 'spaceport-portrait.jpg',
      leqTablet: TechnologyComponent.prefix + 'spaceport-landscape.jpg',
    },
  ];

  constructor() {
  }
  
  protected fullConfig: any;
  ngOnInit(): void {}

  protected tabI: number = 1;
}
