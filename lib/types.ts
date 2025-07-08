export enum ProjectStatus {
    Completed = 'Completed',
    InProgress = 'In Progress',
}

export interface Project {
    title: string;
    description: string;
    category: string;
    technologies: string[];
    link: string;
    status: ProjectStatus;
}

export interface Skill {
    name: string
    items: string[]
    icon: React.JSX.Element
}
