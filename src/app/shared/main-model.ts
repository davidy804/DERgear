export class MainModel {
  id: any;
  name!: string;
  description!: string;
  link: any;
  imgSrc?: string;
  details!: [
    {
      imgSrc?: string;
      caption?: string;
    }
  ];
}
