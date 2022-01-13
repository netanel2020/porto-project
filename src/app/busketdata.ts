export interface busketinterface{
  PRDID:number;
  PRDname:string;
  PRDAttribute:string;
  PRDTitle:string;
  PRDImage:string;
  PRDCategory:string;
  PRDPrice:number;
  PRDCost:number;
  
}
export class busketbnterface{
  PRDID:number;
  PRDname:string;
  PRDAttribute:string;
  PRDTitle:string;
  PRDImage:string;
  PRDCategory:string;
  PRDPrice:number;
  PRDCost:number;
  push: any;

  constructor(){   this.PRDID= 0,
    this.PRDname="",
    this.PRDAttribute="",
    this.PRDTitle="",
    this.PRDImage="",
    this.PRDCategory="",
    this.PRDPrice=0,
    this.PRDCost=0}
}

export class BusketData {
  [x: string]: any;
   BusketId : number;
    PRDID: number;
DelItem:boolean;
Quentity:number;

constructor(){
this.PRDID=0;
this.BusketId=0;
this.DelItem=false;
this.Quentity=1;


}
 
    }
    