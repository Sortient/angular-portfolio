import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [
    {
      id: 1,
      title: 'Python Comment Analysis App',
      description: 'A Python application analyzing sentiment and quality of code review comments using NLTK.',
      link: 'https://github.com/sortient/python-comment-analysis',
      image: "code-review-heatmap.png"
    },
    {
      id: 2,
      title: 'UDP-P2P',
      description: 'A C#/WinForms chat client allowing users to engage in a serverless P2P chat room.',
      link: 'https://github.com/sortient/udp-p2p-client',
      image: "udp-p2p-screenshot.png"
    },
    {
      id: 3,
      title: "Caisteal nam Marbh",
      description: "A WWII-themed Call of Duty: Black Ops 3 Zombies map, set in an abandoned castle in the Scottish Highlands.",
      link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3406897906",
      image: "zombies_map.png"
    },
    {
      id: 4,
      title: 'Ulster Civ 6 Mod',
      description: 'A Civilization 6 mod adding Northern Ireland/Ulster with John Hume as the playable leader.',
      link: 'https://github.com/Sortient/ulster-civ6',
      image: "civ6-mod.png"
    },
    // {
    //   id: 5,
    //   title: 'Portfolio Website',
    //   description: 'This website! Built with Angular 19 and Bootstrap.',
    //   image: "zombies_map.png"
    // },
    {
      id: 6,
      title: 'Analysing Quality Metrics and Automated Scoring of Code Reviews',
      description: 'A research project on the quality of code review comments and how they impact the transfer of knowledge to junior devs, and the overall culture of a project/team. Published in MDPI Software in November 2024',
      link: 'https://www.mdpi.com/2674-113X/3/4/25',
      image: "code-reviews-paper.png"
    }
  ]
}
