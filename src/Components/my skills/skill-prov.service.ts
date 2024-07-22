import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillProvService {
  skills = [
    {
      category: 'Programming Languages',
      items: ['C#', 'JavaScript', 'SQL', 'HTML/CSS', 'TypeScript'],
      open: false
    },
    {
      category: 'Frameworks and Libraries',
      items: ['.NET Core / .NET 5/6/7', 'ASP.NET MVC', 'ASP.NET Web API', 'Entity Framework', 'SignalR', 'Angular', 'jQuery', 'Bootstrap', 'AutoMapper'],
      open: false
    },
    {
      category: 'Tools and IDEs',
      items: ['Visual Studio', 'Visual Studio Code', 'SQL Server Management Studio (SSMS)', 'Git', 'Postman'],
      open: false
    },
    {
      category: 'Databases',
      items: ['Microsoft SQL Server'],
      open: false
    },
    {
      category: 'Data Formats',
      items: ['JSON', 'XML'],
      open: false
    },
    {
      category: 'Data Structures and Algorithms',
      items: ['Arrays', 'Linked Lists', 'Stacks and Queues', 'Trees ','Sorting Algorithms (Quick Sort, etc.)', 'Searching Algorithms (Binary Search, etc.)'],
      open: false
    },
    {
      category: 'Authentication and Authorization',
      items: ['JWT (JSON Web Tokens)'],
      open: false
    },
    // {
    //   category: 'Cloud Services',
    //   items: ['Azure', 'AWS'],
    //   open: false
    // },
    // {
    //   category: 'DevOps and CI/CD',
    //   items: ['Azure DevOps', 'GitHub Actions', 'Docker'],
    //   open: false
    // },
    // {
    //   category: 'Testing Frameworks',
    //   items: ['xUnit', 'MSTest', 'NUnit'],
    //   open: false
    // },
    // {
    //   category: 'Project Management and Collaboration',
    //   items: ['JIRA', 'Trello', 'Slack', 'Microsoft Teams'],
    //   open: false
    // },
    {
      category: 'Other Technologies and Concepts',
      items: ['RESTful APIs', 'SOLID Principles', 'Design Patterns', 'Agile/Scrum'],
      open: false
    },
    // {
    //   category: 'Certifications',
    //   items: ['Microsoft Certified: Azure Developer Associate', 'Microsoft Certified: .NET Developer', 'Certified ScrumMaster (CSM)'],
    //   open: false
    // }
  ];
  constructor() { }
}
