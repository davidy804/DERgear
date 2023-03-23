export class MainModel {
  id: any;
  type!: string;
  name!: string;
  description!: string;
  imgSrc?: string;
  details!: [
    {
      imgSrc?: string;
      caption?: string;
    }
  ];
}
