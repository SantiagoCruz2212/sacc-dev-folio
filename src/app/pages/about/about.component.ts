import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface SoftSkill {
  id: number;
  name: string;
  icon: string;
}

interface Hobby {
  id: number;
  titleKey: string;
  descriptionKey: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
  profileInfo = {
    name: 'Santiago Andres',
    titleKey: 'about.profile-title',
    descriptionKey: 'about.profile-description',
    locationKey: 'about.location',
    available: true,
    imageUrl: 'images/profile/Santiago.jpg'
  };

  motivationKeys = ['about.motivation-1', 'about.motivation-2'];

  softSkills: SoftSkill[] = [
    { id: 1, name: 'about.skill-communication', icon: 'chat' },
    { id: 2, name: 'about.skill-problem-solving', icon: 'lightbulb' },
    { id: 3, name: 'about.skill-teamwork', icon: 'group' },
    { id: 4, name: 'about.skill-adaptability', icon: 'sync_alt' },
    { id: 5, name: 'about.skill-leadership', icon: 'star' }
  ];

  hobbies: Hobby[] = [
    {
      id: 1,
      titleKey: 'about.hobby1-title',
      descriptionKey: 'about.hobby1-description',
      icon: 'code'
    },
    {
      id: 2,
      titleKey: 'about.hobby2-title',
      descriptionKey: 'about.hobby2-description',
      icon: 'headset'
    },
    {
      id: 3,
      titleKey: 'about.hobby3-title',
      descriptionKey: 'about.hobby3-description',
      icon: 'speed'
    },
    {
      id: 4,
      titleKey: 'about.hobby4-title',
      descriptionKey: 'about.hobby4-description',
      icon: 'memory'
    },
    {
      id: 5,
      titleKey: 'about.hobby5-title',
      descriptionKey: 'about.hobby5-description',
      icon: 'waves'
    },
    {
      id: 6,
      titleKey: 'about.hobby6-title',
      descriptionKey: 'about.hobby6-description',
      icon: 'movie'
    },
    {
      id: 7,
      titleKey: 'about.hobby7-title',
      descriptionKey: 'about.hobby7-description',
      icon: 'restaurant'
    }
  ];
}
