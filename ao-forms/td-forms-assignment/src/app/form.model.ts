export class Form {
  public static subLevel: {
    BAS: string,
    ADV: string,
    PRO: string } = {
      BAS: "Basic",
      ADV: "Advanced",
      PRO: "Professional"
  };

  constructor(
    public email: string,
    public subType: string,
    public password: string
  ) { }

}
