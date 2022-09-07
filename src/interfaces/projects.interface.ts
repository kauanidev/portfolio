export interface ISection {
  title: string;
  image: {
    url: string;
  };
}

interface IProjectTag {
  label: string;
  slug: string;
}

export interface ITechnology {
  name: string;
  icon: string;
}

export interface IProject {
  slug: string;
  tags: IProjectTag[];
  title: string;
  creationDate: string;
  projectLink: string;
  repo: string;
  sections: ISection[];
  technologies: ITechnology[];
  thumbnail: {
    url: string;
  };
}
